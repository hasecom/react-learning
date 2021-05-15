import React from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  message:string,
  children:React.ReactNode
}
const Child : React.FC<Props> = ({message,children}) => {
  return (
    <p>{message}の{children}</p>
  )
}
 
const App: React.FC = () => {
    return (
      <div className="App">
          <Child message="1">子コンポーネント</Child>
          <Child message="2">子コンポーネント</Child>
      </div>
    )
}
 
export default App
