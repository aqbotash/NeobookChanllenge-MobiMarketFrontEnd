import React from 'react'

function Input() {
  const customField={
    
  }
  return (
        <div>
          <div style={{width: '100%', height: '100%', paddingTop: 10, paddingBottom: 10, 
          borderBottom: '0.50px #C0C0C0 solid', justifyContent: 'flex-start', alignItems: 'center', 
          gap: 10, display: 'inline-flex', marginBottom:'24px'}}>
              <label class="custom-field">
                <input type="email"/>
                <span class="placeholder">Имя пользователя</span>
              </label>
          </div>
        </div>
  )
}

export default Input