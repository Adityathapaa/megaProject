import React from 'react';
import './navbar.css'
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement,incrementByAmount} from './redux/slices/counter'

const nav= ()=>{
   const count = useSelector((state) => state.counter.value)
   const dispatch = useDispatch()
    return(
        <>
        <h1 class="adi"> Hi i am navbar {count} </h1> 
        </>
    )
}
export default nav