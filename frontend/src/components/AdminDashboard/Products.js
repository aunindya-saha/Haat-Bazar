import React, { useState } from "react";

const products = [
  { id: 1, name: "Carrot", price: 10, category: "Vegetable", vendor: "Vendor A", sales: 50, image: "https://www.buymybasket.com.bd/image/carrot.jpg", description: "Fresh orange carrots." },
  { id: 2, name: "Cucumber", price: 15, category: "Vegetable", vendor: "Vendor B", sales: 30, image: "https://www.buymybasket.com.bd/image/cucumber.jpg", description: "Crunchy green cucumbers." },
  { id: 3, name: "Broccoli", price: 25, category: "Vegetable", vendor: "Vendor C", sales: 20, image: "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/6615440_cabbage.png", description: "Healthy green broccoli." },
  { id: 4, name: "Potato", price: 8, category: "Vegetable", vendor: "Vendor D", sales: 100, image: "https://www.buymybasket.com.bd/image/potato.jpg", description: "Premium-grade potatoes." },
  { id: 5, name: "Spinach", price: 12, category: "Vegetable", vendor: "Vendor E", sales: 40, image: "https://www.buymybasket.com.bd/image/spinach.jpg", description: "Organic fresh spinach." },
  { id: 6, name: "Tomato", price: 10, category: "Vegetable", vendor: "Vendor F", sales: 80, image: "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/1334801_mustard%20leaves.png", description: "Ripe and juicy tomatoes." },
  { id: 7, name: "Eggplant", price: 20, category: "Vegetable", vendor: "Vendor G", sales: 25, image: "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/1334801_mustard%20leaves.png", description: "Purple eggplants for your dishes." },
  { id: 8, name: "Chicken Feed", price: 50, category: "Feed", vendor: "Vendor H", sales: 10, image: "https://via.placeholder.com/150?text=Chicken+Feed", description: "High-nutrition poultry feed." },
  { id: 9, name: "Goat Feed", price: 40, category: "Feed", vendor: "Vendor I", sales: 15, image: "https://via.placeholder.com/150?text=Goat+Feed", description: "Premium-quality goat feed." },
  { id: 10, name: "Cow Feed", price: 45, category: "Feed", vendor: "Vendor J", sales: 8, image: "https://via.placeholder.com/150?text=Cow+Feed", description: "Healthy feed for cattle." },
  { id: 11, name: "Duck Feed", price: 35, category: "Feed", vendor: "Vendor K", sales: 12, image: "https://via.placeholder.com/150?text=Duck+Feed", description: "Specialized feed for ducks." },
  { id: 12, name: "Lettuce", price: 10, category: "Vegetable", vendor: "Vendor L", sales: 55, image: "https://www.buymybasket.com.bd/image/lettuce.jpg", description: "Fresh green lettuce." },
  { id: 13, name: "Garlic", price: 18, category: "Vegetable", vendor: "Vendor M", sales: 70, image: "https://www.buymybasket.com.bd/image/garlic.jpg", description: "Aromatic garlic cloves." },
  { id: 14, name: "Onion", price: 15, category: "Vegetable", vendor: "Vendor N", sales: 90, image: "https://www.buymybasket.com.bd/image/onion.jpg", description: "Red onions with sharp flavor." },
  { id: 15, name: "Green Chili", price: 8, category: "Vegetable", vendor: "Vendor O", sales: 60, image: "https://www.buymybasket.com.bd/image/green_chili.jpg", description: "Spicy green chilies." },
  { id: 16, name: "Beetroot", price: 20, category: "Vegetable", vendor: "Vendor P", sales: 35, image: "https://www.buymybasket.com.bd/image/beetroot.jpg", description: "Fresh and vibrant beetroots." },
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
        <p className="text-gray-500">Vendor: {product.vendor}</p>
        <p className="text-gray-500">Sales: {product.sales}</p>
        <p className="text-green-600 font-bold">${product.price}</p>
      </div>
    </div>
  );
};

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(100);
  const [sortBySales, setSortBySales] = useState(false);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === "start") {
      setStartPrice(Number(value));
      setPriceRange([Number(value), priceRange[1]]);
    } else {
      setEndPrice(Number(value));
      setPriceRange([priceRange[0], Number(value)]);
    }
  };

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    if (e.target.name === "start") {
      setStartPrice(value);
      setPriceRange([value, priceRange[1]]);
    } else {
      setEndPrice(value);
      setPriceRange([priceRange[0], value]);
    }
  };

  const handleSortBySales = () => {
    setSortBySales(!sortBySales);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => (sortBySales ? b.sales - a.sales : a.id - b.id));

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="start-price">Start Price:</label>
          <input
            type="number"
            id="start-price"
            name="start"
            value={startPrice}
            onChange={handlePriceChange}
            className="border rounded px-2 py-1 w-20"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="end-price">End Price:</label>
          <input
            type="number"
            id="end-price"
            name="end"
            value={endPrice}
            onChange={handlePriceChange}
            className="border rounded px-2 py-1 w-20"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="start-slider">Price Range:</label>
          <input
            type="range"
            id="start-slider"
            name="start"
            min="0"
            max="100"
            value={startPrice}
            onChange={handleSliderChange}
            className="w-32"
          />
          <input
            type="range"
            id="end-slider"
            name="end"
            min="0"
            max="100"
            value={endPrice}
            onChange={handleSliderChange}
            className="w-32"
          />
        </div>
        <div className="absolute right-12">
        <button
          onClick={handleSortBySales}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
        >
          Sort by Sales
        </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
