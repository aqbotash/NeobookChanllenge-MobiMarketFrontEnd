import React from 'react'
import Image from 'next/image'
import ResponsiveContainer from '../components/ResponsiveContainer'

function contact() {
  return (
    <ResponsiveContainer direction="column" responsive={true}>
    <div style={{ width:"720px", height: "100vh"}}>
      <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 14, display: 'flex'}}>
    <img style={{width: 200, height: 200}} src="images/shopping-cart.svg" />
    <div style={{color: 'black', fontSize: 32, fontFamily: 'Nunito', fontWeight: '800', wordWrap: 'break-word'}}>MOBI MARKET</div>
</div>
      <Image
        src="/images/image1.png"
        alt="Description"
        layout="fill"
        objectFit="cover"
      />
    </div>
      <div>LoginPage</div>
    </ResponsiveContainer>
  )
}

export default contact