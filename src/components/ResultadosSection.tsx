import gbpViviane from "@/assets/casos/gbp-viviane.png";
import waViviane from "@/assets/casos/wa-viviane.png";
import scObras from "@/assets/casos/sc-obras.png";

const Placeholder = ({ text, height = 160 }: { text: string; height?: number }) => (
  <div
    style={{
      width: "100%", height, display: "flex", alignItems: "center",
      justifyContent: "center", background: "rgba(255,255,255,0.02)",
      border: "1px dashed rgba(255,255,255,0.1)", borderRadius: "10px",
      color: "rgba(255,255,255,0.2)", fontSize: "11px",
      textAlign: "center", padding: "16px", lineHeight: 1.6,
      whiteSpace: "pre-line"
    }}
  >{text}</div>
);

const Screenshot = ({ src, placeholder, label, height = 160 }: { src: string; placeholder: string; label: string; height?: number }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
    <div style={{
      fontSize: "9px", color: "rgba(255,255,255,0.25)",
      textTransform: "uppercase", letterSpacing: "0.08em"
    }}>{label}</div>
    {src
      ? <img src={src} alt={label} style={{ width: "100%", borderRadius: "10px", display: "block", height, objectFit: "cover", objectPosition: "center" }} />
      : <Placeholder text={placeholder} height={height} />
    }
  </div>
);

interface Metrica {
  val: string;
  label: string;
  featured?: boolean;
}

interface CasoPositivoProps {
  sector: string;
  ciudad: string;
  mes: string;
  inicial: string;
  nombreCorto: string;
  metricas: Metrica[];
  quote: string;
  srcScreenshot1: string;
  srcScreenshot2: string;
  labelScreenshot1: string;
  labelScreenshot2: string;
  placeholderSc1: string;
  placeholderSc2: string;
  srcWa: string;
  placeholderWa: string;
}

const CasoPositivo = ({ sector, ciudad, mes, inicial, nombreCorto, metricas, quote, srcScreenshot1, srcScreenshot2, labelScreenshot1, labelScreenshot2, placeholderSc1, placeholderSc2, srcWa, placeholderWa }: CasoPositivoProps) => (
  <div style={{
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px", padding: "32px",
    display: "flex", flexDirection: "column", gap: "24px"
  }}>
    {/* Header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "linear-gradient(135deg,#D96A28,#1A1D2E)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Syne',sans-serif", fontSize: "20px", fontWeight: 800, color: "#fff"
        }}>{inicial}</div>
        <div>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>{nombreCorto}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>{sector} · {ciudad}</div>
        </div>
      </div>
      <div style={{
        background: "rgba(217,106,40,0.1)", border: "1px solid rgba(217,106,40,0.3)",
        borderRadius: "100px", padding: "4px 14px",
        fontSize: "10px", fontWeight: 500, color: "#F97316",
        letterSpacing: "0.08em", textTransform: "uppercase"
      }}>Mes {mes} · activo</div>
    </div>

    {/* Métricas */}
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${metricas.length}, 1fr)`, gap: "10px" }}>
      {metricas.map((m, i) => (
        <div key={i} style={{
          background: m.featured ? "rgba(217,106,40,0.08)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${m.featured ? "rgba(217,106,40,0.2)" : "rgba(255,255,255,0.06)"}`,
          borderRadius: "12px", padding: "16px 14px", textAlign: "center"
        }}>
          <div style={{
            fontFamily: "'Syne',sans-serif", fontSize: "32px", fontWeight: 800,
            color: m.featured ? "#F97316" : "#fff", lineHeight: 1
          }}>{m.val}</div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "6px", lineHeight: 1.4 }}>{m.label}</div>
        </div>
      ))}
    </div>

    {/* Screenshots */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
      <Screenshot src={srcScreenshot1} label={labelScreenshot1} placeholder={placeholderSc1} />
      <Screenshot src={srcScreenshot2} label={labelScreenshot2} placeholder={placeholderSc2} />
    </div>

    {/* WhatsApp + quote */}
    <div style={{
      background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "14px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px"
    }}>
      <div style={{
        fontSize: "9px", color: "rgba(255,255,255,0.25)",
        textTransform: "uppercase", letterSpacing: "0.08em"
      }}>Conversación real · WhatsApp</div>
      <div style={{
        fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7,
        fontStyle: "italic", borderLeft: "2px solid rgba(217,106,40,0.35)", paddingLeft: "14px"
      }}>"{quote}"</div>
      {srcWa
        ? <img src={srcWa} alt="WhatsApp" style={{ width: "100%", borderRadius: "8px" }} />
        : <Placeholder text={placeholderWa} height={100} />
      }
    </div>
  </div>
);

