const addToPizza = [
  {
    id: 1,
    title: "Кетчуп",
    image: "/images/additional/1.jpg",
    price: 10,
  },
  {
    id: 2,
    title: "Кетчуп",
    image: "/images/additional/1.jpg",
    price: 10,
  },
  {
    id: 3,
    title: "Кетчуп",
    image: "/images/additional/1.jpg",
    price: 10,
  },
  {
    id: 4,
    title: "Кетчуп",
    image: "/images/additional/1.jpg",
    price: 10,
  },
  {
    id: 5,
    title: "Кетчуп",
    image: "/images/additional/1.jpg",
    price: 10,
  },
];

export const pizzas = [
  {
    id: "pz_1",
    category: "pizza",
    title: "Піцца 1",
    description:
      "Опис піцци Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    size: { s1: "25 см", s2: "30 см", s3: "35 см" },
    doughThickness: { think: "Тонка", traditional: "Традиційна" },
    weight: { w1: "400 г", w2: "600 г", w3: "770 г" },
    additionalGoods: addToPizza,
    images: ["/images/products/pizzas/id_1_s1_trad.jpg"],
    oldPrice: 250,
    price: 199,
  },
];
