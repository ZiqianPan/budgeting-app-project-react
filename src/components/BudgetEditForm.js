import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function BudgetEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [budget, setBudget] = useState({
    item_name: "",
    amount: "",
    date: {},
    from: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setBudget(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

  const updateBudget = () => {
    axios
      .put(`${API}/transactions/${index}`, budget)
      .then((response) => {
        setBudget(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBudget();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          id="date"
          value={budget.date}
          type="date"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <br /> 
        <label>Name:</label>
        <input
          id="item_name"
          value={budget.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Item Name"
          required
        />
        <br /> 
        <label>Amount:</label>
        <input
          id="amount"
          value={budget.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="Amount"
          required
        />
        <br />
        <label>From:</label>
        <input
          id="from"
          value={budget.from}
          type="text"
          onChange={handleTextChange}
          placeholder="From"
          required
        />
        <br /> 
        <label>Category:</label>
        <input
          id="category"
          value={budget.category}
          type="text"
          onChange={handleTextChange}
          placeholder="category"
          required
        />

        <br /> 
        <input type="submit" />
      </form>
    </div>
  );
}
