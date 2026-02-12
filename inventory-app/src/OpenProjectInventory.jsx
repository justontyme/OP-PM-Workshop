import React from "react";
function OpenProjectInventory() {
    const inventory = [
  {
    id: 1,
    name: "Arduino Kit",
    category: "Hardware",
    quantity: 5,
    status: "Available"
  },
  {
    id: 2,
    name: "Figma License",
    category: "Software",
    quantity: 20,
    status: "Available"
  }
];
return (
    <div className="inventory-container">
      <h2>Open Project Inventory</h2>

      <div className="card-grid">
        {inventory.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Status:</strong> {item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OpenProjectInventory;