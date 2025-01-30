import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Black Ring",
    description: "Premium Black Ring",
    price: 329900,
    image: "https://img.joomcdn.net/b8511a59bdf9729c9e635c8ef5d1d29fcd108a4c_original.jpeg",
    category: "man",
  },

  {
    id: 2,
    name: "Men's Niche Titanium",
    description: "Men's Niche Titanium Steel Retro Fashion Stainless Rings",
    price: 4000000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1FqESZQRJ57q-Ye30Q8c-me47FoIUYOdALg&s",
    category: "man",
  },
  {
    id: 3,
    name: "SALTY Alpha Cross",
    description: "SALTY Alpha Cross Single Earring for Men & Boys",
    price: 179900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAki3POGHPVrdXSML-WfO-qrZBj5oGUAqavg&s",
    category: "man",
  },
  {
    id: 4,
    name: "Sage Cabochon",
    description: "Sage Cabochon Single Drop Earrings – crystalsandco",
    price: 229900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_G7v-AB7MoGJInHxV_OlqO20oXODNtcvZQ&s",
    category: "women",
  },
  {
    id: 5,
    name: "Pokemon Accessories Earrings",
    description: "pokemon accessories earrings clip type Fleur de Coquelicot single Eevee",
    price: 169900,
    image: "https://i.ebayimg.com/images/g/uj4AAOSwm~lkG-9n/s-l400.jpg",
    category: "women",
  },
  {
    id: 6,
    name: "Strength Single Wrap Bracelet",
    description: "Strength Single Wrap Bracelet",
    price: 129900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGpsvIk_BBhxe-s-JWJjXyh1JqbzGC7eQyQ&s",
    category: "man",
  },
  {
    id: 7,
    name: "Jardin Hydrangea Gold Single Pearl Earring",
    description: "Jardin Hydrangea Gold Single Pearl Earring ",
    price: 159900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYHEqhO47W38AN3F7r4F2WKVuPAv61cwG4w&s",
    category: "women",
  },
  {
    id: 8,
    name: "Kejing Tharaz Bead Bracelet",
    description: "Kejing Tharaz Bead Bracelet Accessories Single Circle (Color : 8mm)",
    price: 129900,
    image: "https://m.media-amazon.com/images/I/610RMZKRPDL._AC_UF894,1000_QL80_.jpg",
    category: "man",
  },
 
  {
    id: 9,
    name: "Stainless Steel Bike Chain Black",
    description: "High Quality Stainless Steel Bike Chain Black Hand Braided Leather Bracelet",
    price: 179900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVeeRAokwMrgymNiAm4WBU6Eea_20YAsOpdg&s",
    category: "man",
  },
  {
    id: 10,
    name: "Single-loop Beaded Life Tree Bracele",
    description: "Single-loop Beaded Life Tree Bracelet Hand-woven Elastic Rope Bracelets",
    price: 20000,
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/5219932/1.jpg?3514",
    category: "women",
  },
  {
    id: 11,
    name: "Bracelet Single Line Beaded",
    description: "Bracelet Single Line Beaded Pom Stylish Charms Bohemian Jewellery Unique Accessories",
    price: 179900,
    image: "https://i.etsystatic.com/12378831/r/il/4ef52d/1998958401/il_570xN.1998958401_9rp7.jpg",
    category: "women",
  },
  {
    id: 12,
    name: "Man Stainless Steel Bracelet",
    description: "High Quality Stainless Steel Bike Chain Black Hand Braided Leather Bracelet Single",
    price: 169900,
    image: "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/4856411/1.jpg?5713",
    category: "man",
  },
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
