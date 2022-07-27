import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


export default function BudgetDetails() {
    const [budget, setBudget] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(
        () => {
          axios.get(`${API}/transactions/${index}`)
            .then((response) => setBudget(response.data))
            .catch((error) => navigate(`/404`));
        }, [index]);

    const handleDelete = () => {
            axios.delete(`${API}/transactions/${index}`)
              .then((response) => navigate(`/transactions`))
              .catch((error) => console.error(error));
          };

  return (
    <article>
    <strong>Date:</strong> {budget.date}
      <br/><br/>
   <strong>Name:</strong> {budget.item_name}
    <br/><br/>
    <strong>Amount:</strong> {budget.amount}
    <br/><br/>
    <strong>From:</strong> {budget.from}
    <br/><br/>
    <strong>Category:</strong> {budget.category}
    <br/><br/>

    <div className="showNavigation">
        <div>
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>


    </article>
  )
}