interface CasoContrasteProps {
  srcGbp: string;
  placeholderGbp: string;
  srcWa: string;
  placeholderWa: string;
}

const CasoContraste = ({ srcGbp, placeholderGbp, srcWa, placeholderWa }: CasoContrasteProps) => (
  <div style={{
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "20px", padding: "32px",
    display: "flex", flexDirection: "column", gap: "24px",
    position: "relative", overflow: "hidden"
  }}>
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: "3px",
      background: "rgba(255,255,255,0.08)"
    }} />

    {/* Header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Syne',sans-serif", fontSize: "20px", fontWeight: 800,
          color: "rgba(255,255,255,0.3)"
        }}>M</div>
        <div>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>Cliente · Sector fontanería</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "2px" }}>Madrid · ficha creada, sin gestión mensual</div>
        </div>
      </div>
      <div style={{
        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "100px", padding: "4px 14px",
        fontSize: "10px", fontWeight: 500, color: "rgba(255,255,255,0.3)",
        letterSpacing: "0.08em", textTransform: "uppercase"
      }}>Sin gestión · 2 meses</div>
    </div>

    {/* Métrica única */}
    <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
      <div style={{
        background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px", padding: "20px 28px", textAlign: "center", flexShrink: 0
      }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "48px", fontWeight: 800, color: "rgba(255,255,255,0.3)", lineHeight: 1 }}>3</div>
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", marginTop: "6px" }}>interacciones en 2 meses</div>
      </div>
      <div style={{ flex: 1, minWidth: "200px" }}>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
          La ficha existe. Está en Google. Pero Google no la mueve porque no ve actividad — sin reseñas nuevas, sin posts, sin respuestas. Para Google, un negocio inactivo es un negocio que no merece visibilidad.
        </p>
      </div>
    </div>

    {/* Screenshots */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
      <Screenshot src={srcGbp} label="GBP · 2 meses sin gestión" placeholder={placeholderGbp} />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Conversación · por qué no siguió
        </div>
        {srcWa
          ? <img src={srcWa} alt="WhatsApp" style={{ width: "100%", borderRadius: "10px" }} />
          : <Placeholder text={placeholderWa} height={160} />
        }
      </div>
    </div>

    {/* Conclusión */}
    <div style={{
      background: "rgba(255,255,255,0.03)", borderRadius: "12px", padding: "18px 20px",
      borderLeft: "2px solid rgba(255,255,255,0.12)"
    }}>
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, fontStyle: "italic" }}>
        Crear la ficha es el primer paso. Pero sin trabajarla cada mes, Google no te posiciona — y los clientes tampoco llegan solos. Por eso la gestión mensual no es un extra, es la parte que hace que todo funcione.
      </p>
    </div>
  </div>
);

