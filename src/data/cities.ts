import madridImg from "@/assets/cities/madrid.png";
import barcelonaImg from "@/assets/cities/barcelona.png";
import valenciaImg from "@/assets/cities/valencia.png";
import sevillaImg from "@/assets/cities/sevilla.png";
import malagaImg from "@/assets/cities/malaga.png";
import zaragozaImg from "@/assets/cities/zaragoza.png";
import bilbaoImg from "@/assets/cities/bilbao.png";
import murciaImg from "@/assets/cities/murcia.png";

export interface CityData {
  slug: string;
  name: string;
  image: string;
  lat: number;
  lng: number;
  intro: string[];
}

export const cities: CityData[] = [
  {
    slug: "madrid",
    name: "Madrid",
    image: madridImg,
    lat: 40.4168,
    lng: -3.7038,
    intro: [
      "Madrid es uno de los mercados más competidos de España. Millones de búsquedas diarias hacen que diferenciarse en Google sea clave para cualquier negocio local. Si tu clínica dental, tu taller o tu restaurante no aparece cuando alguien busca en tu zona, estás perdiendo clientes cada día frente a competidores que sí han trabajado su visibilidad.",
      "El SEO local en Madrid no es opcional — es una necesidad. La capital concentra una enorme densidad de negocios por barrio, lo que significa que Google tiene que elegir a quién mostrar primero. Sin una ficha de Google optimizada y una web preparada para posicionar, tu negocio queda invisible para los miles de personas que buscan tus servicios a diario.",
      "Con slocal.es activamos un sistema que trabaja mes a mes para que tu negocio en Madrid gane posiciones de forma orgánica. No dependes de publicidad — cada mes tu presencia es más fuerte, más visible y más difícil de superar por tu competencia directa."
    ],
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    image: barcelonaImg,
    lat: 41.3874,
    lng: 2.1686,
    intro: [
      "Barcelona es una ciudad bilingüe con un alto volumen de búsquedas tanto en castellano como en catalán. El turismo y el comercio local generan una demanda constante de servicios que se buscan directamente en Google. Si tu negocio no aparece en esas búsquedas, estás dejando clientes sobre la mesa.",
      "El mercado de Barcelona combina residentes, turistas y profesionales que buscan servicios locales a diario. Desde peluquerías en el Eixample hasta talleres en Gràcia, cada barrio tiene su propia competencia digital. Posicionarte en Google Maps y en los resultados orgánicos es lo que marca la diferencia entre un negocio visible y uno invisible.",
      "Nuestro sistema de SEO local en Barcelona está diseñado para que tu negocio aparezca primero cuando alguien busca lo que ofreces. Sin agencias, sin contratos eternos — un sistema que crece contigo mes a mes."
    ],
  },
  {
    slug: "valencia",
    name: "Valencia",
    image: valenciaImg,
    intro: [
      "Valencia vive un crecimiento importante del comercio local. Las búsquedas de servicios en Google están en aumento constante, y los negocios que han trabajado su posicionamiento son los que se llevan la mayor parte de los clientes nuevos cada mes.",
      "La ciudad ofrece oportunidades reales para negocios que se posicionen bien en Google. A diferencia de Madrid o Barcelona, la competencia digital en Valencia es más accesible — lo que significa que con un sistema bien ejecutado, los resultados llegan más rápido y son más sostenibles.",
      "Con slocal.es ayudamos a negocios en Valencia a aparecer en Google Maps, posicionar su web y atraer clientes de forma orgánica. Un sistema claro, con resultados medibles cada mes."
    ],
  },
  {
    slug: "sevilla",
    name: "Sevilla",
    image: sevillaImg,
    intro: [
      "Sevilla es una ciudad con una fuerte presencia de negocios de hostelería y servicios. La demanda local es alta, pero muchos negocios aún no han trabajado su visibilidad en Google — lo que representa una oportunidad enorme para quienes sí lo hagan.",
      "Los sevillanos buscan restaurantes, clínicas, talleres y todo tipo de servicios directamente en Google. Si tu negocio no aparece en esos resultados, tus competidores se llevan esos clientes. Así de simple. El SEO local te pone donde tus clientes te están buscando.",
      "Nuestro sistema en Sevilla funciona igual que en cualquier otra ciudad: optimizamos tu ficha, creamos tu web y cada mes medimos las posiciones ganadas. Sin tecnicismos, sin humo."
    ],
  },
  {
    slug: "malaga",
    name: "Málaga",
    image: malagaImg,
    intro: [
      "Málaga combina turismo y residentes en un mercado donde las búsquedas en Google se producen durante todo el año. No es solo verano — los negocios locales reciben búsquedas constantes de personas que necesitan servicios cerca de donde están.",
      "La Costa del Sol atrae búsquedas en múltiples idiomas, pero el núcleo del SEO local en Málaga sigue siendo el cliente de la ciudad: el que busca un fontanero, una gestoría o un restaurante para comer hoy. Aparecer primero en esas búsquedas es lo que genera clientes reales.",
      "Con slocal.es activamos la visibilidad de tu negocio en Málaga de forma progresiva. Cada mes ganas posiciones, cada mes más gente te encuentra. Sin depender de publicidad."
    ],
  },
  {
    slug: "zaragoza",
    name: "Zaragoza",
    image: zaragozaImg,
    intro: [
      "Zaragoza es una ciudad industrial y comercial con una competencia digital moderada — lo que la convierte en un mercado ideal para posicionarse en Google con resultados rápidos. Los negocios que trabajen su SEO local ahora tienen una ventaja clara.",
      "La ciudad tiene un tejido comercial activo: talleres, comercios, profesionales de servicios que atienden a una población estable y fiel. El problema es que muchos de estos negocios no aparecen en Google cuando alguien busca lo que ofrecen. Eso se soluciona con un sistema de posicionamiento bien ejecutado.",
      "En slocal.es ayudamos a negocios de Zaragoza a ganar visibilidad en Google de forma orgánica. Ficha optimizada, web preparada, resultados medibles. Sin agencias, sin contratos largos."
    ],
  },
  {
    slug: "bilbao",
    name: "Bilbao",
    image: bilbaoImg,
    intro: [
      "Bilbao tiene un sector servicios fuerte y una economía activa donde los negocios locales compiten por la atención de clientes que buscan en Google antes de tomar cualquier decisión. Si no estás visible, no existes para ellos.",
      "La transformación digital del comercio en Bilbao avanza rápido. Los negocios que ya trabajan su posicionamiento local están captando clientes que antes iban a la competencia. El SEO local no es una opción — es la forma más rentable de crecer.",
      "Nuestro sistema para negocios en Bilbao incluye todo lo necesario: ficha de Google optimizada, web posicionada y seguimiento mensual de resultados. Claro, directo y sin tecnicismos."
    ],
  },
  {
    slug: "murcia",
    name: "Murcia",
    image: murciaImg,
    intro: [
      "Murcia es un mercado en crecimiento donde la competencia digital todavía es baja. Eso significa que los negocios que empiecen a trabajar su SEO local ahora tienen menos competencia y más oportunidad de posicionarse rápidamente en Google.",
      "La ciudad y su área metropolitana generan miles de búsquedas diarias de servicios locales. Desde fontaneros hasta clínicas, pasando por restaurantes y talleres — todos esos clientes potenciales están en Google. La pregunta es si te encuentran a ti o a tu competencia.",
      "Con slocal.es activamos tu visibilidad en Murcia con un sistema que crece mes a mes. Menos competencia significa resultados más rápidos — y resultados medibles desde el primer informe."
    ],
  },
];
