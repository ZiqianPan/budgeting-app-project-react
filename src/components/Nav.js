import { Link } from "react-router-dom";

export default function Nav({ accTotal, setAccTotal }) {
  const changeColor = () => {
    if (accTotal >= 1000) {
      return <span style={{ color: "green" }}>{Number(accTotal)}</span>;
    } else if (accTotal <= 0) {
      return <span style={{ color: "red" }}>{Number(accTotal)}</span>;
    } else {
      return <span style={{ color: "black" }}>{Number(accTotal)}</span>;
    }
  };

  return (
    <nav>
      <h1>
        <Link to="/transactions">Budgets</Link>
      </h1>
      <h2>Bank Account Total: {changeColor()}</h2>
      <button>
        <Link to="/transactions/new">NEW TRANSACTION</Link>
      </button>
    </nav>
  );
}
