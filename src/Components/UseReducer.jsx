import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "increement":
            return {count: state.count + 1};
        case "decreement":
            return {count: state.count - 1};
        default:
            return state.count;
    }
}

const Counter = () => {
    const[state , dispatch] = useReducer(reducer, {count:0})
    return(
        <>
        <h1>Counter App using UseReducer Hook</h1>
          <h3>You have Clicked the Count: {state.count} times.</h3>
           <button onClick={() => dispatch({type:"increement"})}>+</button>
           <button onClick={() => dispatch({type: "decreement"})}>-</button>
        
        </>
    )
}

export default Counter;