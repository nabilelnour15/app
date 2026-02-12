import { 
  Globe, Landmark, Building2
} from 'lucide-react';

export const aboutEssence = {
  geography: {
    title: "The Unique Essence of Alexandria",
    subtitle: "Principal Port & Second City",
    description: "Alexandria occupies a singular position in Egypt's urban geography as the nation's principal Mediterranean port and second-largest city, with a metropolitan population of approximately 5 million residents.",
    location: "Located roughly 225 kilometers northwest of Cairo at the western edge of the Nile Delta, the city stretches across 30 kilometers of Mediterranean coastline between Agamy and Abu Qeir.",
    strategy: "The site's selection by Alexander the Great in April 331 BCE reflected exceptional strategic foresight. The natural harbor, protected by the offshore island of Pharos, offered superior anchorage while avoiding the silting problems that plagued river-mouth ports.",
    character: {
      title: "Mediterranean Character",
      description: "Alexandria's Mediterranean identity manifests in multiple dimensions. Climatically, the city enjoys moderated temperatures and higher humidity than the desert interior, with winter rainfall sufficient that locals joke about owning umbrellas—a rarity in Egypt.",
      architecture: "Architecturally, Alexandria preserves extensive evidence of its European-influenced past. The belle époque apartment buildings, Rococo villas, and Art Deco structures of the downtown area create streetscapes that would appear more at home in Marseille or Naples than in Cairo."
    }
  },
  comparison: {
    title: "Alexandria vs. Nile Cities",
    rows: [
      { dim: "Climate", alex: "Mediterranean: mild, humid, winter rainfall", nile: "Desert continental: extreme heat, minimal rain" },
      { dim: "Architecture", alex: "European-influenced: balconies, verandas", nile: "Islamic/traditional: courtyards, inward-oriented" },
      { dim: "Public Space", alex: "Corniche (waterfront promenade)", nile: "Nile Corniche (highway/privatized)" },
      { dim: "Cuisine", alex: "Seafood, Mediterranean ingredients", nile: "River fish, legumes, agricultural products" }
    ]
  }
};

export const timelineEvents = [
  { year: "331 BCE", title: "Foundation by Alexander the Great", desc: "Inspired by Homer's dream, laid out by Dinocrates of Rhodes" },
  { year: "323–30 BCE", title: "Ptolemaic Glory Period", desc: "Library, Lighthouse, Mouseion established. Population peaks at 500k–1M" },
  { year: "30 BCE", title: "Roman Annexation", desc: "Egypt becomes imperial province. Alexandria continues as commercial capital" },
  { year: "641 CE", title: "Islamic Transformation", desc: "Arab conquest introduces new religious frameworks. Qaitbay built on Lighthouse ruins" },
  { year: "19th–20th Century", title: "European Influence & Cosmopolitan Era", desc: "Belle époque architecture, foreign communities (40% of population by 1940s)" },
  { year: "2002–Present", title: "Revival and Contemporary Renaissance", desc: "Bibliotheca Alexandrina inaugurated, 2025 Culture Capital designation" }
];

export const civilizationalLayers = [
  { 
    period: "Foundation & Hellenistic Glory", 
    dates: "331–30 BCE", 
    details: [
      { subtitle: "Alexander's Vision", content: "Inspired by a dream of Homer, suggesting the location for one of antiquity's greatest cities." },
      { subtitle: "Ptolemaic Investment", content: "Preeminent center of learning with 400k-700k scrolls and the Pharos Lighthouse." },
      { subtitle: "Multicultural Metropolis", content: "Peak population of 500k-1M Greeks, Egyptians, Jews, Syrians, and Romans." }
    ],
    icon: Globe 
  },
  { 
    period: "Roman Egypt and Late Antiquity", 
    dates: "30 BCE–641 CE", 
    details: [
      { subtitle: "Roman Annexation", content: "Imperial province capital and the Mediterranean's premier commercial port." },
      { subtitle: "Early Christian Center", content: "One of five patriarchates; Catechetical School developed innovative biblical interpretations." },
      { subtitle: "Theological Development", content: "Controversies that shaped global Christianity; the death of Hypatia in 415 CE." }
    ],
    icon: Landmark 
  },
  { 
    period: "Islamic Era to Contemporary Revival", 
    dates: "641 CE – Present", 
    details: [
      { subtitle: "Islamic Transformation", content: "Qaitbay Citadel (1477) built on Lighthouse ruins, creating material continuity." },
      { subtitle: "European Influence", content: "Belle époque architecture; 40% foreign-born population by the 1940s." },
      { subtitle: "Contemporary Revival", content: "Bibliotheca Alexandrina (2002) and the 2025 Mediterranean Capital of Culture designation." }
    ],
    icon: Building2 
  }
];

export const summaryData = {
  title: "Alexandria: Timeless Pearl of the Mediterranean",
  description: "From Alexander's visionary foundation to its contemporary revival as a Mediterranean Capital of Culture, Alexandria remains Egypt's most distinctive urban treasure—a city where ancient wisdom meets modern creativity, where Mediterranean breezes carry the echoes of twenty-five centuries of civilization.",
  pillars: [
    { title: "Ancient Wisdom", desc: "Reviving the legacy of the Great Library for contemporary scholarship" },
    { title: "Mediterranean Spirit", desc: "Unique coastal identity distinct from Egypt's Nile-centered civilization" },
    { title: "Global Dialogue", desc: "2025 Mediterranean Capital of Culture connecting civilizations" }
  ]
};

