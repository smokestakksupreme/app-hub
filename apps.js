/* ============================================================
   YOUR APPS — this is the only file you edit to add an app.
   Copy one block, change the fields, done.

   path     = folder (or file) relative to this hub.
              e.g. "apps/world-dossier/" or "apps/foo/index.html"
   accent   = any CSS color; sets the card's glow.
   tags     = words you can filter/search by.
   group    = which section the card sits in (see window.GROUPS below).
   featured = true → big hero card at the top (use for one app at a time).
   langs    = optional language badge, e.g. "EN · ES" or "4 languages".
   added    = YYYY-MM-DD. Cards added in the last 30 days get a NEW badge.
   updated  = optional YYYY-MM-DD. Shows an UPDATED badge for 30 days.
   ============================================================ */

// Section order + blurbs. A card whose group isn't listed here lands in "More".
window.GROUPS = [
  { id: "explore",    title: "Explore",            blurb: "The world, the cosmos, and everything in between." },
  { id: "accounting", title: "A Full Accounting",  blurb: "Histories told whole — including the parts usually left out." },
  { id: "life",       title: "Mind & Money",       blurb: "Practical tools for the long game." }
];

window.APPS = [
  {
    title: "True Shot Billiards",
    description: "Real-physics pool - eight, nine, ten and eleven ball, a ghost race and five timed challenges. Two players on one screen, or online with a room code.",
    path: "apps/tsb/",
    tags: ["game", "3d", "physics"],
    accent: "#c9a86a",
    featured: true,
    added: "2026-08-13"
  },
  {
    title: "World Dossier",
    description: "An interactive atlas — explore countries, geography, and stats in one map-driven view.",
    path: "apps/world-dossier/",
    tags: ["maps", "data"],
    group: "explore",
    accent: "#4aa8ff",
    added: "2026-07-08"
  },
  {
    title: "Heliocentric",
    description: "A 3D solar system ephemeris — spin the planets and see their real relative positions.",
    path: "apps/solar-system/",
    tags: ["3d", "space", "science"],
    group: "explore",
    accent: "#ff8a3d",
    added: "2026-07-08"
  },
  {
    title: "Timelines of Everything",
    description: "Scroll the history of the universe — six zoomable timelines from the Big Bang to now.",
    path: "apps/timelines/",
    tags: ["history", "science", "space"],
    group: "explore",
    langs: "4 languages",
    accent: "#e0b23e",
    added: "2026-07-12"
  },
  {
    title: "United States: A Full Accounting",
    description: "U.S. history from the first peoples to today — 297 events, including the ones usually left out.",
    path: "apps/us-timeline/",
    tags: ["history", "politics"],
    group: "accounting",
    langs: "4 languages",
    accent: "#5cc8ff",
    added: "2026-07-16"
  },
  {
    title: "Mexico: A Full Accounting",
    description: "Mexican history from the first peoples to today — 124 events, including the ones usually left out.",
    path: "apps/mexico-timeline/",
    tags: ["history", "politics"],
    group: "accounting",
    langs: "EN · ES",
    accent: "#1e9e57",
    added: "2026-07-16"
  },
  {
    title: "South America: A Full Accounting",
    description: "679 events across all twelve nations, from the first peoples to today — including the ones usually left out.",
    path: "apps/south-america-timeline/",
    tags: ["history", "politics"],
    group: "accounting",
    langs: "EN · ES",
    accent: "#7ee787",
    added: "2026-07-21"
  },
  {
    title: "Central America: A Full Accounting",
    description: "295 events across all seven nations, from the first peoples to today — including the ones usually left out.",
    path: "apps/central-america-timeline/",
    tags: ["history", "politics"],
    group: "accounting",
    langs: "EN · ES",
    accent: "#4dd0c4",
    added: "2026-07-22"
  },
  {
    title: "World Religions: A Full Accounting",
    description: "The four largest religions — 254 events, including conquest, forced conversion, schism and abuse — with branch trees of all 118 divisions, plus six more traditions.",
    path: "apps/religions-timeline.html",
    tags: ["history", "religion"],
    group: "accounting",
    accent: "#7aa7ff",
    added: "2026-07-30"
  },
  {
    title: "Stillpoint: Meditation & Breathwork",
    description: "12 meditation styles and 9 breathwork techniques — origins, methods, routines, and animated breath pacers.",
    path: "apps/meditation-breathwork.html",
    tags: ["wellness"],
    group: "life",
    langs: "4 languages",
    accent: "#7fb8a4",
    added: "2026-07-17"
  },
  {
    title: "Money Basics",
    description: "Nine things that decide whether money works for you or against you — stocks, bonds, retirement, options, crypto, annuities, insurance, real estate, and trusts. Plain English, with a deep dive on each.",
    path: "apps/money-basics.html",
    tags: ["finance"],
    group: "life",
    langs: "EN · ES",
    accent: "#4c8dff",
    added: "2026-07-29"
  },

  // --- copy the block below for each new app ---
  // {
  //   title: "My Next App",
  //   description: "One line about what it does.",
  //   path: "apps/my-next-app/",
  //   tags: ["tool"],
  //   group: "explore",
  //   langs: "EN · ES",
  //   accent: "#ff5d8f",
  //   added: "2026-07-08"
  // },
];
