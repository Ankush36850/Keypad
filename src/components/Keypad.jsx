import React, { useState} from 'react';
import "../style.css"



const Keypad = () => {
  const [password, setPassword] = useState([])
  const [output,setOutput] = useState([])

  const handleClick = (e) => {
      let key = [2,4,6,8,5,0]
      let value = +(e.target.id)
      setOutput([])
      if(key[password.length] === value){
        setPassword([...password,value])
        setOutput([...output,"*"])
        document.getElementById(e.target.id).disabled = true
      }
      else{
        setOutput('Restart')
        setPassword([])
        let button = document.querySelectorAll('.btn')   
        for(let i = 0; i < button.length; i++){
          button[i].disabled = false
        }
      }     
  }
  return (
    <div>
        <h2>Password: {output}</h2>
        <button className='btn' id="5" onClick={(e) => handleClick(e)}>5</button>
        <button className='btn' id="2" onClick={(e) => handleClick(e)}>2</button>        
        <button className='btn' id="8" onClick={(e) => handleClick(e)}>8</button><br />
        <button className='btn' id="6" onClick={(e) => handleClick(e)}>6</button>
        <button className='btn' id="4" onClick={(e) => handleClick(e)}>4</button>       
        <button className='btn' id="0" onClick={(e) => handleClick(e)}>0</button>
    </div>
  )
}

export default Keypad