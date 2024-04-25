import {useState} from 'react'

function UseState() {
    const [count,setCount] = useState(0)

    const increement = () => {
        setCount(count + 1)
    }
    const decreement = () => {
        if(count === 0){
            return;
        }
        setCount(count-1)
    }
  return (
    <div>
      <h1>Counter App Using UseState Hook</h1>
      <h3>I have Clicked {count} times.</h3>
      <button onClick={decreement}>-</button>
      <button onClick={increement}>+</button>
    </div>
  )
}

export default UseState
