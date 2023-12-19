import React from 'react'

function InputWithIcon() {
  return (
    <div>
        <div style={{width: '100%', height: '100%', paddingTop: 4, paddingBottom: 4, borderBottom: '0.50px #C0C0C0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', color: '#C0C0C0', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Пароль</div>
            <div style={{width: 24, height: 24, position: 'relative'}}>
                <div style={{width: 20, height: 17.50, left: 2, top: 3.25, position: 'absolute'}}>
                    <img src='/images/eye-disable.svg'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputWithIcon