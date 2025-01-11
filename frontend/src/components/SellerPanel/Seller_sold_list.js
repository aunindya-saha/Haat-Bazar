import React, { useState } from "react";
import { jsPDF } from "jspdf";
import mango from '../../images/Seller/mango.jpg';

const SellerSoldList = () => {
  const [products] = useState([
    {
      id: "P - 1211",
      name: "Mango",
      quantity: 30,
      unitPrice: 10,
      totalPrice: 300,
      soldTo: "John Doe",
      soldDate: "2025-01-10",
      soldTime: "10:30 AM",
      image: "/path/to/mango.jpg",
      totalPayment: 300,
    },
    {
      id: "P - 1345",
      name: "Rice",
      quantity: 20,
      unitPrice: 20,
      totalPrice: 400,
      soldTo: "Jane Smith",
      soldDate: "2025-01-09",
      soldTime: "3:00 PM",
      image: "/path/to/rice.jpg",
      totalPayment: 400,
    },
    {
      id: "P - 2354",
      name: "Banana",
      quantity: 40,
      unitPrice: 10,
      totalPrice: 400,
      soldTo: "Michael Brown",
      soldDate: "2025-01-08",
      soldTime: "1:15 PM",
      image: "/path/to/banana.jpg",
      totalPayment: 400,
    },
    {
      id: "P - 2762",
      name: "Wheat",
      quantity: 70,
      unitPrice: 5,
      totalPrice: 350,
      soldTo: "Sarah Wilson",
      soldDate: "2025-01-07",
      soldTime: "5:45 PM",
      image: "/path/to/wheat.jpg",
      totalPayment: 350,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 20;

    // Title
    doc.setFontSize(16);
    doc.text("Sold Products List", 105, y, { align: "center" });
    y += 10;

    // Table Header
    doc.setFontSize(12);
    doc.setFont("bold");
    doc.text("Product ID", 10, y);
    doc.text("Name", 40, y);
    doc.text("Qty (kg)", 70, y);
    doc.text("Unit Price", 100, y);
    doc.text("Total Price", 130, y);
    doc.text("Sold To", 160, y);
    y += 7;

    // Table Content
    doc.setFont("normal");
    products.forEach((product) => {
      doc.text(product.id, 10, y);
      doc.text(product.name, 40, y);
      doc.text(product.quantity.toString(), 70, y);
      doc.text(`${product.unitPrice}`, 100, y);
      doc.text(`${product.totalPrice}`, 130, y);
      doc.text(product.soldTo, 160, y);
      y += 7;

      // Add new page if content exceeds the page height
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    // Save the PDF
    doc.save("sold-products-list.pdf");
  };

  const filteredProducts = [...products]
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "ASC"
        ? a.unitPrice - b.unitPrice
        : sortOrder === "DESC"
        ? b.unitPrice - a.unitPrice
        : 0
    );

  return (
    <div className="container mx-auto mt-0 lg:mt-[100px]">
      <div className="border-t-2 border-b-2 border-gray-300 border-dashed p-6 lg:p-9 text-center">
        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Your Sold Products List!</h2>
        <br />

        {/* Search input */}
        <form className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
        <br />

        {/* Sort dropdown */}
        <form className="max-w-sm mx-auto">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort Your Products</option>
            <option value="ASC">Ascending Order</option>
            <option value="DESC">Descending Order</option>
          </select>
        </form>
        <br />

        {/* Product table */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Amount (kg)</th>
                <th>Unit Price(৳)</th>
                <th>Total Price(৳)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.totalPrice}</td>
                  <td>
                    <button
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:from-green-500 hover:to-blue-500 transition-colors"
                      onClick={() => handleShowDetails(product)}
                    >
                      Show
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />

        {/* PDF button */}
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-warning"
          onClick={generatePDF}
        >
          Generate PDF
        </button>
      </div>

      {/* Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4">Product Details</h3>
            <img src={mango} alt={selectedProduct.name} className="w-full h-70 w-70 object-cover mb-8 rounded" />
            <p><strong>Sold To:</strong> {selectedProduct.soldTo}</p>
            <p><strong>Sold Date:</strong> {selectedProduct.soldDate}</p>
            <p><strong>Sold Time:</strong> {selectedProduct.soldTime}</p>
            <p><strong>Total Payment:</strong> ৳{selectedProduct.totalPayment}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-500 transition-colors"
              onClick={closePopup}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerSoldList;
