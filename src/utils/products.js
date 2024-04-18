import productImg01 from "../Images/jacket.png";
import productImg02 from "../Images/helmet.png";
import productImg03 from "../Images/gloves.png";

import productImg04 from "../Images/boots.png";
import gloves from "../Images/gloves.png";

import boots from "../Images/boots.png";

import helmet from "../Images/helmet.png";
import jacket from "../Images/jacket.png";

export const SliderData = [
  {
      id: 1,
      title: "10% Off For Your First Shopping",
      desc: "Receive a special discount on our range of helmets, specially curated for your first shopping experience at our ecommerce store. Ride confidently knowing you've got top-quality gear at unbeatable prices!",
      cover: helmet,
  },
  {
      id: 2,
      title: "20% Off For Your First Shopping",
      desc: "Receive a special discount on our range of riding gloves, specially curated for your first shopping experience at our ecommerce store. Ride confidently knowing you've got top-quality gear at unbeatable prices!",
      cover: gloves,
  },
  {
      id: 3,
      title: "10% Off For Your First Shopping",
      desc: "Receive a special discount on our range of riding boots, specially curated for your first shopping experience at our ecommerce store. Ride confidently knowing you've got top-quality gear at unbeatable prices!",
      cover: boots,
  },
  {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Receive a special discount on our range of riding jackets, specially curated for your first shopping experience at our ecommerce store. Ride confidently knowing you've got top-quality gear at unbeatable prices!",
      cover: jacket,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Free Shipping across India.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Shop with confidence.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment",
    subtitle: "Rest assured.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: " Back Guarantee",
    subtitle: "100% money back guarantee",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Racing Leather Jacket",
    imgUrl: productImg01,
    category: "Jackets",
    price: 7500,
    discount: 20,
    shortDesc:
      "Premium leather jacket designed for motorcycle enthusiasts. Stay protected and stylish on the road.",
    description:
      "Crafted from high-quality leather, this jacket offers superior protection and comfort for riders. It features reinforced padding in critical areas, ventilation panels for breathability, and adjustable straps for a customized fit. Whether you're cruising down the highway or hitting the track, this jacket is the perfect companion for your ride.",
    reviews: [
      {
        rating: 4.7,
        text: "Excellent jacket, highly recommended for bikers!",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Full Face Helmet",
    imgUrl: productImg02,
    category: "Helmets",
    price: 3500,
    discount: 15,
    shortDesc:
      "Protect your head with this durable and stylish full-face helmet. DOT certified for safety.",
    description:
      "Engineered for maximum protection and comfort, this helmet features a lightweight yet sturdy construction, aerodynamic design for reduced wind resistance, and a plush interior lining for a snug fit. With its sleek and modern look, you'll ride with confidence knowing you're well-protected on the road.",
    reviews: [
      {
        rating: 4.8,
        text: "Great helmet, fits perfectly and feels secure.",
      },
      {
        rating: 4.8,
        text: "Excellent value for money, highly recommended!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "03",
    productName: "Waterproof Motorcycle Gloves",
    imgUrl: productImg03,
    category: "Gloves",
    price: 1800,
    discount: 10,
    shortDesc:
      "Keep your hands dry and protected with these waterproof motorcycle gloves.",
    description:
      "Constructed from durable materials and featuring a waterproof membrane, these gloves offer exceptional protection against the elements. They also feature reinforced palm and knuckle protection for added safety. With their adjustable wrist closure, they provide a secure and comfortable fit for long rides in any weather condition.",
    reviews: [
      {
        rating: 4.5,
        text: "Great gloves, kept my hands dry in heavy rain.",
      },
      {
        rating: 4.6,
        text: "Excellent quality, highly recommended for riders.",
      },
    ],
    avgRating: 4.6,
  },
  {
    id: "04",
    productName: "Motorcycle Riding Boots",
    imgUrl: productImg04,
    category: "Footwear",
    price: 4200,
    discount: 25,
    shortDesc:
      "Hit the road in style with these rugged and comfortable motorcycle riding boots.",
    description:
      "Crafted from premium leather and featuring a reinforced toe and heel, these boots provide superior protection and durability. They also offer excellent grip and traction, thanks to their oil-resistant rubber sole. With their adjustable straps and cushioned interior, they deliver a secure and comfortable fit for all-day wear.",
    reviews: [
      {
        rating: 4.7,
        text: "Fantastic boots, perfect for long rides.",
      },
      {
        rating: 4.8,
        text: "Great quality and comfort, exceeded my expectations.",
      },
    ],
    avgRating: 4.8,
  },
]

export const products = [
  {
    id: "01",
    productName: "Racing Leather Jacket",
    imgUrl: productImg01,
    category: "Jackets",
    price: 7500,
    discount: 20,
    shortDesc:
      "Premium leather jacket designed for motorcycle enthusiasts. Stay protected and stylish on the road.",
    description:
      "Crafted from high-quality leather, this jacket offers superior protection and comfort for riders. It features reinforced padding in critical areas, ventilation panels for breathability, and adjustable straps for a customized fit. Whether you're cruising down the highway or hitting the track, this jacket is the perfect companion for your ride.",
    reviews: [
      {
        rating: 4.7,
        text: "Excellent jacket, highly recommended for bikers!",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Full Face Helmet",
    imgUrl: productImg02,
    category: "Helmets",
    price: 3500,
    discount: 15,
    shortDesc:
      "Protect your head with this durable and stylish full-face helmet. DOT certified for safety.",
    description:
      "Engineered for maximum protection and comfort, this helmet features a lightweight yet sturdy construction, aerodynamic design for reduced wind resistance, and a plush interior lining for a snug fit. With its sleek and modern look, you'll ride with confidence knowing you're well-protected on the road.",
    reviews: [
      {
        rating: 4.8,
        text: "Great helmet, fits perfectly and feels secure.",
      },
      {
        rating: 4.8,
        text: "Excellent value for money, highly recommended!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "03",
    productName: "Waterproof Motorcycle Gloves",
    imgUrl: productImg03,
    category: "Gloves",
    price: 1800,
    discount: 10,
    shortDesc:
      "Keep your hands dry and protected with these waterproof motorcycle gloves.",
    description:
      "Constructed from durable materials and featuring a waterproof membrane, these gloves offer exceptional protection against the elements. They also feature reinforced palm and knuckle protection for added safety. With their adjustable wrist closure, they provide a secure and comfortable fit for long rides in any weather condition.",
    reviews: [
      {
        rating: 4.5,
        text: "Great gloves, kept my hands dry in heavy rain.",
      },
      {
        rating: 4.6,
        text: "Excellent quality, highly recommended for riders.",
      },
    ],
    avgRating: 4.6,
  },
  {
    id: "04",
    productName: "Motorcycle Riding Boots",
    imgUrl: productImg04,
    category: "Footwear",
    price: 4200,
    discount: 25,
    shortDesc:
      "Hit the road in style with these rugged and comfortable motorcycle riding boots.",
    description:
      "Crafted from premium leather and featuring a reinforced toe and heel, these boots provide superior protection and durability. They also offer excellent grip and traction, thanks to their oil-resistant rubber sole. With their adjustable straps and cushioned interior, they deliver a secure and comfortable fit for all-day wear.",
    reviews: [
      {
        rating: 4.7,
        text: "Fantastic boots, perfect for long rides.",
      },
      {
        rating: 4.8,
        text: "Great quality and comfort, exceeded my expectations.",
      },
    ],
    avgRating: 4.8,
  },

];