export default function ResultadosSection() {
  return (
    <section style={{
      background: "#0f1524", padding: "96px 24px",
      position: "relative", fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(217,106,40,0.5), transparent)"
      }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        {/* Label */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(217,106,40,0.1)", border: "1px solid rgba(217,106,40,0.3)",
          borderRadius: "100px", padding: "5px 16px", fontSize: "11px",
          fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
          color: "#F97316", marginBottom: "28px"
        }}>
          <span style={{ width: 6, height: 6, background: "#F97316", borderRadius: "50%", display: "inline-block" }} />
          Casos reales
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px,4vw,42px)",
          fontWeight: 800, color: "#fff", lineHeight: 1.15, maxWidth: "640px", marginBottom: "12px"
        }}>
          Algunos de los negocios{" "}
          <span style={{ color: "#F97316" }}>que gestiono.</span>
        </h2>
        <p style={{
          fontSize: "16px", color: "rgba(255,255,255,0.4)", maxWidth: "520px",
          lineHeight: 1.7, marginBottom: "64px"
        }}>
          No son capturas inventadas ni promesas. Son los datos reales de negocios que llevan en el sistema — y uno que no quiso la gestión mensual, para que veas la diferencia.
        </p>

        {/* CASO 1: Obrasenmadrid */}
        <div style={{ marginBottom: "24px" }}>
          <CasoPositivo
            sector="Reformas y construcción"
            ciudad="Madrid"
            mes="3"
            inicial="O"
            nombreCorto="Empresa de reformas · Madrid"
            metricas={[
              { val: "2.465", label: "Impresiones en Google · 28 días", featured: false },
              { val: "134",   label: "Clics al negocio · 28 días",      featured: false },
              { val: "6",     label: "Llamadas directas desde la ficha", featured: true  },
            ]}
            quote="FRASE_OBRAS_AQUI"
            srcScreenshot1={scObras}
            srcScreenshot2=""
            labelScreenshot1="Search Console · 28 días"
            labelScreenshot2="Google Business · Llamadas"
            placeholderSc1={"📊 Sube captura recortada\n134 clics · 2.465 impresiones"}
            placeholderSc2={"📞 Sube captura recortada\n6 llamadas directas"}
            srcWa=""
            placeholderWa={"📱 Captura WhatsApp\nJuan Carlos — mensaje positivo"}
          />
        </div>

        {/* CASO 2: Viviane */}
        <div style={{ marginBottom: "24px" }}>
          <CasoPositivo
            sector="Psicología"
            ciudad="Valencia"
            mes="2"
            inicial="V"
            nombreCorto="Viviane C. · Psicóloga"
            metricas={[
              { val: "6",  label: "Llamadas este mes desde Google", featured: true  },
              { val: "↑",  label: "Mejora constante cada mes",       featured: false },
            ]}
            quote="FRASE_VIVIANE_AQUI — algo como: cuanto más activa está la ficha, más me llega"
            srcScreenshot1=""
            srcScreenshot2=""
            labelScreenshot1="Google Business · Rendimiento"
            labelScreenshot2="Search Console · Viviane"
            placeholderSc1={"📊 Sube captura GBP\nrendimiento Viviane"}
            placeholderSc2={"📊 Sube captura Search Console\nViviane"}
            srcWa=""
            placeholderWa={"📱 Captura WhatsApp Viviane\n\"cuanto más activa mejor\""}
          />
        </div>

        {/* DIVIDER */}
        <div style={{
          display: "flex", alignItems: "center", gap: "16px",
          margin: "16px 0 24px"
        }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          <div style={{
            fontSize: "11px", color: "rgba(255,255,255,0.2)",
            textTransform: "uppercase", letterSpacing: "0.1em", whiteSpace: "nowrap"
          }}>¿Qué pasa sin gestión mensual?</div>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* CASO 3: Miguel (contraste) */}
        <div style={{ marginBottom: "64px" }}>
          <CasoContraste
            srcGbp=""
            placeholderGbp={"📊 Sube captura GBP Miguel\n3 interacciones en 2 meses"}
            srcWa=""
            placeholderWa={"📱 Captura WhatsApp Miguel\ncuando decide no seguir con mensualidad"}
          />
        </div>

        {/* CTA */}
        <div style={{
          background: "rgba(217,106,40,0.08)", border: "1px solid rgba(217,106,40,0.2)",
          borderRadius: "20px", padding: "36px 40px",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: "24px", flexWrap: "wrap"
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Syne',sans-serif", fontSize: "20px",
              fontWeight: 800, color: "#fff", marginBottom: "6px"
            }}>¿Quieres estos resultados para tu negocio?</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              Empezamos por la ficha de Google — sin contrato, sin permanencia.
            </p>
          </div>
          <a href="#contacto" style={{
            background: "linear-gradient(135deg,#D96A28,#F97316)", color: "#fff",
            fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "14px",
            padding: "14px 28px", borderRadius: "100px", textDecoration: "none",
            whiteSpace: "nowrap", letterSpacing: "0.03em"
          }}>Quiero empezar →</a>
        </div>
      </div>
    </section>
  );
}
