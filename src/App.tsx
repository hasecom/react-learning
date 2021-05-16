import React,{useState} from "react"
import {Child1,Child2} from "./components/Child"
import './App.css';

 
const App: React.FC = () => {
  const [count,setCount] = useState<number>(0)
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setCount(count-1)}>-1</button>
      <Child1 />
      <Child2 />
    </div>
  )
}
 
export default App
