import type { Content } from "./types";

const fr: Content = {
  meta: {
    title: "Guide food Evo France",
    description: "Le guide de Damascus : où manger et quoi visiter à Nice pendant l'Evo France 2026.",
  },
  ui: {
    eyebrow: "Evo France 2026 · Nice · 9–11 oct.",
    titleBefore: "Le guide ",
    titleAccent: "food",
    titleAfter: " Evo France",
    byline: "Par Damascus, Niçois du coin",
    intro:
      "Bienvenue (ou re-bienvenue) à Nice ! Plein d'amis débarquent du monde entier dans ma ville, alors voici mes recos food. Je mange halal, donc ce sont surtout des restos halal et des adresses avec de bons plats végétariens ou de poisson. Ce sont les restos où je vais d'habitude dans ma ville. Après les adresses food, il y a aussi un guide touristique, comme ça vous avez une liste simple de trucs sympas à faire. Profitez de tout ce que Nice a à offrir !",
    tierLegend: "Légende des tiers",
    nav: {
      venue: "Près de la salle",
      local: "Spécialités locales",
      must: "Incontournables",
      brunch: "Brunch",
      hangout: "Sortir",
      itinerary: "Itinéraire 1 jour",
      more: "Plus loin",
      date: "Idées de date",
    },
    filters: {
      label: "Filtrer par tier",
      all: "Tous ({n})",
      s: "Tier S",
      a: "Tier A",
      b: "Tier B",
      near: "Moins de 5 min à pied",
      empty: "Aucune adresse ne correspond à ce filtre.",
    },
    walk: "{n} min à pied",
    openMaps: "Ouvrir dans Maps",
    language: "Langue",
  },
  venue: {
    title: "Les bonnes adresses autour de la salle",
    lead: "Les temps de marche sont calculés depuis la salle, au Parvis de l'Europe. Touchez un nom pour l'ouvrir dans Google Maps.",
    spots: {
      kosmopolite: {
        kind: "Kebab",
        desc: "Des kebabs façon berlinoise avec du pain maison et des recettes originales. Pour moi, le meilleur kebab de Nice. Petite adresse familiale, grosses portions (vous aurez du mal à finir) et plein de garnitures au choix. Pain ou galette : je conseille le pain, mais la galette, c'est solide aussi. Ils font aussi des burgers, mais je n'ai jamais goûté.",
        note: "L'an dernier, c'était de loin l'adresse la plus populaire de la liste et ils ont été en rupture tôt. Cette année, ils s'organisent pour qu'il y en ait pour tout le monde !",
        prices: ["**13–14 €** le sandwich"],
      },
      grillade: {
        kind: "Grillades",
        desc: "Reco facile. Un bon grill avec une carte simple : choisissez vos viandes (mélangez comme vous voulez), frites maison, salade, sauce, et c'est réglé. Prenez une assiette (mon choix) ou un sandwich. Impossible de se tromper !",
        prices: ["**12 €** l'assiette 2 viandes", "**7–8 €** le sandwich"],
      },
      medina: {
        kind: "Street food tunisienne",
        desc: "Ouvert il y a seulement deux mois. Des wraps, sandwiches et assiettes originaux avec de la viande épicée. Goûtez le *makloub* (pâte à pizza fourrée au poulet, à la viande ou au poisson, avec sauce et salade) ou le *mlawi* (wrap au pain maison). Plats du jour avec différentes spécialités tunisiennes. Si vous aimez épicé, dites-leur : la cuisine tunisienne, ça va toujours avec de la harissa !",
        prices: ["**Moins de 10 €** pour la plupart des plats"],
      },
      krousty: {
        kind: "Chaîne de fast-food asiatique",
        desc: "Chaîne française populaire avec des bowls de riz et de nouilles. Service rapide, parfait à emporter. Jamais goûté le *bobun* ? C'est un plat vietnamien avec des vermicelles de riz et du bœuf. Pour la version street food bien française, prenez le Krousty : riz, poulet frit et une bonne dose de sauce. Un peu too much à mon goût, mais de temps en temps, faut se faire plaisir.",
        prices: ["**~12 €** plat + boisson"],
      },
      tasty: {
        kind: "La révolution du fast-food français ?",
        desc: "Si vous êtes étudiant en France en ce moment, c'est sûrement ce que vous mangez régulièrement. Une grosse box de riz avec du poulet frit, des portions généreuses, plein de sauce (sucrée et/ou piquante) et surtout, pas cher. Un vrai phénomène culturel ces derniers temps. Je trouve ça surcoté, mais ça fait le taf.",
        prices: ["**~12 €** plat + boisson"],
      },
      amande: {
        kind: "Bar à couscous & pâtisseries orientales",
        desc: "Une adresse sympa pour goûter un classique d'Afrique du Nord : le couscous. La semoule est servie avec au choix de la viande épicée, du poulet, du poisson ou des légumes. Pas le meilleur que j'aie mangé (je suis marocain, et aucun resto au monde n'arrive à la cheville du couscous de ma mère), mais solide. Leurs pâtisseries sont top aussi !",
        prices: ["**~16 €**"],
      },
      thai: {
        kind: "Cuisine thaï",
        desc: "Bon thaï juste à côté de la salle. Un resto familial tenu par un couple super sympa, avec parfois leurs enfants qui donnent un coup de main. Ça fait de la cuisine thaï, et ça le fait bien. Impossible de se tromper.",
        prices: ["**~15 €**"],
      },
      turquie: {
        kind: "Cuisine turque",
        desc: "Qui n'aime pas la cuisine turque ? Une très bonne adresse pas trop loin de la salle. Portions généreuses, bonnes grillades et de superbes plateaux à partager.",
        prices: ["**12–25 €** selon la commande"],
      },
      obraise: {
        kind: "Poulet braisé africain",
        desc: "La spécialité, c'est le poulet braisé à l'africaine. Des épices excellentes ; une assiette complète, c'est riz, poulet et sauce (leur sauce verte est élite). Prenez des bananes plantain en accompagnement ! Ils font aussi des burgers corrects, mais moi je prendrais le poulet.",
        prices: ["**~13 €** plat + boisson"],
      },
      panera: {
        kind: "Boulangerie primée & sandwiches",
        desc: "La plupart des boulangeries du coin sont bonnes, mais celle-ci a été élue meilleure boulangerie de la région. Un peu plus loin, mais parfaite pour un goûter, un café ou le déj (un sandwich de boulangerie le midi, c'est très français). Leur *pan bagnat*, le sandwich traditionnel niçois, est excellent.",
        prices: ["**~7 €** le sandwich"],
      },
      filous: {
        kind: "Street food grecque",
        desc: "Adresse sympa de street food grecque, surtout des souvlakis avec accompagnements.",
        prices: ["**~11 €** sandwich + boisson"],
      },
      amoureux: {
        kind: "Pizza napolitaine",
        desc: "Une des meilleures et des plus populaires pizzerias de Nice. Comme son nom l'indique, leur pizza signature est en forme de cœur. Adresse de date élite !",
        note: "Attention : cet endroit est TRÈS populaire. Prévoyez de faire la queue un moment.",
        prices: ["**15–20 €** la pizza"],
      },
      cheesenaan: {
        kind: "Fast-food",
        desc: "Si vous voulez du fast-food / de la junk food, c'est une adresse correcte. Des sandwiches dans du cheese naan, un des fast-foods classiques ici. Rien d'incroyable, mais bon.",
        prices: [],
      },
      chickenstreet: {
        kind: "Poulet frit · ouvert tard",
        desc: "Pas à côté de la salle, mais plus près des coins où sortir le soir. Une chaîne très solide de fast-food et de poulet frit : cheese naans et poulet généralement bon. Dispo sur toutes les applis de livraison, parfait pour les fringales de fin de soirée.",
        prices: ["**~11 €** le menu classique"],
      },
    },
  },
  local: {
    title: "Spécialités locales à goûter",
    lead: "Nice a une cuisine locale très riche. Ces adresses ne sont pas tout près de la salle, gardez-les pour vos moments de tourisme.",
    dishes: [
      { name: "Socca", img: "/img/image17.jpg", text: "Typiquement niçoise, à base de farine de pois chiche. Un en-cas difficile à décrire, mais vraiment unique et plein de goût !" },
      { name: "Pan bagnat", img: "/img/image18.jpg", text: "Le sandwich niçois emblématique. Un mélange de crudités bien précis, des anchois (on vous demande souvent si vous en voulez) et une bonne dose d'huile d'olive. Vous en trouverez dans quasiment toutes les boulangeries." },
      { name: "Pissaladière", img: "/img/image19.jpg", text: "Celle-là est… spéciale. Une pâte à pizza avec des oignons confits très savoureux et des olives, plus des anchois si vous voulez. J'aime bien, genre une part. Je n'en reprendrais pas, haha." },
    ],
    after: "C'est à peu près le « big three ». Il y a plein d'autres choses à goûter si vous êtes curieux : les restos locaux proposent toujours des assiettes à partager avec toutes les spécialités du coin.",
    restaurantsTitle: "Restos locaux",
    restaurants: [
      { name: "Lou Balico", href: "https://maps.app.goo.gl/QepKUXueGfU7dtKp7", text: "Pas trop loin de la salle, beaucoup de choix, et une équipe très sympa qui vous fera découvrir le meilleur de la cuisine locale avec plaisir." },
      { name: "D'Aquì", href: "https://maps.app.goo.gl/K9vhtbEGDSurZBrh9", text: "Un peu plus loin, près du port (un coin sympa pour se balader), avec aussi beaucoup de choix." },
      { name: "Papaye & Mamaye", href: "https://maps.app.goo.gl/WfDPyutwjJBgjq1T7", text: "Une de mes adresses habituelles. Surtout des sandwiches ; ils ont gagné l'an dernier le (très sérieux) concours annuel du meilleur pan bagnat de Nice. Juste à côté de la plage : prenez un pan bagnat et un gâteau au citron, posez-vous sur la plage et chillez." },
      { name: "Boulangerie Panera", href: "https://maps.app.goo.gl/1yQkJ9vefTytdvF29", text: "Boulangerie primée avec un excellent pan bagnat." },
    ],
  },
  must: {
    title: "Les incontournables",
    lead: "Vous devez absolument goûter. Pas de séjour à Nice complet sans ces adresses.",
    fenocchio:
      "Parmi les meilleures glaces qu'on puisse rêver, avec environ 150 parfums. Ils ont un labo de glaces à côté qui crée des parfums « uniques ». La technique habituelle : deux boules classiques et une boule risquée, genre tomate-basilic, bière, olive et plein d'autres trucs inattendus. En plein cœur du Vieux Nice, parfait pour vos moments de tourisme.",
    petitsMarchands:
      "La meilleure pâtisserie de Nice, et l'une des meilleures que j'aie jamais goûtées. À chaque fois que je prends une douceur au hasard, c'est 10/10. Faites-vous plaisir et goûtez le gâteau à la mangue : il est tellement bon que je l'ai fait servir à mon propre mariage ! Passez prendre un café quand vous voulez. Ça marche tellement bien qu'ils ont ouvert deux autres adresses depuis l'an dernier. Incontournable, vraiment.",
    boulangeriesTitle: "Les boulangeries !",
    boulangeries:
      "Vous connaissez déjà le principe : entrez dans n'importe quelle boulangerie, regardez, prenez la viennoiserie ou la pâtisserie qui vous fait envie, et régalez-vous. Avec les boulangeries françaises, impossible de se tromper.",
  },
  brunch: {
    title: "Où bruncher",
    items: [
      { name: "Maison JL Brunch", href: "https://maps.app.goo.gl/ZVad2LTtjhW2zEzn8", text: "À 3 min de la salle !" },
      { name: "Le Kawa", href: "https://maps.app.goo.gl/UDw8GrZHmrwuNRYv7", text: "À environ 15 min. Une de mes adresses fétiches." },
      { name: "La 36ème Chambre", href: "https://maps.app.goo.gl/cQc3WF3izu8eLfR87", text: "À 11 min en tram. Brunch à la coréenne, avec aussi un menu du midi." },
      { name: "Rosewood Café", href: "https://maps.app.goo.gl/3yJ1gSrcaNft5Yjo9", text: "À 11 min en tram." },
    ],
  },
  hangout: {
    title: "Où sortir & manger",
    lead: "Le quartier de la salle n'est pas très animé le soir. Voici les deux principaux coins où sortir, avec mes restos préférés.",
    halal: "Halal",
    areas: [
      {
        title: "Vieux Nice · la vieille ville",
        img: "/img/image22.jpg",
        text: "Animé et magnifique, avec plein de bars, de restos et un super marché. Les restos italiens ne servent pas de viande halal… mais qui prend de la viande dans un resto italien, franchement ?",
        items: [
          { name: "La Voglia", href: "https://maps.app.goo.gl/AP1jy5PS4Z934Jv87", text: "Super italien. La Favola, juste en face, a le même proprio et est tout aussi bon." },
          { name: "Di Più", href: "https://maps.app.goo.gl/fzqWvYNq4gAPff1z9", text: "Un autre super resto italien." },
          { name: "Le Petit Palais", href: "https://maps.app.goo.gl/XN9CMNKtED4WDeF97", text: "Bonne viande, steakhouse solide." },
          { name: "Pitadine", href: "https://maps.app.goo.gl/jKbLdcpwashAMkVy8", text: "Cuisine du Moyen-Orient." },
          { name: "Le Banthai", href: "https://maps.app.goo.gl/Da3oKeNeYPE8iy339", text: "Excellent thaï avec musique live. Pas halal." },
        ],
      },
      {
        title: "Zone Piétonne & Place Masséna · le centre",
        img: "/img/image23.jpg",
        text: "Le centre-ville : à 11 min en tram de la salle, ou une jolie balade de 24 min à pied à travers un parc.",
        items: [
          { name: "Omura", href: "https://maps.app.goo.gl/9aSNr8HJXot92vTD6", text: "Bon resto thaï." },
          { name: "La Villa d'Este", href: "https://maps.app.goo.gl/XZmtzDiWBd8iA9mV8", text: "Bon resto italien." },
          { name: "La Pizza Cresci", href: "https://maps.app.goo.gl/c8q7e57MWmqBX8WK9", text: "Super pizzeria." },
          { name: "Rodizio Beach", href: "https://maps.app.goo.gl/wFSn9qRQMNP9TPLW8", text: "Grillades brésiliennes.", halal: true },
          { name: "Nha Trang", href: "https://maps.app.goo.gl/nJ4rLxxoVWphhZC67", text: "Barbecue coréen.", halal: true },
          { name: "Gusti", href: "https://maps.app.goo.gl/QQ43S6n1Uyzoaxrx5", text: "Un peu plus loin, mais pour moi le meilleur rapport qualité-prix du coin. De grosses assiettes bien garnies, de la bonne viande ou du bon poisson, jamais déçu." },
        ],
      },
    ],
  },
  itinerary: {
    title: "Itinéraire 1 jour",
    lead: "Un bon circuit pour voir le maximum de Nice en une journée. Regardez les sections plus haut pour savoir où manger en chemin.",
    video: "On a fait un guide vidéo de quelques-unes de ces adresses.",
    videoLink: "Le voir sur X →",
    stops: [
      { title: "Place Masséna", map: "https://maps.app.goo.gl/LKbxxRAFuRMUhax57", text: "Le cœur de Nice (en photo dans la section centre plus haut). Une superbe place entourée de boutiques et de restos : un point de départ idéal. Prenez un petit-déj ou un brunch dans le coin ; Rosewood, Le Kawa ou Fino Café sont de bons choix, et il y en a plein d'autres." },
      { title: "Promenade du Paillon", img: "/img/image24.jpg", text: "Une longue coulée verte qui part de la Place Masséna. Prenez-la pour rejoindre la vieille ville à pied." },
      { title: "Place Garibaldi", img: "/img/image25.jpg", map: "https://maps.app.goo.gl/zHRQNDq5NpmR1gnD6", text: "Une superbe place avec des étals de marché et des restos. Un très bon point de départ pour votre balade dans le Vieux Nice." },
      { title: "Vieux Nice · la vieille ville", img: "/img/image26.jpg", text: "Plein de choses à voir. Baladez-vous, goûtez la cuisine locale (goûtez la socca !), faites un peu de shopping et profitez de l'ambiance. Il y a un grand marché tous les matins sur le [Cours Saleya](https://maps.app.goo.gl/Q1kgFC76HDZ8eYgx6), avec un joli marché aux fleurs. Promenez-vous au hasard, vous allez forcément adorer." },
      { title: "Colline du Château", img: "/img/image27.jpg", map: "https://maps.app.goo.gl/9arFE5msognYAFWM7", text: "Le plus beau parc de Nice. La colline abritait autrefois le vieux château ; aujourd'hui il n'en reste que des ruines. Plein de points de vue en hauteur, accessible à pied depuis la vieille ville (préparez-vous à beaucoup d'escaliers), et une petite cascade en chemin. Redescendez par l'autre côté de la colline pour arriver au port." },
      { title: "Port Lympia", img: "/img/image28.jpg", map: "https://maps.app.goo.gl/mXEDdLw7ancq7S9j8", text: "Un petit port de yachts et de bateaux de pêche, avec quelques restos et cafés. C'est le moment d'aller aux Petits Marchands pour un goûter avant de continuer à marcher. Spot caché : tout au bout du port, près du [Phare de Nice](https://maps.app.goo.gl/ZvZDyxhPTBLqsXF16), vous pouvez vous poser face à la mer avec un sandwich." },
      { title: "Monument aux Morts de Rauba-Capeù", img: "/img/image29.jpg", map: "https://maps.app.goo.gl/nCyMMmek9i4EifDb7", text: "Un superbe monument taillé dans la roche, en hommage aux soldats de la Première Guerre mondiale. Un point de départ idéal pour le bord de mer." },
      { title: "Promenade des Anglais", img: "/img/image30.jpg", text: "Longez la mer jusqu'au point de vue avec le grand panneau I LOVE NICE, puis continuez la balade. En chemin, il y a des bars avec des balcons au-dessus de la mer, comme le [Waka Bar](https://maps.app.goo.gl/n1W8WeoxNV21mjCVA). Je n'ai jamais compris la hype (le balcon est riquiqui), mais plein de gens adorent. Astuce : installez l'appli **Lime** pour louer des vélos électriques pas chers et rouler le long de la plage." },
      { title: "Zone Piétonne", img: "/img/image31.jpg", map: "https://maps.app.goo.gl/TaXdpk44M4qXkatn9", text: "Pour le dîner, revenez vers la Place Masséna (tout aussi belle de nuit). En tant qu'habitant, c'est mon coin préféré pour sortir : plein de restos sympas et une jolie balade." },
      { title: "Finir la journée en mode chill", text: "Allez jusqu'à la plage et profitez de la soirée. Prenez une glace, un sandwich ou des boissons, posez-vous sur la plage et savourez la fin de journée." },
    ],
  },
  more: {
    title: "Plus loin",
    lead: "Vous avez plus de temps ? Ces endroits demandent de prendre les transports en commun (train ou bus). Google Maps est votre ami.",
    trips: [
      { title: "Panorama du Mont Boron", how: "Bus toutes les 20–30 min, ou Uber", img: "/img/image32.jpg", map: "https://maps.app.goo.gl/MijmrrULrY5gQ13J7", text: "Le meilleur point de vue de Nice. Marchez jusqu'au [Fort du Mont Alban](https://maps.app.goo.gl/Z9a5TPVaWGBcQp5CA) juste derrière pour la vue de l'autre côté, ou descendez à pied jusqu'à Villefranche." },
      { title: "Villefranche-sur-Mer", how: "7–8 min en train", img: "/img/image33.jpg", map: "https://maps.app.goo.gl/9HdBGPSZwFRE4Pnz8", text: "Une ville magnifique à deux arrêts de train. Une des plus belles plages du coin, une promenade en bord de mer avec des restos, et un super village avec des points de vue. Avec un peu de chance, vous croiserez Simba, le chat star du coin qui exige que tout le monde le caresse." },
      { title: "Monaco", how: "~30 min en train", img: "/img/image34.jpg", map: "https://maps.app.goo.gl/LxNVTHDQSWB4Weqg7", text: "Astuce de pro : asseyez-vous côté droit du train pour la vue sur la mer. Les fans de F1 vont adorer parcourir le circuit à pied. Une superbe vieille ville avec un palais, et les voitures de luxe les plus folles qui circulent partout." },
      { title: "Èze village", how: "Bus (vérifiez les horaires)", img: "/img/image35.jpg", map: "https://maps.app.goo.gl/guaM9RBNrYGBGkuq9", text: "Mon préféré parmi les nombreux villages perchés autour de Nice. Plus dur d'accès sans voiture, mais ça vaut vraiment le coup. Une ambiance unique, plus une parfumerie qui fabrique des parfums que vous connaissez." },
      { title: "La Tête de Chien", how: "Voiture ou Uber", img: "/img/image36.jpg", map: "https://maps.app.goo.gl/aiUEAL1uCF4yLzh27", text: "Le meilleur point de vue gratuit de la région : une vue à 360° sur Nice, Monaco, l'Italie et les Alpes enneigées, avec un sentier de rando et un fort. Il faut une voiture, ou un bus jusqu'au village d'à côté puis un petit Uber." },
      { title: "Menton", how: "~35 min en train", img: "/img/image37.jpg", text: "La dernière ville avant la frontière italienne (vous pouvez y aller à pied). Une pépite méconnue avec une excellente cuisine, une vieille ville aux influences italiennes et une plage incroyable. Célèbre pour ses citrons : goûtez tout ce qui est au citron." },
      { title: "Théoule-sur-Mer", how: "Plus loin en train", img: "/img/image38.jpg", text: "Une petite ville balnéaire connue pour ses calanques, des criques aux rochers rouges. Paysage magnifique." },
      { title: "Antibes", how: "~25 min en train", text: "Une belle vieille ville et un port, plus une plage de sable. C'est là que je traîne souvent l'été." },
      { title: "Cannes", how: "~30 min en train", text: "La ville du Palais des Festivals, avec une jolie plage et plein de bars et de restos. Ça bouge le soir ; ne ratez pas le dernier train." },
      { title: "Les Alpes & les villages", how: "Train ou voiture", text: "Plein de beaux villages de montagne un peu plus loin. Certains en train, d'autres en voiture. Demandez-moi conseil !" },
    ],
  },
  date: {
    title: "J'ai un date, je vais où ?",
    lead: "Beaucoup d'adresses plus haut sont parfaites pour un date. Celles-ci vont encore plus loin si vous voyagez en couple (et elles restent sympas en solo ou entre potes).",
    ideas: [
      { title: "Pique-nique avec vue · Mont Boron", img: "/img/image39.jpg", text: "Prenez un pan bagnat (ou ce que vous voulez), un Uber jusqu'au [Panorama du Mont Boron](https://maps.app.goo.gl/4XbrWvRrrTGqweq56) ou au [Fort du Mont Alban](https://maps.app.goo.gl/3mfn1pV3qzk6MFuh9) (on peut marcher de l'un à l'autre), posez-vous et profitez du repas et de l'ambiance. Mon spot de date n°1 perso." },
      { title: "Atelier parfum · Èze ou Grasse", img: "/img/image40.jpg", text: "À Èze, il y a la parfumerie d'une grande marque où vous pouvez réserver un atelier et créer votre propre parfum. Les restos et les vues sont incroyables aussi. Grasse, capitale du parfum pour plein de grandes marques, offre encore plus de choix : moins pittoresque qu'Èze, mais belle à sa façon." },
      { title: "Manger les pieds dans l'eau · Villefranche", img: "/img/image41.jpg", text: "Quelques bons restos directement sur la mer, autour du [DRY Restaurant & Cocktail Bar](https://maps.app.goo.gl/ARxoeFQmG1vqskmp9). Un peu plus cher à cause de l'emplacement, mais vous avez une table littéralement au bord de l'eau. Choisissez celui qui vous plaît le plus." },
      { title: "Balade à vélo · Saint-Laurent-du-Var", img: "/img/image42.jpg", text: "Louez des vélos sur **Lime** ou **Pony** (Pony a des vélos duo : vous pédalez, votre moitié est assise derrière) et parcourez toute la Promenade des Anglais jusqu'au port de Saint-Laurent-du-Var, avec restos, bars et boîtes. Mon choix là-bas : [Le Kashmir Flots Bleus](https://maps.app.goo.gl/NLBg1UBvsVa5iQ4Z6), un bon resto indien. Continuez à pied jusqu'à **Cap 3000**, un centre commercial au bord de la plage. La piste cyclable longe presque toute la côte si vous voulez continuer." },
    ],
  },
  footer: {
    title: "GG. Rendez-vous à Nice !",
    text: "Des questions ou besoin d'un truc précis ? Demandez à Damascus sur Twitter.",
  },
};

export default fr;
