import React from 'react'

function Input() {
  return (
        <div>
          <div style={{width: '100%', height: '100%', paddingTop: 10, paddingBottom: 10, 
          borderBottom: '0.50px #C0C0C0 solid', justifyContent: 'flex-start', alignItems: 'center', 
          gap: 10, display: 'inline-flex', marginBottom:'24px'}}>
            <div style={{flex: '1 1 0', color: '#C0C0C0', fontSize: 16, fontFamily: 'Inter', 
            fontWeight: '400', wordWrap: 'break-word'}}>Имя пользователя</div>
          </div>
        </div>
  )
}

export default Input