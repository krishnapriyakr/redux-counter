import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'


function Counter() {
  const [amount,setAmount]=useState()
  const dispatch=useDispatch()
  const count = useSelector((state) => state.counter.count)
  const handleincrement = () => {
    if (amount=="") {
      alert("please provide value")
    }
    else {
      //update state  in store 
      dispatch(incrementByAmount(Number(amount)))
      
    }
  }
  return (
      <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-item-center'>
          
          <div className='d-flex justify-content-center align-item-center  border rounded p-5 w-25 flex-column'>
              <h1 style={{ fontSize: '100px' }}> {count}</h1>

              <div className='w-100 d-flex justify-content-between mt-5'>
                  <div className='btn btn-warning' onClick={()=>dispatch(increment())}>Incriment</div>
                  <div className='btn btn-success' onClick={()=>dispatch(decrement())}>Decriment</div>
                  <div className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</div>
        </div>
        <div className='d-flex mt-5'>
          <input type="text" className='form-control' placeholder='Enter amount to be increment' onChange={e=>setAmount(e.target.value)} />
          <button   onClick={handleincrement} className='btn btn-primary ms-3'>Increment Amount</button>

        </div>
          </div>
    </div>
  )
}

export default Counter