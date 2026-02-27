interface ImagePlaceholderProps {
  description: string;
  className?: string;
  height?: string;
}

const ImagePlaceholder = ({ description, className = "", height = "auto" }: ImagePlaceholderProps) => (
  <div
    role="img"
    aria-label={description}
    className={`bg-warm-bg border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 text-muted-foreground font-body text-[13px] text-center p-5 ${className}`}
    style={{ height, minHeight: "140px" }}
  >
    <span className="text-[28px]">🖼</span>
    <span>[{description}]</span>
  </div>
);

export default ImagePlaceholder;
