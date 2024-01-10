import {React, useState} from 'react'
import './FloatingInput.css'


function PasswordInput() {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');
    function handleTextChange(text) {
        setValue(text);
      
        if (text !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
  return (
    <div id="float-label">
        <input type="email" value={value} id="email"
                onChange={(e) => handleTextChange(e.target.value)}/>
        <label className={ isActive ? "Active" : ""} htmlFor="username">Пароль</label>
            <div style={{width: 24, height: 24, position: 'absolute', right:'0px', top:'28px'}}>
                    <img src='/images/eye-disable.svg'></img>
            </div>
    </div>
  )
}

export default PasswordInput