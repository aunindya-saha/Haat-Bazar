import React from "react";

const products = [
  {
    id: 1,
    name: "Carrot",
    price: "$10",
    image: "https://www.buymybasket.com.bd/image/carrot.jpg",
    description: "Fresh orange carrots.",
  },
  {
    id: 2,
    name: "Cucumber",
    price: "$15",
    image: "https://www.buymybasket.com.bd/image/cucumber.jpg",
    description: "Crunchy green cucumbers.",
  },
  {
    id: 3,
    name: "Broccoli",
    price: "$25",
    image: "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/6615440_cabbage.png",
    description: "Healthy green broccoli.",
  },
  {
    id: 4,
    name: "Potato",
    price: "$8",
    image: "https://www.buymybasket.com.bd/image/potato.jpg",
    description: "Premium-grade potatoes.",
  },
  {
    id: 5,
    name: "Spinach",
    price: "$12",
    image: "https://www.buymybasket.com.bd/image/spinach.jpg",
    description: "Organic fresh spinach.",
  },
  {
    id: 6,
    name: "Tomato",
    price: "$10",
    image: "data:image/jpeg;base64,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",
    description: "Ripe and juicy tomatoes.",
  },
  {
    id: 7,
    name: "Eggplant",
    price: "$20",
    image: "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/1334801_mustard%20leaves.png",
    description: "Purple eggplants for your dishes.",
  },
  {
    id: 8,
    name: "Chicken Feed",
    price: "$50",
    image: "https://via.placeholder.com/150?text=Chicken+Feed",
    description: "High-nutrition poultry feed.",
  },
  {
    id: 9,
    name: "Goat Feed",
    price: "$40",
    image: "https://via.placeholder.com/150?text=Goat+Feed",
    description: "Premium-quality goat feed.",
  },
  {
    id: 10,
    name: "Cow Feed",
    price: "$45",
    image: "https://via.placeholder.com/150?text=Cow+Feed",
    description: "Healthy feed for cattle.",
  },
  {
    id: 11,
    name: "Duck Feed",
    price: "$35",
    image: "https://via.placeholder.com/150?text=Duck+Feed",
    description: "Specialized feed for ducks.",
  },
  {
    id: 12,
    name: "Lettuce",
    price: "$10",
    image: "https://www.buymybasket.com.bd/image/lettuce.jpg",
    description: "Fresh green lettuce.",
  },
  {
    id: 13,
    name: "Garlic",
    price: "$18",
    image: "https://www.buymybasket.com.bd/image/garlic.jpg",
    description: "Aromatic garlic cloves.",
  },
  {
    id: 14,
    name: "Onion",
    price: "$15",
    image: "https://www.buymybasket.com.bd/image/onion.jpg",
    description: "Red onions with sharp flavor.",
  },
  {
    id: 15,
    name: "Green Chili",
    price: "$8",
    image: "https://www.buymybasket.com.bd/image/green_chili.jpg",
    description: "Spicy green chilies.",
  },
  {
    id: 16,
    name: "Beetroot",
    price: "$20",
    image: "https://www.buymybasket.com.bd/image/beetroot.jpg",
    description: "Fresh and vibrant beetroots.",
  },
];


const ProductCard = ({ product }) => {
  return (
    <div className="flex border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="w-1/3">
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
      </div>
      <div className="w-2/3 pl-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-green-600 font-bold">{product.price}</p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;