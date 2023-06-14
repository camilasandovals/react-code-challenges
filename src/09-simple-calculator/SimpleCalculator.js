import { useReducer } from "react"
const initialState = {
  result : "no result yet",
  num1: 0,
  num2: 0 
}

function reducer (state, action) {
  switch(action.type){
    case "num1":
      return {...state, num1: action.number}
    case "num2":
      return {...state, num2: action.number}
    case "+":
      return {...state, result: state.num1 + state.num2}
    case "-":
      return {...state, result: state.num1 - state.num2}
    case "c":
      return {...state, result: 0, num1:0, num2: 0} 
      //return initialState
  }
}

export default function SimpleCalculator () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button onClick={() => dispatch({type:"num1", number})}key={number}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button onClick={() => dispatch({type:"num2", number})} key={number}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({type:"+"})}>+</button>
        <button onClick={() => dispatch({type:"-"})}>-</button>
        <button onClick={() => dispatch({type:"c"})}>c</button>
      </div>
      <div><h2>Result: {state.result}</h2> num1 : {state.num1}   |   num2 : {state.num2} </div>
    </div>
  )
}
