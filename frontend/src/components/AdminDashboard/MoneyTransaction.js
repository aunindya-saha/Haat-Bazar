import React from "react";

const MoneyTransaction = () => {
  const transactions = [
    {
      refId: "456789356",
      transactionDate: "Sep 9, 2024, 04:30pm",
      from: "fadel@email.com",
      type: "Income",
      amount: "+$5,670.00",
      status: "Pending",
    },
    {
      refId: "456789356",
      transactionDate: "Sep 8, 2024, 03:13pm",
      from: "Wise - 5466xxxx",
      type: "Savings",
      amount: "+$15,000.00",
      status: "Completed",
    },
    {
      refId: "456789356",
      transactionDate: "Sep 7, 2024, 1:00pm",
      from: "Paypal - 3345xxxx",
      type: "Expenses",
      amount: "-$3,456.00",
      status: "Cancelled",
    },
    {
      refId: "456789356",
      transactionDate: "Sep 6, 2024, 07:00am",
      from: "kikikarisma@email.com",
      type: "Income",
      amount: "+$30,000.00",
      status: "Pending",
    },
    {
      refId: "456789356",
      transactionDate: "Sep 8, 2024, 03:13pm",
      from: "Wise - 5466xxxx",
      type: "Savings",
      amount: "+$8,000.00",
      status: "Completed",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-3xl font-bold text-black mb-5 text-center">
        Money Transactions
      </h1>
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
                Ref ID
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Transaction Date
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                From
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Type
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Amount
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "" : "#f9f9f9",
                }}
              >
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {transaction.refId}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {transaction.transactionDate}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {transaction.from}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {transaction.type}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {transaction.amount}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoneyTransaction;
