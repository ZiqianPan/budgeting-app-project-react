import { useState, useEffect } from "react";
import Budget from "./Budget.js";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Budgets({ setAccTotal }) {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

const amountTotalArr = budgets.map(e => e.amount);

//learned it from here: https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
useEffect(() => {
  setAccTotal(amountTotalArr.reduce((preValue,currValue) => Number(preValue) + Number(currValue),0))
}, [budgets])

  return (
    <div className="bugets">
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item Name</th>
              <th>Amount</th>
              <th>Edit</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
          
            {budgets.map((budget, index) => {
              return <Budget key={index} budget={budget} index={index} />;
            })        
            }
        
          </tbody>
        </table>
      </section>
    </div>
  );
}
