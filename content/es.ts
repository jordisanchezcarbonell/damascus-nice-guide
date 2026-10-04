import type { Content } from "./types";

const es: Content = {
  meta: {
    title: "Guía gastronómica Evo France",
    description: "La guía de Damascus de dónde comer y qué ver en Niza durante Evo France 2026.",
  },
  ui: {
    eyebrow: "Evo France 2026 · Niza · 9–11 oct",
    titleBefore: "La guía ",
    titleAccent: "gastronómica",
    titleAfter: " de Evo France",
    byline: "Por Damascus, vecino de Niza",
    intro:
      "¡Bienvenidos (otra vez) a Niza! Viene un montón de amigos de todo el mundo a mi ciudad, así que aquí van mis recomendaciones para comer. Como halal, así que casi todo son restaurantes halal y sitios con buenos platos vegetarianos o de pescado. Son los restaurantes a los que suelo ir en mi ciudad. Después de los sitios para comer también hay una guía turística, para que tengas una lista fácil de planes chulos. ¡Disfruta de todo lo que Niza tiene que ofrecer!",
    tierLegend: "Leyenda de niveles",
    nav: {
      venue: "Cerca del recinto",
      local: "Comida local",
      must: "Imprescindibles",
      brunch: "Brunch",
      hangout: "Dónde salir",
      itinerary: "Ruta de 1 día",
      more: "Más sitios",
      date: "Planes en pareja",
    },
    filters: {
      label: "Filtrar por nivel",
      all: "Todos ({n})",
      s: "Nivel S",
      a: "Nivel A",
      b: "Nivel B",
      near: "A menos de 5 min a pie",
      empty: "Ningún sitio coincide con este filtro.",
    },
    walk: "{n} min a pie",
    openMaps: "Abrir en Maps",
    language: "Idioma",
  },
  venue: {
    title: "Buenas opciones cerca del recinto",
    lead: "Los tiempos a pie son desde el recinto en Parvis de l'Europe. Toca un nombre para abrirlo en Google Maps.",
    spots: {
      kosmopolite: {
        kind: "Kebab",
        desc: "Kebabs al estilo berlinés con pan casero y recetas creativas. Para mí, el mejor kebab de Niza. Un sitio pequeño y familiar, raciones enormes (te va a costar terminarlo) y un montón de toppings para elegir. ¿Pan o tortilla de trigo? Yo te recomiendo pan, aunque la tortilla también está muy bien. También tienen hamburguesas, pero nunca las he probado.",
        note: "El año pasado fue con diferencia el sitio más popular de la lista y se quedaron sin comida pronto. ¡Este año se están asegurando de que haya para todos!",
        prices: ["**13–14 €** el bocadillo"],
      },
      grillade: {
        kind: "Parrilla",
        desc: "Recomendación fácil. Una parrilla sólida con una carta sencilla: eliges tus carnes (puedes mezclar), patatas fritas caseras, ensalada, salsa, y listo. Pide un plato (mi elección) o un bocadillo. ¡No falla!",
        prices: ["**12 €** plato con 2 carnes", "**7–8 €** bocadillo"],
      },
      medina: {
        kind: "Street food tunecina",
        desc: "Abrió hace solo dos meses. Wraps, bocadillos y platos únicos con carne especiada. Prueba el *Makloub* (masa de pizza rellena de pollo, carne o pescado, salsa y ensalada) o el *Mlawi* (wrap de pan casero). Tienen platos del día con distintos platos tunecinos. Si te gusta el picante, díselo: ¡la comida tunecina siempre va con harissa!",
        prices: ["**Menos de 10 €** casi todo"],
      },
      krousty: {
        kind: "Cadena de comida rápida asiática",
        desc: "Cadena francesa popular con boles de arroz y fideos asiáticos. Servicio rápido, genial para llevar. ¿Nunca has probado el *Bobun*? Es un plato vietnamita con fideos de arroz y ternera. Para una experiencia aún más de street food francesa, prueba el Krousty: arroz, pollo frito y una buena cantidad de salsa. Un poco excesivo para mi gusto, pero a veces hay que darse un capricho.",
        prices: ["**~12 €** plato + bebida"],
      },
      tasty: {
        kind: "¿La revolución de la comida rápida francesa?",
        desc: "Si ahora mismo eres estudiante en Francia, seguramente comes esto a menudo. Una caja grande de arroz con pollo frito, raciones generosas, mucha salsa (dulce y/o picante) y, lo más importante, barato. Últimamente es todo un fenómeno cultural. Creo que está sobrevalorado, pero cumple.",
        prices: ["**~12 €** plato + bebida"],
      },
      amande: {
        kind: "Bar de cuscús y pastelería norteafricana",
        desc: "Un sitio chulo para probar un clásico norteafricano: el cuscús. La base de sémola viene con lo que elijas: carne especiada, pollo, pescado o verduras. No es el mejor que he probado (soy marroquí, y ningún restaurante del planeta se acerca al cuscús de mi madre), pero está bien. ¡Sus pasteles también molan!",
        prices: ["**~16 €**"],
      },
      thai: {
        kind: "Comida tailandesa",
        desc: "Un tailandés sólido justo al lado del recinto. Restaurante familiar llevado por una pareja súper maja, con sus hijos echando una mano a veces. Hace comida tailandesa, y la hace bien. No falla.",
        prices: ["**~15 €**"],
      },
      turquie: {
        kind: "Comida turca",
        desc: "¿A quién no le gusta la comida turca? Un sitio muy bueno no muy lejos del recinto. Raciones generosas, buena carne a la parrilla y unas bandejas para compartir preciosas.",
        prices: ["**12–25 €** según lo que pidas"],
      },
      obraise: {
        kind: "Pollo asado africano",
        desc: "La especialidad es el pollo asado al estilo africano. Especias excelentes; un plato completo lleva arroz, pollo y salsa (su salsa verde es de otro nivel). ¡Pide plátano macho de guarnición! También hacen hamburguesas decentes, pero yo iría a por el pollo.",
        prices: ["**~13 €** plato + bebida"],
      },
      panera: {
        kind: "Panadería premiada y bocadillos",
        desc: "Casi todas las *boulangeries* de la zona son buenas, pero esta ganó el premio a mejor panadería de la región. Está un poco más lejos, pero es genial para picar algo, tomar un café o comer (pillar un bocadillo en la panadería es una comida muy típica en Francia). Su *pan bagnat*, el bocadillo tradicional de Niza, es excelente.",
        prices: ["**~7 €** bocadillo"],
      },
      filous: {
        kind: "Street food griega",
        desc: "Un sitio chulo con street food griega, sobre todo souvlaki con guarniciones.",
        prices: ["**~11 €** bocadillo + bebida"],
      },
      amoureux: {
        kind: "Pizza napolitana",
        desc: "Una de las mejores y más populares pizzerías de Niza. \"Les amoureux\" significa \"los enamorados\", y su pizza estrella tiene forma de corazón. ¡Sitio top para una cita!",
        note: "Aviso: este sitio es MUY POPULAR. Prepárate para hacer cola un buen rato.",
        prices: ["**15–20 €** la pizza"],
      },
      cheesenaan: {
        kind: "Comida rápida",
        desc: "Si te apetece comida rápida/basura, este sitio está bien. Bocadillos en naan relleno de queso, uno de los fast foods típicos de aquí. Nada espectacular, pero bueno.",
        prices: [],
      },
      chickenstreet: {
        kind: "Pollo frito · abierto hasta tarde",
        desc: "No está al lado del recinto, pero sí más cerca de la zona de fiesta. Una cadena muy sólida de comida rápida y pollo frito: cheese naans y pollo bueno en general. Está en todas las apps de delivery, genial para los antojos de madrugada.",
        prices: ["**~11 €** menú normal"],
      },
    },
  },
  local: {
    title: "Comida local que tienes que probar",
    lead: "Niza tiene una cocina local muy rica. Estos sitios no están tan cerca del recinto, así que guárdalos para cuando hagas turismo.",
    dishes: [
      { name: "Socca", img: "/img/image17.jpg", text: "Muy típica de Niza, hecha con harina de garbanzo. Un snack difícil de describir, ¡pero muy original y con mucho sabor!" },
      { name: "Pan bagnat", img: "/img/image18.jpg", text: "El bocadillo icónico de Niza. Una mezcla de ensalada concreta, anchoas (en casi todos los sitios te preguntan si las quieres) y una buena cantidad de aceite de oliva. Lo encuentras en prácticamente cualquier *boulangerie*." },
      { name: "Pissaladière", img: "/img/image19.jpg", text: "Esta es… especial. Una base de pizza con cebolla marinada muy sabrosa y aceitunas, más anchoas si quieres. Me gusta, en plan una porción. No pediría más, jaja." },
    ],
    after: "Estos son más o menos los \"tres grandes\". Hay mucho más que probar si te pica la curiosidad: los restaurantes locales siempre tienen bandejas para compartir con todas las especialidades de la zona.",
    restaurantsTitle: "Restaurantes locales",
    restaurants: [
      { name: "Lou Balico", href: "https://maps.app.goo.gl/QepKUXueGfU7dtKp7", text: "No muy lejos del recinto, mucha variedad y gente muy maja que te enseñará encantada lo mejor de la comida local." },
      { name: "D'Aquì", href: "https://maps.app.goo.gl/K9vhtbEGDSurZBrh9", text: "Un poco más lejos, cerca del puerto (una zona muy bonita para pasear), y también con mucha variedad." },
      { name: "Papaye & Mamaye", href: "https://maps.app.goo.gl/WfDPyutwjJBgjq1T7", text: "Uno de mis habituales. Sobre todo bocadillos; el año pasado ganaron el (muy serio) concurso anual al mejor pan bagnat de Niza. Justo al lado de la playa: pilla un pan bagnat y un bizcocho de limón, siéntate en la playa y relájate." },
      { name: "Boulangerie Panera", href: "https://maps.app.goo.gl/1yQkJ9vefTytdvF29", text: "Panadería premiada con un pan bagnat buenísimo." },
    ],
  },
  must: {
    title: "Sitios imprescindibles",
    lead: "Tienes que probarlos sí o sí. Ningún viaje a Niza está completo sin ellos.",
    fenocchio:
      "De los mejores helados que puedas pedir, con unos 150 sabores. Tienen un laboratorio de gelato cerca donde hacen sabores \"únicos\". La jugada de siempre: dos bolas normales y una arriesgada, como tomate-albahaca, cerveza, aceituna y un montón de cosas inesperadas más. Justo en pleno casco antiguo, perfecto para cuando hagas turismo.",
    petitsMarchands:
      "La mejor pastelería de Niza, y una de las mejores que he probado nunca. Cada vez que elijo un dulce al azar, es un 10/10. Hazte un favor y prueba la tarta de mango: está tan buena que la pusimos en mi boda. Ve a tomar un café cuando quieras. Les ha ido tan bien que desde el año pasado han abierto dos locales más. Imprescindible total.",
    boulangeriesTitle: "¡Boulangeries!",
    boulangeries:
      "Si ya has estado en Francia, ya lo sabes. Si no, es fácil: entra en cualquier panadería (*boulangerie*), echa un vistazo, elige el dulce que quieras y disfruta. Con las panaderías francesas no hay pérdida.",
  },
  brunch: {
    title: "Sitios de brunch",
    items: [
      { name: "Maison JL Brunch", href: "https://maps.app.goo.gl/ZVad2LTtjhW2zEzn8", text: "¡A 3 min del recinto!" },
      { name: "Le Kawa", href: "https://maps.app.goo.gl/UDw8GrZHmrwuNRYv7", text: "A unos 15 min. Uno de mis sitios de siempre." },
      { name: "La 36ème Chambre", href: "https://maps.app.goo.gl/cQc3WF3izu8eLfR87", text: "A 11 min en tranvía. Brunch al estilo coreano, también con menú de mediodía." },
      { name: "Rosewood Café", href: "https://maps.app.goo.gl/3yJ1gSrcaNft5Yjo9", text: "A 11 min en tranvía." },
    ],
  },
  hangout: {
    title: "Dónde salir y comer",
    lead: "La zona del recinto no tiene mucha vida por la noche. Estas son las dos zonas principales para salir, con mis restaurantes favoritos.",
    halal: "Halal",
    areas: [
      {
        title: "Vieux Nice · el casco antiguo",
        img: "/img/image22.jpg",
        text: "Animado y precioso, con muchos bares, restaurantes y un mercado chulísimo. Los italianos no sirven carne halal… pero ¿quién pide carne en un italiano?",
        items: [
          { name: "La Voglia", href: "https://maps.app.goo.gl/AP1jy5PS4Z934Jv87", text: "Un italiano genial. La Favola, justo enfrente, es del mismo dueño y está igual de bueno." },
          { name: "Di Più", href: "https://maps.app.goo.gl/fzqWvYNq4gAPff1z9", text: "Otro italiano genial." },
          { name: "Le Petit Palais", href: "https://maps.app.goo.gl/XN9CMNKtED4WDeF97", text: "Asador sólido." },
          { name: "Pitadine", href: "https://maps.app.goo.gl/jKbLdcpwashAMkVy8", text: "Comida de Oriente Medio." },
          { name: "Le Banthai", href: "https://maps.app.goo.gl/Da3oKeNeYPE8iy339", text: "Tailandés excelente con música en directo. No es halal." },
        ],
      },
      {
        title: "Zone Piétonne y Place Masséna · el centro",
        img: "/img/image23.jpg",
        text: "La zona centro: a 11 min en tranvía del recinto, o un paseo agradable de 24 min atravesando un parque.",
        items: [
          { name: "Omura", href: "https://maps.app.goo.gl/9aSNr8HJXot92vTD6", text: "Restaurante tailandés sólido." },
          { name: "La Villa d'Este", href: "https://maps.app.goo.gl/XZmtzDiWBd8iA9mV8", text: "Restaurante italiano sólido." },
          { name: "La Pizza Cresci", href: "https://maps.app.goo.gl/c8q7e57MWmqBX8WK9", text: "Pizzería genial." },
          { name: "Rodizio Beach", href: "https://maps.app.goo.gl/wFSn9qRQMNP9TPLW8", text: "Barbacoa brasileña.", halal: true },
          { name: "Nha Trang", href: "https://maps.app.goo.gl/nJ4rLxxoVWphhZC67", text: "Barbacoa coreana.", halal: true },
          { name: "Gusti", href: "https://maps.app.goo.gl/QQ43S6n1Uyzoaxrx5", text: "Un poco más lejos, pero para mí la mejor relación calidad-precio de la zona. Platos grandes y bien cargados, carne o pescado sólidos, nunca decepciona." },
        ],
      },
    ],
  },
  itinerary: {
    title: "Ruta de 1 día",
    lead: "Un buen recorrido para ver lo máximo de Niza en un día. Mira las secciones de arriba para saber dónde comer por el camino.",
    video: "Hicimos un vídeo-guía de algunos de estos sitios.",
    videoLink: "Míralo en X →",
    stops: [
      { title: "Place Masséna", map: "https://maps.app.goo.gl/LKbxxRAFuRMUhax57", text: "El corazón de Niza (sale en la foto de la sección del centro, más arriba). Una plaza preciosa rodeada de tiendas y restaurantes: un punto de partida genial. Desayuna o haz brunch por la zona; Rosewood, Le Kawa o Fino Café son buenas opciones, y hay muchas más." },
      { title: "Promenade du Paillon", img: "/img/image24.jpg", text: "Un parque largo y verde que sale de Place Masséna. Úsalo para ir andando al casco antiguo." },
      { title: "Place Garibaldi", img: "/img/image25.jpg", map: "https://maps.app.goo.gl/zHRQNDq5NpmR1gnD6", text: "Una plaza preciosa con puestos de mercado y restaurantes. Muy buen punto de partida para tu paseo por el casco antiguo." },
      { title: "Vieux Nice · el casco antiguo", img: "/img/image26.jpg", text: "Hay mucho que ver. Pasea, prueba la comida local (¡prueba la socca!), compra algo y disfruta del ambiente. Cada mañana hay un gran mercado en [Cours Saleya](https://maps.app.goo.gl/Q1kgFC76HDZ8eYgx6), con un mercado de flores muy bonito. Piérdete sin rumbo; seguro que te encanta." },
      { title: "Colline du Château", img: "/img/image27.jpg", map: "https://maps.app.goo.gl/9arFE5msognYAFWM7", text: "El parque más bonito (o más *nice*) de Niza. En la \"colina del castillo\" estaba el antiguo castillo; ahora solo quedan ruinas. Un montón de miradores en alto, a un paseo del casco antiguo (prepárate para muchas escaleras) y una pequeña cascada por el camino. Baja por el otro lado de la colina para llegar al puerto." },
      { title: "Port Lympia", img: "/img/image28.jpg", map: "https://maps.app.goo.gl/mXEDdLw7ancq7S9j8", text: "Un puerto pequeño de yates y barcos de pesca, con un par de restaurantes y cafés. Es el momento de ir a Les Petits Marchands a picar algo antes de seguir andando. Sitio secreto: en el extremo del puerto, junto al [Phare de Nice](https://maps.app.goo.gl/ZvZDyxhPTBLqsXF16), puedes sentarte a disfrutar del mar con un bocadillo." },
      { title: "Monument aux Morts de Rauba-Capeù", img: "/img/image29.jpg", map: "https://maps.app.goo.gl/nCyMMmek9i4EifDb7", text: "Un monumento precioso tallado en la roca, homenaje a los soldados de la Primera Guerra Mundial. Un punto de partida genial para el paseo marítimo." },
      { title: "Promenade des Anglais", img: "/img/image30.jpg", text: "Camina junto al mar hasta el mirador con el gran cartel de I LOVE NICE y sigue paseando. Por el camino hay bares con balcones sobre el mar, como el [Waka Bar](https://maps.app.goo.gl/n1W8WeoxNV21mjCVA). Nunca he entendido el hype (el balcón es estrechísimo), pero a mucha gente le encanta. Consejo: instálate la app **Lime** para alquilar bicis eléctricas baratas y pedalear junto a la playa." },
      { title: "Zone Piétonne", img: "/img/image31.jpg", map: "https://maps.app.goo.gl/TaXdpk44M4qXkatn9", text: "Para cenar, vuelve hacia Place Masséna (igual de bonita de noche). Como vecino, esta es mi zona principal para salir: muchos restaurantes chulos y un paseo agradable." },
      { title: "Cierra el día con buen rollo", text: "Baja a la playa y disfruta de la tarde. Pilla un helado, un bocadillo o algo de beber, siéntate en la playa y disfruta del resto del día." },
    ],
  },
  more: {
    title: "Más sitios",
    lead: "¿Tienes más tiempo? Para estos necesitas transporte público (tren o bus). Google Maps es buena idea.",
    trips: [
      { title: "Panorama du Mont Boron", how: "Bus cada 20–30 min, o Uber", img: "/img/image32.jpg", map: "https://maps.app.goo.gl/MijmrrULrY5gQ13J7", text: "El mejor mirador de Niza. Camina hasta el [Fort du Mont Alban](https://maps.app.goo.gl/Z9a5TPVaWGBcQp5CA), justo detrás, para ver la vista del otro lado, o baja a pie hasta Villefranche." },
      { title: "Villefranche-sur-Mer", how: "7–8 min en tren", img: "/img/image33.jpg", map: "https://maps.app.goo.gl/9HdBGPSZwFRE4Pnz8", text: "Un pueblo precioso a dos paradas de tren. Una de las playas más bonitas de la zona, un paseo junto al mar con restaurantes y un pueblo genial con miradores. Con suerte conocerás a Simba, el gato icono local que exige que todo el mundo lo acaricie." },
      { title: "Monaco", how: "~30 min en tren", img: "/img/image34.jpg", map: "https://maps.app.goo.gl/LxNVTHDQSWB4Weqg7", text: "Consejo pro: siéntate en el lado derecho del tren para ver el mar. A los fans de la F1 les encantará recorrer el circuito a pie. Un casco antiguo precioso con palacio, y los coches de lujo más locos dando vueltas." },
      { title: "Èze village", how: "Bus (mira los horarios)", img: "/img/image35.jpg", map: "https://maps.app.goo.gl/guaM9RBNrYGBGkuq9", text: "Mi favorito de los muchos pueblos antiguos alrededor de Niza. Más difícil de llegar sin coche, pero merece muchísimo la pena. Un ambiente único, y además una *parfumerie* que hace perfumes que seguro conoces." },
      { title: "La Tête de Chien", how: "Coche o Uber", img: "/img/image36.jpg", map: "https://maps.app.goo.gl/aiUEAL1uCF4yLzh27", text: "El mejor mirador gratuito de la región: una vista de 360° de Niza, Mónaco, Italia y los Alpes nevados, con una ruta de senderismo y un fuerte. Necesitas coche, o un bus hasta el pueblo de al lado y un Uber cortito." },
      { title: "Menton", how: "~35 min en tren", img: "/img/image37.jpg", text: "La última ciudad antes de la frontera italiana (puedes ir andando). Una joya escondida con comida excelente, un casco antiguo con influencia italiana y una playa increíble. Famosa por sus limones: prueba cualquier cosa de limón." },
      { title: "Théoule-sur-Mer", how: "Más lejos, en tren", img: "/img/image38.jpg", text: "Un pueblecito de playa conocido por sus *calanques*, calas rocosas con rocas rojizas. Un paisaje precioso." },
      { title: "Antibes", how: "~25 min en tren", text: "Un casco antiguo y un puerto preciosos, y además playa de arena. Donde paso mucho tiempo en verano." },
      { title: "Cannes", how: "~30 min en tren", text: "La casa del Palais des Festivals, con una playa bonita y muchos bares y restaurantes. Mucha vida por la noche; no pierdas el último tren." },
      { title: "Los Alpes y sus pueblos", how: "Tren o coche", text: "Hay muchos pueblos de montaña preciosos más lejos. A algunos se llega en tren y a otros necesitas coche. ¡Pregúntame si quieres consejos!" },
    ],
  },
  date: {
    title: "Tengo una cita, ¿adónde voy?",
    lead: "Muchos de los sitios de arriba son geniales para una cita. Estos van un paso más allá si viajas con tu pareja (y siguen molando si vas solo o con amigos).",
    ideas: [
      { title: "Pícnic con vistas · Mont Boron", img: "/img/image39.jpg", text: "Pilla un pan bagnat (o la comida que quieras), coge un Uber hasta el [Panorama du Mont Boron](https://maps.app.goo.gl/4XbrWvRrrTGqweq56) o el [Fort du Mont Alban](https://maps.app.goo.gl/3mfn1pV3qzk6MFuh9) (puedes ir andando de uno a otro), siéntate y disfruta de la comida y del ambiente. Mi sitio número 1 para una cita." },
      { title: "Taller de perfume · Èze o Grasse", img: "/img/image40.jpg", text: "En Èze hay una *parfumerie* de una gran marca donde puedes reservar un taller y crear tu propio perfume personalizado. Los restaurantes y las vistas también son increíbles. Grasse, capital del perfume para muchas grandes marcas, tiene todavía más opciones: menos pintoresca que Èze, pero bonita a su manera." },
      { title: "Comer junto a la playa · Villefranche", img: "/img/image41.jpg", text: "Un par de buenos restaurantes a pie de mar, por la zona de [DRY Restaurant & Cocktail Bar](https://maps.app.goo.gl/ARxoeFQmG1vqskmp9). Algo más caros por la ubicación, pero tienes una mesa literalmente al lado del mar. Elige el que más te guste." },
      { title: "Paseo en bici · Saint-Laurent-du-Var", img: "/img/image42.jpg", text: "Alquila bicis en **Lime** o **Pony** (Pony tiene bicis dobles: tú pedaleas y tu pareja va detrás) y recorre toda la Promenade des Anglais hasta el puerto de Saint-Laurent-du-Var, con restaurantes, bares y discotecas. Mi elección allí es [Le Kashmir Flots Bleus](https://maps.app.goo.gl/NLBg1UBvsVa5iQ4Z6), un buen restaurante indio. Sigue andando hasta **Cap 3000**, un centro comercial junto a la playa. El carril bici sigue casi toda la costa si quieres seguir." },
    ],
  },
  footer: {
    title: "GGs. ¡Nos vemos en Niza!",
    text: "¿Dudas o buscas algo concreto? Pregúntale a Damascus en Twitter.",
  },
};

export default es;
