import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image'

function main() {
  return (
    <div style={{paddingLeft:'100px', paddingRight:'100px', paddingTop:'20px', backgroundColor:'#F0F0F0'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingBottom:'40px'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <div>
                    <img src="/images/shopping-cart.svg" width="44px" height="44px"></img>
                </div>
                <div style={{fontFamily:'Nunito', fontWeight:'800px', fontSize:'20px', paddingLeft:'8px'}}>
                  MOBI MARKET
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <div>
                <div style={{ padding: 10, background: '#5458EA', borderRadius: 80, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                  <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Подать объявление</div>
                </div>
                </div>
                <div style={{paddingLeft:'16px'}}>
                <div style={{ display:'flex', flexDirection:'row'}}>
                            <div style={{display:'flex', flexDirection:'column', marginRight:'12px', justifyContent:'center',fontFamily:'Inter', alignItems:'flex-end'}}>
                                <div style={{fontWeight:'600'}}>Akbota Kurmangazhyyeva</div>
                                <div>youngccamel</div>
                            </div>
                        <div>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#5458EA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span>
                                    <img src='/images/user.svg'></img>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Grid container spacing={2}>
      {Array.from({ length: 4 }, (_, row) => (
        <Grid container item key={row} spacing={2} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          {Array.from({ length: 8 }, (_, col) => (
            <Grid item key={col} xs={6} lg={1.5} sm={4} md={3}>
              {/* Your content for each grid item */}
              <div style={{ backgroundColor:'#FFFFFF', borderRadius:'10px'}}>
                  <div style={{display:'flex', flexDirection:'column', padding:'6px', gap:4}}>
                    <div><img src="/images/car.png" height='auto' style={{maxWidth:"100%"}}/></div>
                    <div style={{fontWeight:'600'}}>BMW M4 Coupe: A Two-Door</div>
                    <div style={{color:'#5D5FEF'}}>23000 $</div>
                    <div style={{display:'flex', flexDirection:'row', gap:4, alignItems:'center'}}><img src='/images/like.svg'></img><div style={{fontSize:'14px'}}>100</div></div>
                  </div>
              </div>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:4, paddingTop:'40px', paddingBottom:'40px'}}>
            <div style={{height:'31px', width:'31px', borderRadius:'10px', border:'1px solid #5458EA', display:'flex', alignItems:'center', justifyContent:'center'}}><img src="/images/arrow-left-blue.svg"></img></div>
            <div style={{height:'32px', width:'32px', borderRadius:'10px', backgroundColor:'#C0C0C0',display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px'}}>1</div>
            <div style={{height:'32px', width:'32px', borderRadius:'10px', backgroundColor:'#5458EA',display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px', color:'#FFFFFF'}}>2</div>
            <div style={{height:'32px', width:'32px', borderRadius:'10px', backgroundColor:'#C0C0C0',display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px'}}>3</div>
            <div style={{height:'31px', width:'31px', borderRadius:'10px', border:'1px solid #5458EA', display:'flex', alignItems:'center', justifyContent:'center'}}><img src="/images/arrow-right-blue.svg"></img></div>
        </div>

    </div>
  )
}

export default main