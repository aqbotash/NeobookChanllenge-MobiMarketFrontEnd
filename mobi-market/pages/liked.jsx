import React from 'react'
import { Grid, Box, Typography } from '@mui/material';

function liked() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4.5} lg={4.5}>
            <div style={{width:'100%',height:'100vh'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', paddingLeft:'7.7%', paddingRight: '7.7%',paddingTop:'4.4%'}}>
                    <div style={{paddingBottom:'48px', display:'flex', flexDirection:'row', paddingLeft:'8px'}}>
                        <div>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#5458EA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span>
                                    <img src='/images/user.svg'></img>
                                </span>
                            </div>
                        </div>
                            <div style={{display:'flex', flexDirection:'column', marginLeft:'12px', justifyContent:'center',fontFamily:'Inter'}}>
                                <div style={{fontWeight:'600'}}>Akbota Kurmangazhyyeva</div>
                                <div>youngccamel</div>
                            </div>
                    </div>

                    <div style={{padding:'8px',display: 'flex', flexDirection: 'row', alignItems: 'center', width:'100%',backgroundColor:'#F7F6F9', justifyContent:'center', borderRadius:'10px'}}>
                        <div style={{ borderRadius: '10%', backgroundColor: '#5458EA', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px' }}>
                            <img src='/images/Heart.svg' alt="Heart icon" />
                        </div>
                        <div style={{ fontSize: '16px', lineHeight: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '8px' }}>
                        <span>Понравившиеся</span>
                        </div>
                            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                                <img src='/images/dirRight.svg' alt="Right arrow icon" />
                            </div>
                    </div>

                    <div style={{paddingTop:'16px',paddingBottom: '48px',paddingLeft:'8px', display: 'flex', flexDirection: 'row', alignItems: 'center', width:'100%', opacity:'40%'}}>
                        <div style={{ borderRadius: '10%', backgroundColor: '#5458EA', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px' }}>
                            <img src='/images/store.svg' alt="Heart icon" />
                        </div>
                        <div style={{ fontSize: '16px', lineHeight: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '8px' }}>
                        <span>Мои товары</span>
                        </div>
                            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                                <img src='/images/dirRight.svg' alt="Right arrow icon" />
                            </div>
                    </div> 

                    <div style={{ paddingBottom: '8px', paddingLeft:'8px', display: 'flex', flexDirection: 'row', alignItems: 'center', width:'100%'}}>
                        <div style={{ borderRadius: '10%', backgroundColor: '#5458EA', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px' }}>
                            <img src='/images/logout.svg' alt="Heart icon" />
                        </div>
                        <div style={{ fontSize: '16px', lineHeight: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '8px' }}>
                        <span>Выйти</span>
                        </div>
                            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                                <img src='/images/dirRight.svg' alt="Right arrow icon" />
                            </div>
                    </div>                     

                </div>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={7.5} lg={7.5}>
        <div style={{width:'100%',height:'100vh', backgroundColor:'#F7F6F9'}}>
            <div style={{display:'flex',flexDirection: 'column', paddingLeft:'13.8%', paddingRight:'13.8%', paddingTop:'4.8%', alignItems:'space-between'}}>
                <div style={{display:'flex', flexDirection:'row',alignItems: 'center', paddingBottom:'44px'}}>
                    
                    <div style={{display:'flex',flexDirection: 'row', alignItems:'center'}}>
                        <div style={{width: '100%', height: '100%', paddingLeft: 10, paddingRight: 10, paddingTop: 2, paddingBottom: 2, background: 'rgba(192.31, 192.31, 192.31, 0.20)', borderRadius: '50px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}><img src='/images/arrow-left.svg'></img></div>
                        <div style={{paddingLeft:'8px'}}>Назад</div>
                    </div>

                    {/* <div style={{marginLeft: 'auto', marginRight: 'auto'}}>Профиль</div> */}

                </div>
            <div>
            <Grid container spacing={2}>
      {Array.from({ length: 2 }, (_, row) => (
        <Grid container item key={row} spacing={2} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          {Array.from({ length: 4}, (_, col) => (
            <Grid item key={col} xs={3} lg={3} sm={3} md={3}>
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
            </div>
                
        </div>
        </div>
        </Grid>
    </Grid>
  )
}

export default liked