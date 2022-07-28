import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Budget({ budget, index }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => window.location.reload(true)) //so it reloads the page
      .catch((error) => console.error(error));
  };

  return (
    <tr>
      <td>{budget.date}</td>
      <td className="Budget">
        <a href={`/transactions/${index}`} rel="noreferrer">
          {budget.item_name}
        </a>
      </td>
      <td>{budget.amount}</td>
      <td>
        {" "}
        <Link to={`/transactions/${index}/edit`}>
          <button>Edit</button>
        </Link>
      </td>

      <td>
        {" "}
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Budget;