export const landmarksData = {
  ancient: [
    {
      name: "Great Library of Alexandria",
      legacy: "Modern Bibliotheca Alexandrina (2002) explicitly revives this heritage with capacity for 8 million volumes.",
      desc: "The ancient world's premier center of knowledge, with collections of 400,000 to 700,000 scrolls.",
      image: "/images/feature-library.jpg"
    },
    {
      name: "Lighthouse of Alexandria (Pharos)",
      legacy: "One of the Seven Wonders, standing 100-140 meters high. Recent archaeology recovered 22 massive stone blocks.",
      desc: "Practical maritime navigation combined with monumental architecture.",
      image: "/images/feature-citadel.jpg"
    },
    {
      name: "Cleopatra's Palace",
      legacy: "Submerged royal quarter discovered in the 1990s. 2.5 sq km of underwater archaeological zone.",
      desc: "Exceptional preservation conditions with granite columns retaining tool marks.",
      image: "/images/blog-archaeology.jpg"
    }
  ],
  monuments: [
    {
      name: "Pompey's Pillar",
      stats: "26.85m red granite column. Erected for Emperor Diocletian in 297 CE.",
      fact: "Monolith quarried at Aswan, representing extraordinary logistical achievement.",
      image: "/images/hero-bg.jpg"
    },
    {
      name: "Catacombs of Kom El Shoqafa",
      stats: "Largest Roman burial site in Egypt (2nd century CE). Reaches depths of 35 meters.",
      fact: "Unique fusion of styles: Anubis in Roman military costume.",
      image: "/images/blog-archaeology.jpg"
    }
  ],
  fortifications: [
    {
      name: "Citadel of Qaitbay",
      origin: "Built 1477–1479 on the ruins of the Lighthouse, reusing its stones.",
      function: "Maritime museum with panoramic views.",
      image: "/images/feature-citadel.jpg"
    },
    {
      name: "El-Mursi Abu'l-'Abbas Mosque",
      origin: "14th-century Sufi shrine with a 73-meter minaret.",
      function: "Major Friday prayer destination and site for Sufi ceremonies.",
      image: "/images/service-visitors.jpg"
    }
  ]
};

export const modernInfrastructure = {
  bibliotheca: {
    title: "The Bibliotheca Alexandrina",
    specs: [
      { label: "Collection capacity", value: "8 million volumes" },
      { label: "Reading room", value: "2,500 readers" },
      { label: "Museums", value: "4 specialized" },
      { label: "Annual visits", value: "1.5 million+" }
    ],
    symbol: "The Manuscript Museum holds a copy of Aristotle's Constitution of Athens scroll fragment."
  },
  corniche: {
    title: "The Corniche",
    length: "12-mile (19km) waterfront promenade.",
    social: "Historic cafés like Athineos, Trianon, and Délices maintain social life along the waterfront."
  },
  montaza: {
    title: "Montaza Palace & Gardens",
    role: "19th-century royal hunting lodge, now Alexandria's largest public park.",
    gardens: "Extensive tree cover, formal gardens, and beach access offering urban respite."
  }
};

export const museumRegistry = [
  { name: "Alexandria National Museum", focus: "Pharaonic to modern periods across three floors. Housed in 1928 Al-Saad Bassili Palace.", highlights: "Tanagra figurines, mummy room." },
  { name: "Royal Jewelry Museum", focus: "Regalia from the Muhammad Ali dynasty in Princess Fatma Al-Zahra's palace.", highlights: "Jewelry from 150 years of rule, European diplomatic gifts." },
  { name: "Graeco-Roman Museum", focus: "Renovated in 2023, dedicated specifically to Hellenistic and Roman art.", highlights: "Fayum mummy portraits (ancient portraiture)." }
];

export const culture2025 = {
  title: "2025 Mediterranean Capital of Culture",
  themes: ["Youth & Digitalization", "Creative Industries", "Bilateral Cooperation"],
  tirana: "Partnership with Tirana, Albania focus on Ottoman, European, and nationalist influences.",
  initiatives: [
    "Digital content creation workshops",
    "Innovation hackathons",
    "Digital art exhibitions",
    "Mediterranean networking"
  ]
};

export const culinaryTraditions = {
  seafood: "Daily catch from the Mediterranean and Lake Mariout combines Egyptian, Greek, and Levantine techniques.",
  dishes: [
    { name: "Sayadieh", desc: "Spiced rice with caramelized onions and fish." },
    { name: "Shrimp Tagine", desc: "Shrimp in herb-infused tomato sauce." },
    { name: "Grilled Mullet (Bouri)", desc: "Simply grilled whole fish with lemon." },
    { name: "Calamari Meshwi", desc: "Grilled squid with garlic and herbs." }
  ]
};

export const integrationData = {
  architectural: [
    { district: "Downtown", style: "Neoclassical, Art Nouveau, Art Deco" },
    { district: "Anfushi", style: "Islamic monuments, vernacular housing" },
    { district: "Eastern", style: "Modernist towers, resort development" }
  ],
  archaeology: {
    quote: "\"Old Alexandria is just below your feet.\"",
    methods: [
      { label: "Side-scan sonar", desc: "Seafloor mapping" },
      { label: "Magnetometry", desc: "Ferrous materials detection" },
      { label: "ROVs", desc: "Visual survey" },
      { label: "Photogrammetry", desc: "3D modeling" }
    ]
  }
};
