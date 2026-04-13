import './App.css'
import { useState } from 'react'

export default function Counter(){
    const [counter, setCounter] = useState<number>(0);
    function handleClick(){
        setCounter(prev => prev + 1)
    }
    return(
        <div>
            <h1>Button has been clicked: {counter} times</h1>
            <button className='btn' onClick={() => handleClick()}>Click Me</button>
        </div>
    )
}