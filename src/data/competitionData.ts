// Competition FAQ answers per sector+city and neighborhood answers
// Q5: "¿Cuánta competencia hay para [sector] en [ciudad]?"
// Q6: "¿En qué barrios o zonas de [ciudad] posiciona el sistema?"

import { neighborhoods } from "./neighborhoods";

const competitionByCity: Record<string, { high: string; medium: string; low: string }> = {
  madrid: {
    high: "Madrid es uno de los mercados más competidos de España. Hay cientos de profesionales registrados pero la mayoría no tiene su presencia digital bien trabajada. Una ficha optimizada con reseñas recientes y una web con páginas por zona puede posicionarte por encima de la mayoría en 4-6 meses.",
    medium: "Madrid tiene mucha competencia, pero la mayoría de negocios locales no cuidan su posicionamiento digital. Eso deja espacio real para quien sí lo trabaje de forma estratégica.",
    low: "Aunque Madrid es un mercado grande, en nichos especializados la competencia digital es sorprendentemente baja. El sistema te posiciona justo donde hay demanda sin respuesta.",
  },
  barcelona: {
    high: "Barcelona tiene un mercado muy activo con alta densidad de negocios. Sin embargo, muchos profesionales no han actualizado su ficha ni tienen web optimizada. Eso es una ventaja competitiva real para quien empiece ahora.",
    medium: "El mercado de Barcelona es competitivo pero accesible. La clave está en trabajar las búsquedas por barrio — Eixample, Gràcia, Sant Martí — donde la competencia es mucho menor que a nivel ciudad.",
    low: "Barcelona ofrece oportunidades en búsquedas especializadas. Mientras los grandes compiten por los términos genéricos, las búsquedas específicas por servicio y barrio tienen menos competencia.",
  },
  valencia: {
    high: "Valencia está en pleno crecimiento digital. La competencia es menor que en Madrid o Barcelona, lo que significa que los resultados llegan más rápido — en algunos casos desde el mes 2-3.",
    medium: "El mercado valenciano ofrece un equilibrio ideal: suficiente demanda para generar clientes y menos competencia digital que las grandes capitales. Es el momento perfecto para posicionarse.",
    low: "En Valencia, la competencia para búsquedas específicas es todavía baja. El sistema te da ventaja temprana en un mercado que está creciendo rápido.",
  },
  sevilla: {
    high: "Sevilla tiene una demanda local fuerte pero muchos profesionales aún no han trabajado su posicionamiento. Eso significa oportunidad real: quien optimice ahora tiene ventaja sobre la mayoría de la competencia.",
    medium: "El mercado sevillano es activo pero digitalmente poco maduro. Los negocios que trabajen su visibilidad en Google ahora van a captar clientes que la competencia está dejando escapar.",
    low: "En Sevilla hay demanda constante y competencia digital moderada. Con el sistema activo puedes alcanzar las primeras posiciones en 3-4 meses.",
  },
  malaga: {
    high: "Málaga combina residentes y turismo, lo que genera demanda todo el año. La competencia digital está creciendo pero aún hay posiciones accesibles para quien trabaje su posicionamiento de forma constante.",
    medium: "El mercado de Málaga está en crecimiento. La combinación de turismo y residentes crea demanda diversa que muchos negocios no están capturando digitalmente.",
    low: "En Málaga la competencia digital para servicios especializados es moderada. El sistema puede posicionarte rápido aprovechando la demanda constante de la zona.",
  },
  zaragoza: {
    high: "Zaragoza tiene competencia digital moderada comparada con las grandes ciudades. Eso significa que con el sistema activo puedes alcanzar las primeras posiciones más rápido — en algunos casos desde el mes 2-3.",
    medium: "El mercado zaragozano ofrece oportunidades claras. Menos competencia digital que Madrid o Barcelona pero con demanda estable y sostenida.",
    low: "En Zaragoza la competencia digital es baja en muchos nichos. Es uno de los mercados donde más rápido se ven resultados con el sistema de slocal.es.",
  },
  bilbao: {
    high: "Bilbao tiene un sector servicios fuerte pero una competencia digital que está empezando a desarrollarse. Los negocios que se posicionen ahora tendrán ventaja cuando el mercado madure.",
    medium: "El mercado bilbaíno está en transformación digital. La competencia es menor que en otras capitales y los resultados del posicionamiento local son más rápidos y sostenibles.",
    low: "En Bilbao hay demanda real y poca competencia digital organizada. Es un mercado ideal para posicionarse rápidamente con un sistema bien ejecutado.",
  },
  murcia: {
    high: "En Murcia la competencia digital es significativamente menor que en grandes ciudades. Eso significa resultados más rápidos y posiciones más fáciles de mantener a largo plazo.",
    medium: "Murcia ofrece un mercado con demanda creciente y competencia baja. Es posiblemente una de las mejores ciudades para empezar con posicionamiento local ahora mismo.",
    low: "En Murcia la competencia para búsquedas específicas es muy baja. Con el sistema activo puedes estar en las primeras posiciones en pocas semanas.",
  },
};

type CompetitionLevel = "high" | "medium" | "low";

const sectorCompetitionLevel: Record<string, Record<string, CompetitionLevel>> = {
  "mas-clientes-para-fontaneros": { madrid: "high", barcelona: "high", valencia: "medium", sevilla: "medium", malaga: "medium", zaragoza: "low", bilbao: "medium", murcia: "low" },
  "mas-clientes-para-reformas": { madrid: "high", barcelona: "high", valencia: "medium", sevilla: "medium", malaga: "medium", zaragoza: "low", bilbao: "medium", murcia: "low" },
  "mas-clientes-para-pintores": { madrid: "medium", barcelona: "medium", valencia: "low", sevilla: "low", malaga: "low", zaragoza: "low", bilbao: "low", murcia: "low" },
  "mas-pacientes-para-clinicas": { madrid: "high", barcelona: "high", valencia: "high", sevilla: "medium", malaga: "medium", zaragoza: "medium", bilbao: "medium", murcia: "low" },
  "mas-pacientes-para-fisioterapeutas": { madrid: "high", barcelona: "medium", valencia: "medium", sevilla: "low", malaga: "low", zaragoza: "low", bilbao: "low", murcia: "low" },
  "mas-clientes-entrenador-personal": { madrid: "medium", barcelona: "medium", valencia: "low", sevilla: "low", malaga: "low", zaragoza: "low", bilbao: "low", murcia: "low" },
  "mas-alumnos-para-yoga": { madrid: "medium", barcelona: "medium", valencia: "low", sevilla: "low", malaga: "low", zaragoza: "low", bilbao: "low", murcia: "low" },
};

export function getCompetitionAnswer(sectorSlug: string, citySlug: string): string {
  const level = sectorCompetitionLevel[sectorSlug]?.[citySlug] || "medium";
  return competitionByCity[citySlug]?.[level] || competitionByCity["madrid"][level];
}

export function getNeighborhoodAnswer(sectorSlug: string, citySlug: string, cityName: string, sectorLabel: string): string {
  const barrios = neighborhoods[citySlug] || [];
  const barrioList = barrios.slice(0, 4).join(", ");
  return `Creamos páginas específicas para las zonas donde trabajas: ${barrioList}... Cada página posiciona de forma independiente para esa zona concreta de ${cityName}. El cliente que busca ${sectorLabel} en su barrio llega directamente a la página de esa zona.`;
}
