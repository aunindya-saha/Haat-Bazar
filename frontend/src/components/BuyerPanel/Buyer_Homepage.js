// components/BuyerHomePageBody.jsx
import React from "react";

const BuyerHomePageBody = () => {
  return (
    <div className="bg-gray-100">
    

      {/* Categories Section */}
      <section className="py-10 container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Fruits", image: "/images/fruits.jpg" },
            { name: "Vegetables", image: "/images/vegetables.jpg" },
            { name: "Grains", image: "../../images/Buyer/wheat.jpg" },
            { name: "Dairy", image: "/images/dairy.jpg" },
          ].map((category) => (
            <div
              key={category.name}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover rounded-t-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-10 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Featured Products
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Organic Mango", price: "৳100/kg", image: "/images/mango.jpg" },
            { name: "Fresh Tomatoes", price: "৳60/kg", image: "/images/tomatoes.jpg" },
            { name: "Brown Rice", price: "৳80/kg", image: "/images/rice.jpg" },
          ].map((product) => (
            <div
              key={product.name}
              className="bg-gray-100 shadow-md rounded-lg p-4 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-green-700 font-bold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-10 bg-green-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to shop?</h2>
        <p className="text-lg mb-6">
          Browse our extensive collection of fresh agricultural products now.
        </p>
        <a
          href="/buyer/products"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-lg"
        >
          Start Shopping
        </a>
      </section>
    </div>
  );
};

export default BuyerHomePageBody;
