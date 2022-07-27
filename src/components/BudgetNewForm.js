import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function BudgetNewForm() {
  const [budget, setBudget] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });
  const navigate = useNavigate();

  const addBudget = () => {
    axios
      .post(`${API}/transactions`, budget)
      .then((res) => {
        navigate(`/transactions`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBudget();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          id="date"
          value={budget.date}
          type="text"
          onChange={handleTextChange}
          placeholder="date"
          required
        />

        <label>Name</label>
        <input
          id="item_name"
          value={budget.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Item Name"
          required
        />

        <label>Amount</label>
        <input
          id="amount"
          value={budget.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="Amount"
          required
        />
        <label>From</label>
        <input
          id="from"
          value={budget.from}
          type="text"
          onChange={handleTextChange}
          placeholder="From"
          required
        />
        
        <label>Category</label>
        <input
          id="category"
          value={budget.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Category"
          required
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
