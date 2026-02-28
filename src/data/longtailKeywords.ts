import { neighborhoods } from "./neighborhoods";

interface SectorKeywordConfig {
  baseKeywords: string[];
  // These use [barrio] placeholder which gets replaced with real neighborhood names
  barrioKeywords: string[];
}

const sectorKeywords: Record<string, SectorKeywordConfig> = {
  "mas-clientes-para-fontaneros": {
    baseKeywords: [
      "fontanero urgencias [ciudad]",
      "fontanero barato [ciudad]",
      "reparación de tuberías [ciudad]",
      "instalación calefacción [ciudad]",
      "desatascar tuberías [ciudad]",
      "fontanero 24 horas [ciudad]",
      "cambio grifo [ciudad]",
      "fontanero económico [ciudad]",
      "reparar fuga agua [ciudad]",
      "fontanero cerca de mí [ciudad]",
    ],
    barrioKeywords: [
      "fontanero en [barrio]",
      "fontanero urgencias [barrio]",
    ],
  },
  "mas-clientes-para-reformas": {
    baseKeywords: [
      "empresa de reformas [ciudad]",
      "reformas integrales [ciudad]",
      "reforma de cocina [ciudad]",
      "reforma de baño [ciudad]",
      "reformas baratas [ciudad]",
      "presupuesto reforma [ciudad]",
      "reforma piso completo [ciudad]",
      "empresa reformas económica [ciudad]",
      "reformas de fachadas [ciudad]",
      "reformas locales comerciales [ciudad]",
    ],
    barrioKeywords: [
      "reformas en [barrio]",
      "empresa reformas [barrio]",
    ],
  },
  "mas-clientes-para-pintores": {
    baseKeywords: [
      "pintor [ciudad]",
      "pintor de pisos [ciudad]",
      "pintor barato [ciudad]",
      "pintar fachada [ciudad]",
      "pintor locales comerciales [ciudad]",
      "pintura decorativa [ciudad]",
      "presupuesto pintor [ciudad]",
      "pintor económico [ciudad]",
      "pintar piso completo [ciudad]",
      "pintor profesional [ciudad]",
    ],
    barrioKeywords: [
      "pintor en [barrio]",
      "pintor pisos [barrio]",
    ],
  },
  "mas-pacientes-para-clinicas": {
    baseKeywords: [
      "clínica dental [ciudad] centro",
      "dentista barato [ciudad]",
      "ortodoncia [ciudad] precio",
      "implantes dentales [ciudad]",
      "dentista urgencias [ciudad]",
      "blanqueamiento dental [ciudad]",
      "revisión dental [ciudad]",
      "dentista sin lista de espera [ciudad]",
      "clínica dental económica [ciudad]",
      "periodoncista [ciudad]",
    ],
    barrioKeywords: [
      "clínica dental [barrio]",
      "dentista en [barrio]",
    ],
  },
  "mas-pacientes-para-fisioterapeutas": {
    baseKeywords: [
      "fisioterapeuta [ciudad]",
      "fisio deportivo [ciudad]",
      "fisioterapia suelo pélvico [ciudad]",
      "fisioterapeuta cerca de mí [ciudad]",
      "rehabilitación fisioterapia [ciudad]",
      "fisio cervicales [ciudad]",
      "fisioterapia neurológica [ciudad]",
      "fisioterapeuta a domicilio [ciudad]",
      "clínica fisioterapia [ciudad]",
      "fisioterapeuta económico [ciudad]",
    ],
    barrioKeywords: [
      "fisioterapeuta en [barrio]",
      "fisioterapia [barrio]",
    ],
  },
  "mas-clientes-entrenador-personal": {
    baseKeywords: [
      "entrenador personal [ciudad]",
      "entrenador personal a domicilio [ciudad]",
      "entrenamiento personal [ciudad]",
      "entrenador personal económico [ciudad]",
      "entrenamiento en parque [ciudad]",
      "entrenador personal online [ciudad]",
      "personal trainer [ciudad]",
      "entrenador funcional [ciudad]",
      "preparador físico [ciudad]",
      "entrenador personal mujer [ciudad]",
    ],
    barrioKeywords: [
      "entrenador personal [barrio]",
      "entrenamiento personal [barrio]",
    ],
  },
  "mas-alumnos-para-yoga": {
    baseKeywords: [
      "clases de yoga [ciudad]",
      "yoga para principiantes [ciudad]",
      "yoga hatha [ciudad]",
      "yoga vinyasa [ciudad]",
      "yoga prenatal [ciudad]",
      "clases yoga cerca de mí [ciudad]",
      "estudio de yoga [ciudad]",
      "yoga restaurativo [ciudad]",
      "yoga para mayores [ciudad]",
      "yoga online [ciudad]",
    ],
    barrioKeywords: [
      "yoga en [barrio]",
      "clases yoga [barrio]",
    ],
  },
};

export function getLongtailKeywords(sectorSlug: string, citySlug: string, cityName: string): string[] {
  const config = sectorKeywords[sectorSlug];
  if (!config) return [];

  const cityNeighborhoods = neighborhoods[citySlug] || [];
  const keywords: string[] = [];

  // Add base keywords with city name
  for (const kw of config.baseKeywords) {
    keywords.push(kw.replace("[ciudad]", cityName));
  }

  // Add neighborhood-specific keywords (pick first 2 neighborhoods)
  for (const barrioKw of config.barrioKeywords) {
    for (const barrio of cityNeighborhoods.slice(0, 1)) {
      keywords.push(barrioKw.replace("[barrio]", barrio));
    }
  }

  return keywords.slice(0, 12);
}
