import React from 'react'
import { Grid, Box, Typography } from '@mui/material';

function profile() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4.5} lg={4.5}>
            <div style={{width:'100%',height:'100vh'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', paddingLeft:'7.7%', paddingRight: '7.7%',paddingTop:'4.4%'}}>
                    <div style={{paddingBottom:'48px', display:'flex', flexDirection:'row'}}>
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

                    <div style={{ paddingBottom: '16px', display: 'flex', flexDirection: 'row', alignItems: 'center', width:'100%', opacity:'40%'}}>
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

                    <div style={{ paddingBottom: '48px', display: 'flex', flexDirection: 'row', alignItems: 'center', width:'100%', opacity:'40%'}}>
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

                    <div style={{ paddingBottom: '8px', display: 'flex', flexDirection: 'row', alignItems: 'center', width:'100%'}}>
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
        <div style={{width:'100%',height:'100vh', backgroundColor:'#F7F6F9'}}></div>
        </Grid>
    </Grid>
  )
}

export default profile