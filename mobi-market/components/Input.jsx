import React, {useState} from 'react'
import './InputForm.css'; // Import your CSS file

function Input() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
        <div>
            <div className={`input-form ${isFocused ? 'focused' : ''}`}>
                <label htmlFor="username">Имя пользователя</label>
                <input type="text" id="username" name="username" placeholder="Имя пользователя" onFocus={handleFocus}
        onBlur={handleBlur} />
            </div>
        </div>
  )
}

export default Input


