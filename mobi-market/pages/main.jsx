import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image'


function main() {
  const styles={
    paginationBox:{
      height:'31px', 
      width:'31px', 
      borderRadius:'10px',
      fontSize:'14px'
    },
    paginationBoxOn:{
      backgroundColor:'#5458EA',
      color:'#FFFFFF'
    },
    paginationBoxOff:{
      backgroundColor:'#C0C0C0',
    },
    paginationArrowBox:{
      border:'1px solid #5458EA'
    },
    centeredBox:{
      display:'flex', 
      alignItems:'center', 
      justifyContent:'center'
    },
    LayoutBox:{
      paddingLeft:'100px',
      paddingRight:'100px', 
      paddingTop:'20px', 
      backgroundColor:'#F0F0F0'
    },
    logoTypography:{
      fontFamily:'Nunito', 
      fontWeight:'800px', 
      fontSize:'20px'
    }
  }
  return (
    <div style={{...styles.LayoutBox}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingBottom:'40px'}}>
            <div style={{...styles.centeredBox}}>
                <div>
                    <img src="/images/shopping-cart.svg" width="44px" height="44px"></img>
                </div>
                <div style={{...styles.logoTypography, paddingLeft:'8px'}}>
                  MOBI MARKET
                </div>
            </div>
            <div style={{...styles.centeredBox, flexDirection:'row'}}>
                <div>
                <div style={{ padding: 10, background: '#5458EA', borderRadius: 80, gap: 10, ...styles.centeredBox}}>
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
            <div style={{...styles.paginationBox,...styles.centeredBox,...styles.paginationArrowBox}}><img src="/images/arrow-left-blue.svg"></img></div>
            <div style={{...styles.paginationBox,...styles.centeredBox,...styles.paginationBoxOff}}>1</div>
            <div style={{...styles.paginationBox,...styles.centeredBox,...styles.paginationBoxOn}}>2</div>
            <div style={{...styles.paginationBox,...styles.centeredBox,...styles.paginationBoxOff}}>3</div>
            <div style={{...styles.paginationBox,...styles.centeredBox,...styles.paginationArrowBox}}><img src="/images/arrow-right-blue.svg"></img></div>
        </div>

    </div>
  )
}

export default main