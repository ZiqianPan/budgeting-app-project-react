import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {useState} from "react"

import Nav from "./components/Nav.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";
import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/Four0Four.js";

function App() {
  const [accTotal, setAccTotal] = useState(0)


  return (
    <div className="App">
    <Router>
      <Nav  accTotal={accTotal} setAccTotal={setAccTotal} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index  accTotal={accTotal} setAccTotal={setAccTotal}/>} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;
