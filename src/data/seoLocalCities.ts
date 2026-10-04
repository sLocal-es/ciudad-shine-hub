export interface SeoLocalCity {
  slug: string;
  name: string;
  population: string;
  /** INE, DIRCE 1-ene-2025, empresas del municipio, redondeado a miles hacia abajo */
  empresasActivas: string;
  competition: string;
  plazo: string;
  mapQuery: string;
  mapEmbed?: string;
  provinceName: string;
  municipiosTitle: string;
  coverageArea: "de su provincia" | "de su comunidad" | "de su región";
  municipios: string[];
  gbp?: { name: string; map: string };
  barriosBusquedas: { barrio: string; busqueda: string }[];
  oportunidad: string[];
}


export const seoLocalCities: Record<string, SeoLocalCity> = {
  madrid: {
    slug: "madrid",
    name: "Madrid",
    population: "3,4 millones de habitantes",
    empresasActivas: "297.000",
    competition: "Alta",
    plazo: "3-6 meses",
    mapQuery: "Madrid, España",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13352763.221484222!2d-17.4244815!3d35.2076656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x265bd1e86a2be5d%3A0x395d0d44909518d9!2sAgencia%20SEO%20Local%20%7C%20Slocal!5e0!3m2!1ses!2ses!4v1785864658619!5m2!1ses!2ses",
    provinceName: "Comunidad de Madrid",
    municipiosTitle: "Municipios de la Comunidad de Madrid",
    coverageArea: "de su comunidad",
    municipios: ["Móstoles", "Alcalá de Henares", "Fuenlabrada", "Leganés", "Getafe", "Alcorcón", "Torrejón de Ardoz", "Parla", "Alcobendas", "Las Rozas de Madrid", "Pozuelo de Alarcón", "Rivas-Vaciamadrid"],
    gbp: { name: "Agencia SEO Local | Slocal", map: "https://www.google.com/maps?cid=4133474621130610905" },
    barriosBusquedas: [
      { barrio: "Chamberí", busqueda: "fisioterapeuta en Chamberí" },
      { barrio: "Salamanca", busqueda: "clínica dental Salamanca Madrid" },
      { barrio: "Vallecas", busqueda: "fontanero en Vallecas" },
      { barrio: "Carabanchel", busqueda: "abogado en Carabanchel" },
      { barrio: "Tetuán", busqueda: "reformas en Tetuán" },
      { barrio: "Hortaleza", busqueda: "psicólogo en Hortaleza" },
    ],
    oportunidad: [
      "Madrid concentra 3,4 millones de habitantes y es uno de los mercados con más búsquedas locales por minuto de toda España. Cada barrio funciona casi como una ciudad propia: las búsquedas se hacen por zona, no por ciudad.",
      "Aunque la competencia digital en Madrid es alta, también lo es el volumen de búsquedas. Eso significa que un negocio bien posicionado en su barrio puede generar más contactos en un mes que muchos negocios de capitales pequeñas en un año.",
    ],
  },
  barcelona: {
    slug: "barcelona",
    name: "Barcelona",
    population: "1,6 millones de habitantes",
    empresasActivas: "174.000",
    competition: "Alta",
    plazo: "3-6 meses",
    mapQuery: "Barcelona, España",
    provinceName: "Provincia de Barcelona",
    municipiosTitle: "Municipios de la provincia de Barcelona",
    coverageArea: "de su provincia",
    municipios: ["L'Hospitalet de Llobregat", "Badalona", "Terrassa", "Sabadell", "Mataró", "Santa Coloma de Gramenet", "Sant Cugat del Vallès", "Cornellà de Llobregat", "Sant Boi de Llobregat", "Rubí", "Granollers", "Castelldefels"],
    barriosBusquedas: [
      { barrio: "Gràcia", busqueda: "peluquería en Gràcia" },
      { barrio: "Eixample", busqueda: "dentista en Eixample" },
      { barrio: "Sants", busqueda: "fontanero en Sants" },
      { barrio: "Poblenou", busqueda: "fisioterapeuta en Poblenou" },
      { barrio: "Sant Andreu", busqueda: "reformas en Sant Andreu" },
      { barrio: "Nou Barris", busqueda: "abogado en Nou Barris" },
    ],
    oportunidad: [
      "Barcelona reúne 1,6 millones de habitantes y un flujo constante de turistas y profesionales. Las búsquedas en Google se hacen tanto en castellano como en catalán, y cada barrio tiene su propia dinámica comercial.",
      "La competencia digital es alta, pero también lo es el volumen. Aparecer en el Local Pack de tu zona en Barcelona te pone delante de miles de búsquedas mensuales que hoy se llevan tus competidores directos.",
    ],
  },
  valencia: {
    slug: "valencia",
    name: "Valencia",
    population: "800.000 habitantes",
    empresasActivas: "70.000",
    competition: "Media",
    plazo: "2-4 meses",
    mapQuery: "Valencia, España",
    provinceName: "Provincia de Valencia",
    municipiosTitle: "Municipios de la provincia de Valencia",
    coverageArea: "de su provincia",
    municipios: ["Torrent", "Gandia", "Paterna", "Sagunto", "Alzira", "Mislata", "Burjassot", "Manises", "Xirivella", "Alboraya"],
    barriosBusquedas: [
      { barrio: "Ruzafa", busqueda: "cafetería de especialidad en Ruzafa" },
      { barrio: "Benimaclet", busqueda: "fisioterapeuta en Benimaclet" },
      { barrio: "Campanar", busqueda: "clínica dental en Campanar" },
      { barrio: "Patraix", busqueda: "fontanero en Patraix" },
      { barrio: "El Carmen", busqueda: "abogado en El Carmen Valencia" },
      { barrio: "Quatre Carreres", busqueda: "reformas en Quatre Carreres" },
    ],
    oportunidad: [
      "Valencia tiene 800.000 habitantes y un crecimiento sostenido del comercio local. La competencia digital es media: hay negocios que ya trabajan su SEO local, pero todavía hay espacio en muchos sectores para entrar al top 3 de Google Maps.",
      "Es un mercado en el que un sistema bien ejecutado da resultados visibles entre el mes 2 y el mes 4. Empezar antes que tu competencia directa marca la diferencia entre liderar tu zona o pelear por las posiciones de abajo.",
    ],
  },
  sevilla: {
    slug: "sevilla",
    name: "Sevilla",
    population: "690.000 habitantes",
    empresasActivas: "49.000",
    competition: "Media",
    plazo: "2-4 meses",
    mapQuery: "Sevilla, España",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25356.592576118426!2d-5.997945136561545!3d37.39990388773537!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de139a76968cde1%3A0xeb81bf4c2e568f22!2sAgencia%20SEO%20Local%20%7C%20Slocal!5e0!3m2!1ses!2ses!4v1785864698880!5m2!1ses!2ses",
    provinceName: "Provincia de Sevilla",
    municipiosTitle: "Municipios de la provincia de Sevilla",
    coverageArea: "de su provincia",
    municipios: ["Dos Hermanas", "Alcalá de Guadaíra", "Utrera", "Mairena del Aljarafe", "Écija", "Los Palacios y Villafranca", "La Rinconada", "Coria del Río", "Camas", "Carmona"],
    gbp: { name: "Agencia SEO Local | Slocal", map: "https://www.google.com/maps?cid=16970055204824583970" },
    barriosBusquedas: [
      { barrio: "Triana", busqueda: "fisioterapeuta en Triana" },
      { barrio: "Los Remedios", busqueda: "clínica dental Los Remedios" },
      { barrio: "Nervión", busqueda: "abogado en Nervión" },
      { barrio: "Macarena", busqueda: "fontanero en Macarena Sevilla" },
      { barrio: "San Pablo", busqueda: "reformas en San Pablo" },
      { barrio: "Bellavista", busqueda: "psicólogo en Bellavista Sevilla" },
    ],
    oportunidad: [
      "Sevilla tiene 690.000 habitantes y un tejido fuerte de hostelería, salud y servicios. La competencia digital es media: muchos negocios todavía no han optimizado su ficha de Google, lo que abre una ventana de oportunidad clara.",
      "En 2-4 meses un negocio en Sevilla bien trabajado puede entrar al top 3 de Google Maps en su barrio. Esa posición se convierte en llamadas y contactos directos sin pagar por cada clic.",
    ],
  },
  malaga: {
    slug: "malaga",
    name: "Málaga",
    population: "580.000 habitantes",
    empresasActivas: "43.000",
    competition: "Media-baja",
    plazo: "2-3 meses",
    mapQuery: "Málaga, España",
    provinceName: "Provincia de Málaga",
    municipiosTitle: "Municipios de la provincia de Málaga",
    coverageArea: "de su provincia",
    municipios: ["Marbella", "Vélez-Málaga", "Fuengirola", "Mijas", "Benalmádena", "Torremolinos", "Estepona", "Rincón de la Victoria", "Alhaurín de la Torre", "Antequera"],
    barriosBusquedas: [
      { barrio: "Centro", busqueda: "fisioterapeuta en el centro de Málaga" },
      { barrio: "El Palo", busqueda: "fontanero en El Palo" },
      { barrio: "Teatinos", busqueda: "clínica dental en Teatinos" },
      { barrio: "Churriana", busqueda: "reformas en Churriana" },
      { barrio: "Ciudad Jardín", busqueda: "abogado en Ciudad Jardín Málaga" },
      { barrio: "Carretera de Cádiz", busqueda: "psicólogo en Carretera de Cádiz" },
    ],
    oportunidad: [
      "Málaga crece año tras año en habitantes, turismo y comercio. Con 580.000 habitantes y una competencia digital aún media-baja, es uno de los mercados donde el SEO local da resultados más rápidos en España.",
      "Empezar ahora en Málaga significa colocarte por delante de competidores que todavía no han trabajado su ficha de Google. Los primeros resultados visibles llegan en 2-3 meses.",
    ],
  },
  zaragoza: {
    slug: "zaragoza",
    name: "Zaragoza",
    population: "680.000 habitantes",
    empresasActivas: "42.000",
    competition: "Media-baja",
    plazo: "2-3 meses",
    mapQuery: "Zaragoza, España",
    provinceName: "Provincia de Zaragoza",
    municipiosTitle: "Municipios de la provincia de Zaragoza",
    coverageArea: "de su provincia",
    municipios: ["Utebo", "Calatayud", "Ejea de los Caballeros", "Cuarte de Huerva", "Zuera", "Alagón", "La Muela", "Tarazona"],
    barriosBusquedas: [
      { barrio: "Delicias", busqueda: "fontanero en Delicias Zaragoza" },
      { barrio: "Romareda", busqueda: "fisioterapeuta en Romareda" },
      { barrio: "Actur", busqueda: "clínica dental en Actur" },
      { barrio: "Las Fuentes", busqueda: "reformas en Las Fuentes" },
      { barrio: "Torrero", busqueda: "abogado en Torrero" },
      { barrio: "Oliver", busqueda: "psicólogo en Oliver Zaragoza" },
    ],
    oportunidad: [
      "Zaragoza concentra 680.000 habitantes y un tejido empresarial estable. La competencia digital local es media-baja: muchos negocios siguen confiando en el boca a boca y en publicidad de pago, dejando libre el espacio orgánico de Google.",
      "Es uno de los mercados donde aparecer en el Local Pack es todavía relativamente accesible. En 2-3 meses, un negocio bien trabajado en Zaragoza empieza a recibir contactos directos desde Google.",
    ],
  },
  bilbao: {
    slug: "bilbao",
    name: "Bilbao",
    population: "350.000 habitantes",
    empresasActivas: "25.000",
    competition: "Baja",
    plazo: "2-3 meses",
    mapQuery: "Bilbao, España",
    provinceName: "Bizkaia",
    municipiosTitle: "Municipios de Bizkaia",
    coverageArea: "de su provincia",
    municipios: ["Barakaldo", "Getxo", "Portugalete", "Santurtzi", "Basauri", "Leioa", "Sestao", "Erandio", "Durango", "Galdakao"],
    barriosBusquedas: [
      { barrio: "Indautxu", busqueda: "fisioterapeuta en Indautxu" },
      { barrio: "Deusto", busqueda: "clínica dental en Deusto" },
      { barrio: "Begoña", busqueda: "fontanero en Begoña Bilbao" },
      { barrio: "Basurto", busqueda: "reformas en Basurto" },
      { barrio: "Santutxu", busqueda: "abogado en Santutxu" },
      { barrio: "Rekalde", busqueda: "psicólogo en Rekalde" },
    ],
    oportunidad: [
      "Bilbao tiene 350.000 habitantes y un sector servicios muy activo. La competencia digital local es baja en muchos sectores, lo que convierte a la ciudad en uno de los mercados con mejor relación esfuerzo/resultado de toda España.",
      "Los negocios que trabajan su SEO local en Bilbao ahora ocupan posiciones que después serán mucho más difíciles de recuperar. En 2-3 meses los primeros resultados ya son visibles.",
    ],
  },
  murcia: {
    slug: "murcia",
    name: "Murcia",
    population: "460.000 habitantes",
    empresasActivas: "32.000",
    competition: "Baja",
    plazo: "2-3 meses",
    mapQuery: "Murcia, España",
    provinceName: "Región de Murcia",
    municipiosTitle: "Municipios de la Región de Murcia",
    coverageArea: "de su región",
    municipios: ["Cartagena", "Molina de Segura", "Lorca", "Alcantarilla", "Cieza", "Yecla", "Torre-Pacheco", "Águilas"],
    barriosBusquedas: [
      { barrio: "El Carmen", busqueda: "fisioterapeuta en El Carmen Murcia" },
      { barrio: "La Flota", busqueda: "clínica dental en La Flota" },
      { barrio: "Santa María de Gracia", busqueda: "fontanero en Santa María de Gracia" },
      { barrio: "El Ranero", busqueda: "abogado en El Ranero" },
      { barrio: "Espinardo", busqueda: "reformas en Espinardo" },
      { barrio: "La Alberca", busqueda: "psicólogo en La Alberca Murcia" },
    ],
    oportunidad: [
      "Murcia tiene 460.000 habitantes y una competencia digital local baja en la mayoría de sectores. Eso significa que los negocios que empiezan a trabajar su SEO local ahora pueden alcanzar el top 3 de Google Maps con relativa rapidez.",
      "En 2-3 meses los primeros resultados son visibles. Es uno de los mercados con la mejor ventana de oportunidad de toda España para posicionarse antes que la competencia.",
    ],
  },
  cordoba: {
    slug: "cordoba",
    name: "Córdoba",
    population: "325.000 habitantes",
    empresasActivas: "21.000",
    competition: "Baja",
    plazo: "2-3 meses",
    mapQuery: "Córdoba, España",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811430.806100093!2d-6.6367644726445185!3d37.39807113471488!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac51e84256737de1%3A0xba193d08e9882037!2sSlocal!5e0!3m2!1ses!2ses!4v1785864736626!5m2!1ses!2ses",
    provinceName: "Provincia de Córdoba",
    municipiosTitle: "Municipios de la provincia de Córdoba",
    coverageArea: "de su provincia",
    municipios: ["Lucena", "Puente Genil", "Montilla", "Palma del Río", "Priego de Córdoba", "Cabra", "Baena", "Pozoblanco"],
    gbp: { name: "Agencia SEO Local - Slocal", map: "https://www.google.com/maps?cid=13409816473959407671" },
    barriosBusquedas: [
      { barrio: "Centro", busqueda: "abogado en Córdoba centro" },
      { barrio: "Poniente", busqueda: "fontanero en Poniente Córdoba" },
      { barrio: "Levante", busqueda: "clínica dental en Levante" },
      { barrio: "Ciudad Jardín", busqueda: "fisioterapeuta en Ciudad Jardín" },
      { barrio: "Fátima", busqueda: "reformas en Fátima Córdoba" },
      { barrio: "Sector Sur", busqueda: "psicólogo en Sector Sur Córdoba" },
    ],
    oportunidad: [
      "Córdoba tiene 325.000 habitantes y una competencia digital local baja en la mayoría de sectores. Es uno de los mercados con mejor ventana de oportunidad de España para posicionarse antes que la competencia.",
      "En 2-3 meses los primeros resultados son visibles y en 4-6 meses la ficha se consolida en el top 3 de Google Maps para las búsquedas locales más relevantes de la ciudad.",
    ],
  },
};

