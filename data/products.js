export const products = [
  {
    id: "1",
    slug: "product-1",
    title: "Diamond III Starter Pack",
    category: "budget",
    level: "59",
    rank: "Diamond III",
    skins: "12 Weapon Skins",
    specs: ["Famas Evo Lvl 2", "Alok, K, Chrono"],
    price: 699,
    image: "/assets/criminal.png",
    badge: "Budget",
    badgeClass: ""
  },
  {
    id: "2",
    slug: "product-2",
    title: "Heroic Cobra MP40",
    category: "budget",
    level: "63",
    rank: "Heroic II",
    skins: "25+ Skins, 5 Emotes",
    specs: ["Cobra MP40 Evo Lvl 1", "25+ Skins, 5 Emotes"],
    price: 1250,
    image: "/assets/cobra.png",
    badge: "Best Value",
    badgeClass: ""
  },
  {
    id: "3",
    slug: "product-3",
    title: "Golden Demon GM",
    category: "rank",
    level: "69",
    rank: "GM S35",
    skins: "Draco AK-47 Maxed",
    specs: ["Draco AK-47 Maxed", "Golden Demon Mask"],
    price: 3800,
    image: "/assets/gold_demon.png",
    badge: "Grandmaster",
    badgeClass: "badge-gold"
  },
  {
    id: "4",
    slug: "product-4",
    title: "Dragon Samurai",
    category: "rare",
    level: "72",
    rank: "Heroic IV",
    skins: "UMP Booyah Maxed",
    specs: ["UMP Booyah Maxed", "Dragon Samurai, S12 Pass"],
    price: 7499,
    image: "/assets/dragon_samurai.png",
    badge: "Rare",
    badgeClass: "badge-rare"
  },
  {
    id: "5",
    slug: "product-5",
    title: "OG Sakura Bundle",
    category: "premium",
    level: "77",
    rank: "Heroic V",
    skins: "5 Maxed Evos (Cobra/Draco)",
    specs: ["5 Maxed Evos (Cobra/Draco)", "Sakura + Red Criminal"],
    price: 18500,
    image: "/assets/sakura.png",
    badge: "OG S1",
    badgeClass: "badge-premium"
  },
  {
    id: "showcase",
    slug: "product-showcase",
    title: "Sakura + Hip-Hop Bundle",
    category: "all",
    level: "76",
    rank: "Grandmaster",
    skins: "6 Maxed Evo Guns",
    specs: ["6 Maxed Evo Guns"],
    price: 14999,
    image: "/assets/sakura.png",
    badge: "OG S1+S2",
    badgeClass: "badge-premium"
  }
];

export const WA_PHONE = "918102098935";

export function getWhatsAppLink(message = "") {
  return message
    ? `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WA_PHONE}`;
}
