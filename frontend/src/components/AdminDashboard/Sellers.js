import React from "react";

const Sellers = () => {
  const sellers = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive",
    },
    {
      name: "Marvin McKinney",
      company: "Tesla",
      phone: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active",
    },
    {
      name: "Jerome Bell",
      company: "Google",
      phone: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: "Active",
    },
    {
      name: "Kathryn Murphy",
      company: "Microsoft",
      phone: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      status: "Active",
    },
    {
      name: "Jacob Jones",
      company: "Yahoo",
      phone: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active",
    },
    {
      name: "Kristin Watson",
      company: "Facebook",
      phone: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: "Inactive",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-3xl font-bold text-black mb-5 text-center">Seller List</h1>
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
            <tr style={{ backgroundColor: "#f2f2f2", color:"#000" }}>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Customer Name
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Company
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Phone Number
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Email
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Country
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "" : "#f9f9f9",
                }}
              >
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {seller.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {seller.company}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {seller.phone}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {seller.email}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {seller.country}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {seller.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ textAlign: "right", marginTop: "10px", fontSize: "14px" }}>
        Showing data 1 to 8 of 256K entries
      </p>
    </div>
  );
};

export default Sellers;
