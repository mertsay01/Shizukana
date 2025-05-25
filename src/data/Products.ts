import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Matcha",
    price: 29.99,
    images: {
      pouch: "/shizukana/img/matcha_pouch.webp",
      pouchnobg: "/shizukana/img/matcha_pouch_nobg.webp",
      bowl: "/shizukana/img/matcha_bowl.webp",
      combined: "/shizukana/img/matcha_combined.webp",
    },
    description: "Stone-ground green tea for traditional Japanese ceremonies.",
  },
  {
    id: 2,
    name: "Hojicha",
    price: 18.5,
    images: {
      pouch: "/shizukana/img/hojicha_pouch.webp",
      pouchnobg: "/shizukana/img/hojicha_pouch_nobg.webp",
      bowl: "/shizukana/img/hojicha_bowl.webp",
      combined: "/shizukana/img/hojicha_combined.webp",
    },
    description: "Roasted green tea with a rich, smoky flavor.",
  },
  {
    id: 3,
    name: "Kukicha",
    price: 29.99,
    images: {
      pouch: "/shizukana/img/kukicha_pouch.webp",
      pouchnobg: "/shizukana/img/kukicha_pouch_nobg.webp",
      bowl: "/shizukana/img/kukicha_bowl.webp",
      combined: "/shizukana/img/kukicha_combined.webp",
    },
    description: "Twig tea with a naturally sweet and nutty aroma.",
  },
  {
    id: 4,
    name: "Gyokuro",
    price: 18.5,
    images: {
      pouch: "/shizukana/img/gyokuro_pouch.webp",
      pouchnobg: "/shizukana/img/gyokuro_pouch_nobg.webp",
      bowl: "/shizukana/img/gyokuro_bowl.webp",
      combined: "/shizukana/img/gyokuro_combined.webp",
    },
    description: "Shade-grown luxury tea with deep umami taste.",
  },
  {
    id: 5,
    name: "Guricha",
    price: 21.0,
    images: {
      pouch: "/shizukana/img/guricha_pouch.webp",
      pouchnobg: "/shizukana/img/guricha_pouch_nobg.webp",
      bowl: "/shizukana/img/guricha_bowl.webp",
      combined: "/shizukana/img/guricha_combined.webp",
    },
    description: "A steamed, slightly curly green tea with mellow flavor.",
  },
  {
    id: 6,
    name: "Tamaryokucha",
    price: 28.0,
    images: {
      pouch: "/shizukana/img/tamaryokucha_pouch.webp",
      pouchnobg: "/shizukana/img/tamaryokucha_pouch_nobg.webp",
      bowl: "/shizukana/img/tamaryokucha_bowl.webp",
      combined: "/shizukana/img/tamaryokucha_combined.webp",
    },
    description: "A steamed, slightly curly green tea with mellow flavor.",
  },
];
