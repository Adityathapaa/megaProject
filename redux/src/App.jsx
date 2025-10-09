import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,incrementByAmount} from './redux/slices/counter'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
      <h1>Counter is : {count}</h1>
      
      <button onClick={()=>dispatch(incrementByAmount(2))}>increments</button>
    </>
  )
}

export default App
