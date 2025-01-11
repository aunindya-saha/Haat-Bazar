import React, { useState } from "react";

const Complaints = () => {
  const [customerComplaints, setCustomerComplaints] = useState([
    { name: "Rahim", message: "Spoiled product", refId: "PDH88801", amount: "৳60", rating: 88, status: "Take Action" },
    { name: "Karim", message: "Expired product", refId: "WUK68581", amount: "৳100", rating: 68, status: "Take Action" },
    { name: "Jabbar", message: "Delayed delivery", refId: "IUK167281", amount: "৳60", rating: 53, status: "Take Action" },
    { name: "Fahim", message: "Wrong item delivered", refId: "XYZ12345", amount: "৳75", rating: 70, status: "Take Action" },
    { name: "Tanvir", message: "Package damaged", refId: "PKD56789", amount: "৳80", rating: 92, status: "Take Action" },
  ]);

  const [sellerComplaints, setSellerComplaints] = useState([
    { name: "Abul", message: "Out of stock", refId: "PDH88801", amount: "৳60", rating: 88, status: "Take Action" },
    { name: "Kashem", message: "Transportation issue", refId: "WUK68581", amount: "৳100", rating: 68, status: "Take Action" },
    { name: "Haider", message: "Financial issue", refId: "IUK167281", amount: "৳60", rating: 53, status: "Take Action" },
    { name: "Salim", message: "Late shipping", refId: "LMN54321", amount: "৳90", rating: 80, status: "Take Action" },
    { name: "Sajid", message: "Payment delay", refId: "ABC98765", amount: "৳110", rating: 65, status: "Take Action" },
  ]);

  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleTakeAction = (complaint, type) => {
    setSelectedComplaint({ ...complaint, type });
  };

  const handleAction = (action) => {
    if (selectedComplaint.type === "customer") {
      setCustomerComplaints((prev) =>
        prev.map((complaint) =>
          complaint.refId === selectedComplaint.refId
            ? action === "Dismiss"
              ? null
              : { ...complaint, status: action === "Warning" ? "Warned" : "Account Holded" }
            : complaint
        ).filter(Boolean)
      );
    } else {
      setSellerComplaints((prev) =>
        prev.map((complaint) =>
          complaint.refId === selectedComplaint.refId
            ? action === "Dismiss"
              ? null
              : { ...complaint, status: action === "Warning" ? "Warned" : "Account Holded" }
            : complaint
        ).filter(Boolean)
      );
    }
    setSelectedComplaint(null);
  };

  const renderTable = (complaints, type) => (
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: "800px" }}>
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2", color: "#000" }}>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Message</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Ref ID</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Amount</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Rating</th>
          <th style={{ border: "1px solid #ddd", padding: "10px" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {complaints.map((complaint, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "" : "#f9f9f9" }}>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>{complaint.name}</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>{complaint.message}</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>{complaint.refId}</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>{complaint.amount}</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>{complaint.rating}</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              <button
                style={{
                  backgroundColor:
                    complaint.status === "Warned" ? "yellow" : complaint.status === "Account Holded" ? "red" : "blue",
                  color: "#fff",
                  padding: "5px 10px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleTakeAction(complaint, type)}
              >
                {complaint.status}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-3xl font-bold text-black mb-5 text-center">Complaints</h1>

      {/* Customer Complaints */}
      <h2 className="text-2xl font-bold text-black mb-5 text-center">Customer Complaints</h2>
      <div style={{ overflowX: "auto", marginBottom: "20px" }}>
        {renderTable(customerComplaints, "customer")}
      </div>

      {/* Seller Complaints */}
      <h2 className="text-2xl font-bold text-black mt-28 mb-5 text-center">Seller Complaints</h2>
      <div style={{ overflowX: "auto" }}>{renderTable(sellerComplaints, "seller")}</div>

      {selectedComplaint && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "5px", width: "400px" }}>
            <h3>Complaint Details</h3>
            <p><b>Name:</b> {selectedComplaint.name}</p>
            <p><b>Message:</b> {selectedComplaint.message}</p>
            <p><b>Ref ID:</b> {selectedComplaint.refId}</p>
            <p><b>Amount:</b> {selectedComplaint.amount}</p>
            <p><b>Rating:</b> {selectedComplaint.rating}</p>
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
              <button onClick={() => handleAction("Dismiss")} style={{ backgroundColor: "gray", color: "#fff", padding: "5px 10px", border: "none" }}>
                Dismiss
              </button>
              <button onClick={() => handleAction("Warning")} style={{ backgroundColor: "yellow", color: "#000", padding: "5px 10px", border: "none" }}>
                Warning
              </button>
              <button onClick={() => handleAction("Account Holded")} style={{ backgroundColor: "red", color: "#fff", padding: "5px 10px", border: "none" }}>
                Account Hold
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaints;
