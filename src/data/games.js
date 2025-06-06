// src/data/games.js
const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    description: "An open-world, action-adventure RPG set in the megalopolis of Night City",
    longDescription: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    rating: 4.2,
    platforms: ['pc', 'ps', 'xbox'],
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    features: [
      "Explore the massive open world of Night City",
      "Create your own cyberpunk with hundreds of customization options",
      "Experience a gripping story with multiple endings",
      "Advanced RPG mechanics with deep skill trees",
      "Next-gen graphics with ray tracing support"
    ]
  },
  {
    id: 2,
    title: "Elden Ring",
    description: "A new fantasy action RPG where you become an Elden Lord in the Lands Between",
    longDescription: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    rating: 4.8,
    platforms: ['pc', 'ps', 'xbox'],
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    features: [
      "Vast fantastical world seamlessly connected",
      "Create your own character and define your playstyle",
      "Dungeons with complex and three-dimensional designs",
      "Dynamic weather and day/night cycle",
      "Multiplayer for cooperative and competitive play"
    ]
  },
  {
    id: 3,
    title: "The Legend of Zelda: Breath of the Wild",
    description: "Explore the wilds of Hyrule any way you like in this award-winning adventure",
    longDescription: "Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this stunning open-air adventure. Explore the wilds of Hyrule any way you like—anywhere you can see, you can go.",
    price: 54.99,
    originalPrice: 59.99,
    discount: 8,
    rating: 4.9,
    platforms: ['switch'],
    category: "Adventure",
    image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    features: [
      "Explore a vast open world of Hyrule",
      "Physics-based gameplay for creative problem solving",
      "Over 100 Shrines of Trials to discover and explore",
      "Dynamic weather and realistic physics",
      "Craft weapons, cook food, and brew elixirs"
    ]
  },
  {
    id: 4,
    title: "FIFA 23",
    description: "Experience the biggest tournament in football with EA SPORTS FIFA 23",
    longDescription: "FIFA 23 brings The World's Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men's and women's FIFA World Cup tournaments, the addition of women's club teams, cross-play features, and more. Enjoy an unprecedented level of realism as you experience the emotion and passion of football like never before.",
    price: 39.99,
    originalPrice: 69.99,
    discount: 43,
    rating: 3.9,
    platforms: ['pc', 'ps', 'xbox'],
    category: "Sports",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg",
    features: [
      "Men's and women's FIFA World Cup tournaments",
      "HyperMotion2 Technology for realistic gameplay",
      "Enhanced match atmosphere with improved crowd systems",
      "New set pieces with completely revamped mechanics",
      "Cross-play for multiplayer matches"
    ]
  },
  {
    id: 5,
    title: "Minecraft",
    description: "Create, explore and survive alone or with friends on mobile devices or Windows 10",
    longDescription: "Minecraft is a game about placing blocks and going on adventures. Build anything you can imagine with unlimited resources in Creative mode, or go on grand expeditions in Survival, journeying across mysterious lands and into the depths of your own infinite worlds. Will you hide from monsters or craft tools, armor and weapons to fight back? No need to go alone! Share the adventure with friends in split-screen multiplayer and online.",
    price: 19.99,
    originalPrice: 26.95,
    discount: 26,
    rating: 4.7,
    platforms: ['pc', 'xbox', 'switch'],
    category: "Adventure",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1671340/header.jpg",
    features: [
      "Infinite worlds to explore, build and conquer",
      "Play in creative mode with unlimited resources",
      "Survival mode with monsters to fight",
      "Multiplayer across different platforms",
      "Regular updates with new features and content"
    ]
  },
  {
    id: 6,
    title: "God of War Ragnarök",
    description: "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go",
    longDescription: "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Against a backdrop of real Norse mythology, travel to breathtaking landscapes and face fearsome enemies in the form of Norse gods and monsters. The threat of Ragnarök grows ever closer. Kratos and Atreus must choose between their own safety and the safety of the realms.",
    price: 59.99,
    originalPrice: 69.99,
    discount: 14,
    rating: 4.9,
    platforms: ['ps'],
    category: "Action",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
    features: [
      "Explore mythical Norse realms",
      "New combat abilities for Kratos and Atreus",
      "Deep character development and emotional storytelling",
      "Stunning visuals and cinematic presentation",
      "New weapons and armor to collect and upgrade"
    ]
  },
  {
    id: 7,
    title: "Stardew Valley",
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools",
    longDescription: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won't be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town's most vibrant hub of activity, now lies in shambles.",
    price: 12.99,
    originalPrice: 14.99,
    discount: 13,
    rating: 4.8,
    platforms: ['pc', 'switch'],
    category: "Simulation",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
    features: [
      "Turn overgrown fields into a thriving farm",
      "Raise animals, grow crops, and craft artisanal goods",
      "Socialize with the townsfolk and find a partner",
      "Explore mysterious caves filled with monsters and treasures",
      "Participate in seasonal festivals and community events"
    ]
  },
  {
    id: 8,
    title: "Call of Duty: Modern Warfare II",
    description: "Call of Duty: Modern Warfare II drops players into an unprecedented global conflict",
    longDescription: "Call of Duty: Modern Warfare II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141. From small-scale, high-stakes infiltration tactical ops to highly classified missions, players will deploy alongside friends in a truly immersive experience. Infinity Ward brings fans state-of-the-art gameplay, with all-new gun handling, advanced AI system, and a new Gunsmith.",
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    rating: 3.7,
    platforms: ['pc', 'ps', 'xbox'],
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg",
    features: [
      "Experience an immersive single-player campaign",
      "All-new tactical gameplay mechanics",
      "New Gunsmith system for weapon customization",
      "Advanced AI for more realistic enemy behavior",
      "Multiplayer with new maps and game modes"
    ]
  },
  {
    id: 9,
    title: "Hogwarts Legacy",
    description: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced",
    longDescription: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
    price: 54.99,
    originalPrice: 59.99,
    discount: 8,
    rating: 4.5,
    platforms: ['pc', 'ps', 'xbox', 'switch'],
    category: "Adventure",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
    features: [
      "Attend Hogwarts in the 1800s",
      "Learn spells, brew potions, and grow magical plants",
      "Explore iconic locations like Hogwarts Castle and Hogsmeade",
      "Tame magical beasts and uncover ancient secrets",
      "Develop your character's abilities and choose your path"
    ]
  },
  {
    id: 10,
    title: "Red Dead Redemption 2",
    description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores",
    longDescription: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels.",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    rating: 4.9,
    platforms: ['pc', 'ps', 'xbox'],
    category: "Adventure",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    features: [
      "Massive open world set in the American heartland",
      "Engaging story with memorable characters",
      "Realistic wildlife ecosystem and hunting mechanics",
      "Deep honor system that affects gameplay",
      "Robust multiplayer with persistent world"
    ]
  },
  {
    id: 11,
    title: "Grand Theft Auto V",
    description: "Grand Theft Auto V for PC offers players the option to explore the award-winning world",
    longDescription: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second. The game offers players a huge range of PC-specific customization options, including over 25 separate configurable settings for texture quality, shaders, tessellation, anti-aliasing and more.",
    price: 19.99,
    originalPrice: 29.99,
    discount: 33,
    rating: 4.6,
    platforms: ['pc', 'ps', 'xbox'],
    category: "Action",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
    features: [
      "Explore the massive open world of Los Santos",
      "Play as three unique protagonists with intertwining stories",
      "Experience enhanced graphics and performance on PC",
      "First-person mode for immersive gameplay",
      "GTA Online with constant updates and new content"
    ]
  },
  {
    id: 12,
    title: "The Witcher 3: Wild Hunt",
    description: "As war rages on throughout the Northern Realms, you take on the greatest contract of your life",
    longDescription: "The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
    price: 15.99,
    originalPrice: 39.99,
    discount: 60,
    rating: 4.9,
    platforms: ['pc', 'ps', 'xbox', 'switch'],
    category: "RPG",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
    features: [
      "Vast open world with diverse environments",
      "Morally ambiguous choices with far-reaching consequences",
      "Complex character development system",
      "Over 100 hours of gameplay with expansions",
      "Dynamic combat system with magic and swordplay"
    ]
  }
];

export default games;