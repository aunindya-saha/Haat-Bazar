import React from "react";

const Complaints = () => {
  const customerComplaints = [
    {
      name: "Rahim",
      message: "Spoiled product",
      refId: "PDH88801",
      action: "Take Action",
      amount: "৳60",
      rating: 88,
    },
    {
      name: "Karim",
      message: "Expired product",
      refId: "WUK68581",
      action: "Take Action",
      amount: "৳100",
      rating: 68,
    },
    {
      name: "Jabbar",
      message: "Delayed delivery",
      refId: "IUK167281",
      action: "Take Action",
      amount: "৳60",
      rating: 53,
    },
  ];

  const sellerComplaints = [
    {
      name: "Abul",
      message: "Out of stock",
      refId: "PDH88801",
      action: "Take Action",
      amount: "৳60",
      rating: 88,
    },
    {
      name: "Kashem",
      message: "Transportation issue",
      refId: "WUK68581",
      action: "Take Action",
      amount: "৳100",
      rating: 68,
    },
    {
      name: "Haider",
      message: "Financial issue",
      refId: "IUK167281",
      action: "Take Action",
      amount: "৳60",
      rating: 53,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-3xl font-bold text-black mb-5 text-center">
        Complaints
      </h1>

      {/* Customer Complaints */}
      <h2 className="text-2xl font-bold text-black mb-5 text-center">
        Customer Complaints
      </h2>
      <div style={{ overflowX: "auto", marginBottom: "20px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontFamily: "Arial, sans-serif",
            minWidth: "800px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2", color: "#000" }}>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Name
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Message
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Ref ID
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Action
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Amount
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {customerComplaints.map((complaint, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "" : "#f9f9f9",
                }}
              >
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.message}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.refId}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.action}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.amount}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Seller Complaints */}
      <h2 className="text-2xl font-bold text-black mt-28 mb-5 text-center">
        Seller Complaints
      </h2>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontFamily: "Arial, sans-serif",
            minWidth: "800px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2", color: "#000" }}>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Name
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Message
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Ref ID
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Action
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Amount
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {sellerComplaints.map((complaint, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "" : "#f9f9f9",
                }}
              >
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.message}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.refId}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.action}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.amount}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {complaint.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complaints;
