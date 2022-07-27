import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/transactions">Budgets</Link>
      </h1>
      <button>
        <Link to="/transactions/new">NEW TRANSACTION</Link>
      </button>
    </nav>
  );
}