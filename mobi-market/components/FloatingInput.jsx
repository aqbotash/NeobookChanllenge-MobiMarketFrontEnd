import {React, useState} from 'react'
import './FloatingInput.css'

function FloatingInput() {
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
        <div>
            <div id="float-label">
            <input type="email" value={value}
                onChange={(e) => handleTextChange(e.target.value)}/>
                <label className={ isActive ? "Active" : ""} htmlFor="email">Имя пользователя</label>
            </div>
        </div>
  )
}

export default FloatingInput