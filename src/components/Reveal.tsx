import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal helpers. Content is always fully visible in the server HTML:
 * the hidden start state only applies under `html.reveal-ready`, a class added
 * after hydration (see styles.css). Respects prefers-reduced-motion.
 */

const OBSERVER_OPTS: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" };
const SELECTORS = ["section h2", "article", "tbody tr", "details", "[data-conversion-banner]", "[data-reveal]"];

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function animateCount(el: HTMLElement) {
  const final = el.textContent ?? "";
  const m = final.match(/^(\D*)(\d+)(\D*)$/);
  if (!m) return;
  const [, pre, num, post] = m;
  const target = Number(num);
  const start = performance.now();
  const step = (t: number) => {
    const p = Math.min(1, (t - start) / 1200);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = p < 1 ? `${pre}${Math.round(target * eased)}${post}` : final;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function enableReveal(): () => void {
  document.documentElement.classList.add("reveal-ready");
  return () => {};
}

/**
 * Drop `<RevealScope />` inside a page container: every matching element that
 * comes AFTER it in the same parent (cards, section headers, table rows, FAQs,
 * banners) gets revealed on scroll. Elements before it (hero, marquee) are untouched.
 */
export function RevealScope() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const marker = ref.current;
    const root = marker?.parentElement;
    if (!marker || !root) return;
    const counters = Array.from(root.querySelectorAll<HTMLElement>("[data-count]")).filter(
      (el) => marker.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING,
    );
    if (reducedMotion() || !("IntersectionObserver" in window)) return;

    const targets: HTMLElement[] = [];
    root.querySelectorAll<HTMLElement>(SELECTORS.join(",")).forEach((node) => {
      // section headers: animate the whole header block (pill + H2 + paragraph)
      const el = node.tagName === "H2" ? (node.parentElement as HTMLElement) : node;
      if (!(marker.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING)) return;
      if (el.closest("footer, header, nav")) return;
      if (targets.includes(el) || targets.some((t) => t.contains(el) || el.contains(t))) return;
      targets.push(el);
    });
    targets.forEach((el) => {
      const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((s) => targets.includes(s as HTMLElement)) : [el];
      const i = Math.min(sibs.indexOf(el), 5);
      el.setAttribute("data-reveal-item", "");
      if (i > 0) el.style.transitionDelay = `${i * 90}ms`;
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        if (el.hasAttribute("data-count")) animateCount(el);
        else el.classList.add("is-revealed");
        io.unobserve(el);
      });
    }, OBSERVER_OPTS);
    targets.forEach((t) => io.observe(t));
    counters.forEach((c) => io.observe(c));
    enableReveal();
    return () => io.disconnect();
  }, []);
  return <span ref={ref} hidden aria-hidden />;
}

/** Single-element reveal with optional delay (ms). */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion() || !("IntersectionObserver" in window)) return;
    el.setAttribute("data-reveal-item", "");
    if (delay) el.style.transitionDelay = `${delay}ms`;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-revealed"); io.disconnect(); }
    }, OBSERVER_OPTS);
    io.observe(el);
    enableReveal();
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

export default Reveal;
