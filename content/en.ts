import type { Content } from "./types";

const en: Content = {
  meta: {
    title: "Evo France Food Guide",
    description: "Damascus's guide to where to eat and what to see in Nice during Evo France 2026.",
  },
  ui: {
    eyebrow: "Evo France 2026 · Nice · Oct 9–11",
    titleBefore: "The Evo France ",
    titleAccent: "Food",
    titleAfter: " Guide",
    byline: "By Damascus, local resident",
    intro:
      "Welcome (back) to Nice, everyone! So many friends are coming from all around the world to my home town, so here are my food recommendations. My diet is halal, so these are mostly halal restaurants and places with good vegetarian or fish dishes. These are the restaurants I usually go to in my city. After the food spots there's a tourist guide too, so you have an easy list of cool things to do. Enjoy what Nice has to offer!",
    tierLegend: "Tier legend",
    nav: {
      venue: "Near the venue",
      local: "Local food",
      must: "Must try",
      brunch: "Brunch",
      hangout: "Hang out",
      itinerary: "1-day itinerary",
      more: "More places",
      date: "Date ideas",
    },
    filters: {
      label: "Filter by tier",
      all: "All ({n})",
      s: "S tier",
      a: "A tier",
      b: "B tier",
      near: "Under 5 min walk",
      empty: "No spots match this filter.",
    },
    walk: "{n} min walk",
    openMaps: "Open in Maps",
    language: "Language",
  },
  venue: {
    title: "Great options around the venue",
    lead: "Walking times are from the venue at Parvis de l'Europe. Tap a name to open it in Google Maps.",
    spots: {
      kosmopolite: {
        kind: "Kebab spot",
        desc: "Berliner-style kebabs with homemade bread and creative recipes. Imo the best kebab in Nice. Small family-owned spot, big portions (you'll hardly finish it), and lots of toppings to choose from. Bread or tortilla: I recommend bread, although tortilla is a solid choice too. They also have burgers, but I've never tried them.",
        note: "Last year this was by far the most popular spot on the list and they ran out of food early. This year they're making sure there's enough for everyone!",
        prices: ["**€13–14** per sandwich"],
      },
      grillade: {
        kind: "BBQ spot",
        desc: "Easy recommendation. A solid grill with a simple menu: pick your meats (mix and match), homemade fries, salad, sauce, and you're done. Get a plate (my pick) or a sandwich. Can't go wrong!",
        prices: ["**€12** plate with 2 meats", "**€7–8** sandwich"],
      },
      medina: {
        kind: "Tunisian street food",
        desc: "Opened just two months ago. Unique wraps, sandwiches and plates with spiced meat. Try *Makloub* (stuffed pizza crust with chicken, meat or fish, sauce and salad) or *Mlawi* (homemade bread wrap). Daily specials with various Tunisian dishes. If you like it spicy, tell them: Tunisian food always goes with harissa!",
        prices: ["**Under €10** most items"],
      },
      krousty: {
        kind: "Asian fast food chain",
        desc: "Popular French chain with Asian rice and noodle bowls. Fast service, great for takeaway. Never had *Bobun*? It's a Vietnamese dish with rice vermicelli and beef. For extra French street food, try the Krousty: rice, fried chicken and a generous amount of sauce. A bit much imo, but sometimes you gotta indulge.",
        prices: ["**~€12** plate + drink"],
      },
      tasty: {
        kind: "The French fast food revolution?",
        desc: "If you're a student in France right now, this is probably what you eat regularly. A large box of rice with fried chicken, generous servings, lots of sauce (sweet and/or spicy) and, most importantly, cheap. A cultural phenomenon lately. I think it's overrated, but it does the job.",
        prices: ["**~€12** plate + drink"],
      },
      amande: {
        kind: "Couscous bar & North African pastries",
        desc: "A cool spot to try a North African staple: couscous. The semolina base comes with your choice of spiced meat, chicken, fish or vegetables. Not the best I've had (I'm Moroccan, and no restaurant on Earth gets close to my mother's couscous), but solid. Their pastries are cool too!",
        prices: ["**~€16**"],
      },
      thai: {
        kind: "Thai food",
        desc: "Solid Thai spot right next to the venue. A family restaurant run by a super cool couple, with their kids helping at times. It does Thai food, and does it alright. Can't go wrong.",
        prices: ["**~€15**"],
      },
      turquie: {
        kind: "Turkish food",
        desc: "Who doesn't love Turkish food? A very good spot not too far from the venue. Generous servings, good grilled meat, and beautiful sharing platters.",
        prices: ["**€12–25** depending on order"],
      },
      obraise: {
        kind: "African roasted chicken",
        desc: "African-style roasted chicken is the specialty. Excellent spices; a full plate has rice, chicken and sauce (their green sauce is elite). Add plantains as a side! They also do decent burgers, but I'd go for the chicken.",
        prices: ["**~€13** plate + drink"],
      },
      panera: {
        kind: "Award-winning bakery & sandwiches",
        desc: "Most *boulangeries* around are good, but this one won best bakery in the region. A bit further away, but great for a snack, a coffee or lunch (grabbing a bakery sandwich is a very common French lunch). Their *pan bagnat*, the traditional Nice sandwich, is excellent.",
        prices: ["**~€7** sandwich"],
      },
      filous: {
        kind: "Greek street food",
        desc: "Cool place with Greek street food, mainly souvlaki with sides.",
        prices: ["**~€11** sandwich + drink"],
      },
      amoureux: {
        kind: "Neapolitan pizza",
        desc: "One of the best and most popular pizza spots in Nice. \"Les amoureux\" means \"the lovers\", and their signature pizza is heart-shaped. Elite date spot!",
        note: "Warning: this place is POPULAR. Expect to line up for a while.",
        prices: ["**€15–20** per pizza"],
      },
      cheesenaan: {
        kind: "Fast food",
        desc: "If you want fast/junk food, this is a decent spot. Sandwiches in cheese-stuffed naan, one of the standard fast foods here. Nothing amazing, but oh well.",
        prices: [],
      },
      chickenstreet: {
        kind: "Fried chicken · open late",
        desc: "Not next to the venue, but closer to the nightlife spots. A very solid chain for fast food and fried chicken: cheese naans and generally good chicken. Available on any delivery app, great for late-night cravings.",
        prices: ["**~€11** standard meal"],
      },
    },
  },
  local: {
    title: "Local food to try",
    lead: "Nice has a rich local cuisine. These spots aren't that close to the venue, so save them for your tourism time.",
    dishes: [
      { name: "Socca", img: "/img/image17.jpg", text: "Very typical of Nice, made from chickpea flour. A snack that's hard to describe, but very unique and flavorful!" },
      { name: "Pan bagnat", img: "/img/image18.jpg", text: "The iconic Nice sandwich. A specific salad mix, anchovies (most places ask if you want them) and a good amount of olive oil. You'll find it in pretty much any *boulangerie*." },
      { name: "Pissaladière", img: "/img/image19.jpg", text: "This one is… special. A pizza base with marinated, very tasty onions and olives, plus anchovies if you want. I like it, as in one slice. I wouldn't get more, haha." },
    ],
    after: "These are more or less the \"big three\". Plenty more to try if you're curious: local restaurants always have sharing platters with all the local delicacies.",
    restaurantsTitle: "Local restaurants",
    restaurants: [
      { name: "Lou Balico", href: "https://maps.app.goo.gl/QepKUXueGfU7dtKp7", text: "Not too far from the venue, lots of choice, very cool people who'll happily show you what's good about local food." },
      { name: "D'Aquì", href: "https://maps.app.goo.gl/K9vhtbEGDSurZBrh9", text: "A bit further out near the port (a nice area to walk around), with lots of choice too." },
      { name: "Papaye & Mamaye", href: "https://maps.app.goo.gl/WfDPyutwjJBgjq1T7", text: "A regular of mine. Mostly sandwiches; they won Nice's (very serious) yearly best pan bagnat competition last year. Right next to the beach: get a pan bagnat and a lemon cake, sit on the beach and chill." },
      { name: "Boulangerie Panera", href: "https://maps.app.goo.gl/1yQkJ9vefTytdvF29", text: "Award-winning bakery with a great pan bagnat." },
    ],
  },
  must: {
    title: "Must-try spots",
    lead: "You absolutely have to try these. No trip to Nice is complete without them.",
    fenocchio:
      "Some of the best ice cream you could ask for, with around 150 flavors. They have a gelato lab nearby that makes \"unique\" flavors. The usual play: two standard scoops and one risky one, like tomato-basil, beer, olive and plenty more unexpected stuff. Right in the middle of the old town, perfect for your tourism time.",
    petitsMarchands:
      "The best pastry shop in Nice, and one of the best I've ever had. Every time I pick a random sweet, it's 10/10. Do yourself a favor and try the mango cake: it's so good I had it served at my own wedding! Go for a coffee anytime. They've been so successful they opened two more spots since last year. Absolutely must try.",
    boulangeriesTitle: "Boulangeries!",
    boulangeries:
      "If you've been to France before, you already know. If not, it's simple: walk into any bakery (*boulangerie*), browse, pick whatever pastry you want, enjoy. You can't go wrong with French bakeries.",
  },
  brunch: {
    title: "Brunch spots",
    items: [
      { name: "Maison JL Brunch", href: "https://maps.app.goo.gl/ZVad2LTtjhW2zEzn8", text: "3 min from the venue!" },
      { name: "Le Kawa", href: "https://maps.app.goo.gl/UDw8GrZHmrwuNRYv7", text: "About 15 min away. One of my go-to spots." },
      { name: "La 36ème Chambre", href: "https://maps.app.goo.gl/cQc3WF3izu8eLfR87", text: "11 min by tram. Korean-style brunch with a lunch menu too." },
      { name: "Rosewood Café", href: "https://maps.app.goo.gl/3yJ1gSrcaNft5Yjo9", text: "11 min by tram." },
    ],
  },
  hangout: {
    title: "Where to hang out & eat",
    lead: "The area around the venue isn't very lively in the evenings. These are the two main areas to hang out, with my restaurant picks.",
    halal: "Halal",
    areas: [
      {
        title: "Vieux Nice · the old town",
        img: "/img/image22.jpg",
        text: "Lively and beautiful, with lots of bars, restaurants and a cool market. The Italian restaurants don't serve halal meat… but who gets meat at Italian restaurants anyway?",
        items: [
          { name: "La Voglia", href: "https://maps.app.goo.gl/AP1jy5PS4Z934Jv87", text: "Great Italian. La Favola across the street has the same owner and is just as good." },
          { name: "Di Più", href: "https://maps.app.goo.gl/fzqWvYNq4gAPff1z9", text: "Another great Italian restaurant." },
          { name: "Le Petit Palais", href: "https://maps.app.goo.gl/XN9CMNKtED4WDeF97", text: "Solid steakhouse." },
          { name: "Pitadine", href: "https://maps.app.goo.gl/jKbLdcpwashAMkVy8", text: "Middle Eastern spot." },
          { name: "Le Banthai", href: "https://maps.app.goo.gl/Da3oKeNeYPE8iy339", text: "Excellent Thai with live music. Not halal." },
        ],
      },
      {
        title: "Zone Piétonne & Place Masséna · the center",
        img: "/img/image23.jpg",
        text: "The central area: 11 min by tram from the venue, or a nice 24 min walk through a park.",
        items: [
          { name: "Omura", href: "https://maps.app.goo.gl/9aSNr8HJXot92vTD6", text: "Solid Thai restaurant." },
          { name: "La Villa d'Este", href: "https://maps.app.goo.gl/XZmtzDiWBd8iA9mV8", text: "Solid Italian restaurant." },
          { name: "La Pizza Cresci", href: "https://maps.app.goo.gl/c8q7e57MWmqBX8WK9", text: "Great pizza place." },
          { name: "Rodizio Beach", href: "https://maps.app.goo.gl/wFSn9qRQMNP9TPLW8", text: "Brazilian BBQ.", halal: true },
          { name: "Nha Trang", href: "https://maps.app.goo.gl/nJ4rLxxoVWphhZC67", text: "Korean BBQ.", halal: true },
          { name: "Gusti", href: "https://maps.app.goo.gl/QQ43S6n1Uyzoaxrx5", text: "A bit further, but the best price-to-food ratio around imo. Big loaded plates, solid meat or fish, never disappointing." },
        ],
      },
    ],
  },
  itinerary: {
    title: "1-day itinerary",
    lead: "A good circuit to see the most of Nice in one day. Check the sections above for where to eat along the way.",
    video: "We made a video guide to a few of these spots.",
    videoLink: "Watch it on X →",
    stops: [
      { title: "Place Masséna", map: "https://maps.app.goo.gl/LKbxxRAFuRMUhax57", text: "The heart of Nice (pictured in the center section above). A beautiful square with shopping and restaurants around: a great starting point. Get breakfast or brunch nearby; Rosewood, Le Kawa or Fino Café are solid choices, and there are plenty more." },
      { title: "Promenade du Paillon", img: "/img/image24.jpg", text: "A long green park from Place Masséna. Use it to walk to the old town." },
      { title: "Place Garibaldi", img: "/img/image25.jpg", map: "https://maps.app.goo.gl/zHRQNDq5NpmR1gnD6", text: "A beautiful square with market stalls and restaurants. A very good starting point for your old town stroll." },
      { title: "Vieux Nice · the old town", img: "/img/image26.jpg", text: "Plenty to see. Walk around, try local food (try socca!), shop a bit and enjoy the vibes. There's a big market every morning at [Cours Saleya](https://maps.app.goo.gl/Q1kgFC76HDZ8eYgx6), including a nice flower market. Just wander randomly; you're sure to enjoy it." },
      { title: "Colline du Château", img: "/img/image27.jpg", map: "https://maps.app.goo.gl/9arFE5msognYAFWM7", text: "The nicest park in Nice (no pun intended). \"Castle hill\" once had the old castle; now there are only ruins. Plenty of elevated viewpoints, walking distance from the old town (be ready for lots of stairs), and a small waterfall on the way. Walk down the other side of the hill to reach the port." },
      { title: "Port Lympia", img: "/img/image28.jpg", map: "https://maps.app.goo.gl/mXEDdLw7ancq7S9j8", text: "A small port of yachts and fishing boats, with a couple of restaurants and cafés. This is the time to go to Les Petits Marchands for a snack before walking more. Hidden spot: at the very edge of the port, by the [Phare de Nice](https://maps.app.goo.gl/ZvZDyxhPTBLqsXF16), you can sit and enjoy the sea with a sandwich." },
      { title: "Monument aux Morts de Rauba-Capeù", img: "/img/image29.jpg", map: "https://maps.app.goo.gl/nCyMMmek9i4EifDb7", text: "A beautiful monument carved into the rock, a tribute to World War I soldiers. A great starting point for the seafront." },
      { title: "Promenade des Anglais", img: "/img/image30.jpg", text: "Walk along the sea to the viewpoint with the big I LOVE NICE sign, then keep strolling. On the way there are bars with balconies over the sea, like [Waka Bar](https://maps.app.goo.gl/n1W8WeoxNV21mjCVA). I never understood the hype (the balcony is cramped), but lots of people enjoy it. Tip: install the **Lime** app to rent cheap e-bikes and cycle along the beach." },
      { title: "Zone Piétonne", img: "/img/image31.jpg", map: "https://maps.app.goo.gl/TaXdpk44M4qXkatn9", text: "For dinner, head back toward Place Masséna (just as beautiful at night). As a resident, this is my main hangout area: lots of cool restaurants and a nice walk." },
      { title: "End your day with vibes", text: "Walk to the beach and enjoy the evening. Grab an ice cream, a sandwich or drinks, sit on the beach and enjoy the rest of the day." },
    ],
  },
  more: {
    title: "More places",
    lead: "Got more time? These need public transport (trains or buses). Google Maps is a good shout.",
    trips: [
      { title: "Panorama du Mont Boron", how: "Bus every 20–30 min, or Uber", img: "/img/image32.jpg", map: "https://maps.app.goo.gl/MijmrrULrY5gQ13J7", text: "The best viewpoint in Nice. Walk to [Fort du Mont Alban](https://maps.app.goo.gl/Z9a5TPVaWGBcQp5CA) right behind it for the view on the other side, or hike all the way down to Villefranche." },
      { title: "Villefranche-sur-Mer", how: "7–8 min by train", img: "/img/image33.jpg", map: "https://maps.app.goo.gl/9HdBGPSZwFRE4Pnz8", text: "A gorgeous town two train stops away. One of the most beautiful beaches around, a seaside walk with restaurants, and a great village with viewpoints. With luck you'll meet Simba, the local icon cat who requires everyone to pet him." },
      { title: "Monaco", how: "~30 min by train", img: "/img/image34.jpg", map: "https://maps.app.goo.gl/LxNVTHDQSWB4Weqg7", text: "Pro tip: sit on the right side of the train for the sea view. F1 fans will love walking the circuit. Beautiful old town with a palace, and the craziest luxury cars roaming around." },
      { title: "Èze village", how: "Bus (check times)", img: "/img/image35.jpg", map: "https://maps.app.goo.gl/guaM9RBNrYGBGkuq9", text: "My favorite of the many old villages around Nice. Harder to reach without a car, but incredibly worth it. Unique vibes, plus a *parfumerie* that makes perfumes you know." },
      { title: "La Tête de Chien", how: "Car or Uber", img: "/img/image36.jpg", map: "https://maps.app.goo.gl/aiUEAL1uCF4yLzh27", text: "The best free viewpoint in the region: a full 360° view of Nice, Monaco, Italy and the snowy Alps, with a hiking trail and a fort. You need a car, or a bus to the nearby village plus a short Uber." },
      { title: "Menton", how: "~35 min by train", img: "/img/image37.jpg", text: "The last city before the Italian border (you can walk to it). A hidden gem with excellent food, an Italian-influenced old town and an amazing beach. Famous for its lemons: try anything lemon-flavored." },
      { title: "Théoule-sur-Mer", how: "Further out by train", img: "/img/image38.jpg", text: "A small beach town known for its *calanques*, rocky coves with red-colored rocks. Beautiful landscape." },
      { title: "Antibes", how: "~25 min by train", text: "Beautiful old town and port, plus a sand beach. Where I hang out a lot in summer." },
      { title: "Cannes", how: "~30 min by train", text: "Home of the Palais des Festivals, with a nice beach and lots of bars and restaurants. Lively at night; don't miss the last train." },
      { title: "The Alps & villages", how: "Train or car", text: "Lots of beautiful mountain villages further out. Some by train, some need a car. Ask me for advice!" },
    ],
  },
  date: {
    title: "I'm on a date, where should I go?",
    lead: "Many spots above are great for dates. These go the extra mile if you're traveling with your significant other (and they're still cool solo or with friends).",
    ideas: [
      { title: "Scenic picnic · Mont Boron", img: "/img/image39.jpg", text: "Grab a pan bagnat (or any food you like), take an Uber to [Panorama du Mont Boron](https://maps.app.goo.gl/4XbrWvRrrTGqweq56) or [Fort du Mont Alban](https://maps.app.goo.gl/3mfn1pV3qzk6MFuh9) (you can walk between them), sit down and enjoy a meal and the vibes. My personal #1 date spot." },
      { title: "Perfume workshop · Èze or Grasse", img: "/img/image40.jpg", text: "Èze has a *parfumerie* from a major brand where you can book a workshop and make your own personal perfume. The restaurants and views are incredible too. Grasse, a perfume capital for many major brands, has even more choice: less scenic than Èze, but beautiful in its own way." },
      { title: "Food by the beach · Villefranche", img: "/img/image41.jpg", text: "A couple of good restaurants right on the sea, around [DRY Restaurant & Cocktail Bar](https://maps.app.goo.gl/ARxoeFQmG1vqskmp9). A bit pricier because of the location, but you get a table literally next to the sea. Pick whichever one looks coolest." },
      { title: "Bike ride · Saint-Laurent-du-Var", img: "/img/image42.jpg", text: "Rent bikes on **Lime** or **Pony** (Pony has double bikes: you pedal, your partner rides behind) and ride the full Promenade des Anglais to Saint-Laurent-du-Var's port, with restaurants, bars and clubs. My pick there is [Le Kashmir Flots Bleus](https://maps.app.goo.gl/NLBg1UBvsVa5iQ4Z6), a good Indian restaurant. Walk on to **Cap 3000**, a mall by the beach. The bike lane follows most of the coast if you want to keep going." },
    ],
  },
  footer: {
    title: "GGs. See you in Nice!",
    text: "Questions or need something specific? Ask Damascus on Twitter.",
  },
};

export default en;
