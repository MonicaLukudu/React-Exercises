import './App.css'
import { useState } from 'react'

export default function Froms(){
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    
    return(
        <div>
            <input
            className='inputField'
            placeholder='FirstName'
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)} />
            <input
            className='inputField'
            placeholder='LastName'
            type="text" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}/>
            <button className='btn' onClick={() => alert(`Hello ${firstname} ${lastname}`)}>Greet Me</button>
        </div>
    )
}