import React, { useEffect, useState } from "react";
function OpenProjectInventory() {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    status: ""
  });
  const API_URL = "https://op-pm-workshop.onrender.com/inventory";

  const fetchInventory = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setInventory(data);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        quantity: Number(formData.quantity)
      })
    });

    setFormData({
      name: "",
      category: "",
      quantity: "",
      status: ""
    });

    fetchInventory();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Inventory Dashboard</h2>

      {/* Inventory List */}
      <div>
        {inventory.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0"
            }}
          >
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Status: {item.status}</p>
          </div>
        ))}
      </div>

      <hr />

      {/* Form */}
      <h3>Add New Item</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
export default OpenProjectInventory;