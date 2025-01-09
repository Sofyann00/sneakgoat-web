import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Air Jordan 1 Retro High OG 'Shadow' 2018",
    description: "Premium running shoes with responsive Boost cushioning",
    price: 3299000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
    category: "Running",
  },

  {
    id: 2,
    name: "Air Jordan 4 Retro OG GS 'Bred' 2019",
    description: "Elite racing shoes for maximum performance",
    price: 3899000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png",
    category: "Running",
  },
  {
    id: 3,
    name: "Air Jordan 11 Retro 'Space Jam' 2016",
    description: "Retro basketball-inspired casual shoes",
    price: 1799000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png",
    category: "Lifestyle",
  },
  {
    id: 4,
    name: "Air Jordan 11 Retro 'Win Like '96'",
    description: "Versatile daily training shoes with Boost cushioning",
    price: 2299000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png",
    category: "Running",
  },
  {
    id: 5,
    name: "Air Jordan 11 Retro 'Legend Blue' 2014",
    description: "Timeless suede sneakers with vintage appeal",
    price: 1699000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/010/223/048/original/13607_00.png.png",
    category: "Lifestyle",
  },
  {
    id: 6,
    name: "Wmns Air Jordan 1 Retro High OG 'Twist'",
    description: "Classic tennis-inspired casual sneakers",
    price: 1599000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/021/545/481/original/509480_00.png.png",
    category: "Lifestyle",
  },
  {
    id: 7,
    name: "Air Jordan 1 Mid 'Multicolor Swoosh Black'",
    description: "Classic tennis-inspired white leather sneakers",
    price: 1599000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/012/910/690/original/554724_065.png.png",
    category: "Lifestyle",
  },
  {
    id: 8,
    name: "Air Jordan 4 Retro OG 'Bred' 2019",
    description: "Entry-level running shoes for daily use",
    price: 1299000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/020/806/485/original/461782_00.png.png",
    category: "Running",
  },
 
  {
    id: 9,
    name: "Air Jordan 6 Retro 'Infrared' 2019",
    description: "Classic suede sneakers with timeless style",
    price: 1799000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/018/675/311/original/464372_00.png.png",
    category: "Lifestyle",
  },
  {
    id: 10,
    name: "Wmns Air Jordan 12 Retro 'Reptile'",
    description: "Chunky retro-inspired lifestyle sneakers",
    price: 2099000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/021/042/384/original/500924_00.png.png",
    category: "Lifestyle",
  },
  {
    id: 11,
    name: "Air Jordan 4 Retro 'Laser'",
    description: "Classic handball shoes with street style",
    price: 1799000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/018/071/547/original/479524_00.png.png",
    category: "Lifestyle",
  },
  {
    id: 12,
    name: "OFF-WHITE x Air Jordan 1 Retro High OG 'UNC'",
    description: "Retro-inspired suede sneakers with modern comfort",
    price: 1699000,
    image: "https://image.goat.com/375/attachments/product_template_pictures/images/012/219/518/original/335047_00.png.png",
    category: "Lifestyle",
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
