import React, {useState} from 'react'
import Budgets from "../components/Budgets";

export default function Index({accTotal, setAccTotal}) {
// const [accTotal, setAccTotal] = useState(0)

const changeColor = () => {
  if (accTotal >= 1000) {
    return (
      <span style={{color:"green"}}>{Number(accTotal)}</span>
    )
  } else if (accTotal <= 0) {
   return <span style={{color:"red"}}>{Number(accTotal)}</span>
  } else {
    return  <span style={{color:"black"}}>{Number(accTotal)}</span>

  }
}

  return (
    <div className="Index">
    <h2>Bank Account Total: {changeColor()}</h2>
    <Budgets setAccTotal={setAccTotal}  />
  </div>
  )
}