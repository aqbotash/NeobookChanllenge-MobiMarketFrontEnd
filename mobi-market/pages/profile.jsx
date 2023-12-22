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
        <div style={{width:'100%',height:'100vh', backgroundColor:'#F7F6F9'}}>
            <div style={{display:'flex',flexDirection: 'column', paddingLeft:'13.8%', paddingRight:'13.8%', paddingTop:'4.8%', alignItems:'space-between'}}>
                <div style={{display:'flex', flexDirection:'row',alignItems: 'center', paddingBottom:'44px'}}>
                    
                    <div style={{display:'flex',flexDirection: 'row', alignItems:'center'}}>
                        <div style={{width: '100%', height: '100%', paddingLeft: 10, paddingRight: 10, paddingTop: 2, paddingBottom: 2, background: 'rgba(192.31, 192.31, 192.31, 0.20)', borderRadius: '50px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}><img src='/images/arrow-left.svg'></img></div>
                        <div style={{paddingLeft:'8px'}}>Назад</div>
                    </div>

                    {/* <div style={{marginLeft: 'auto', marginRight: 'auto'}}>Профиль</div> */}

                </div>

                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#5458EA', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <span>
                            <img src='/images/user.svg'></img>
                            </span>
                    </div>
                    <div style={{paddingTop:'12px', color:'#5458EA', fontFamily:'Inter', fontSize:'16px', paddingBottom:'32px'}}>Выбрать фотографию</div>
                </div>

                <div style={{display:'flex', flexDirection:'column', backgroundColor:'#FFFFFF', borderRadius:'12px', fontSize:'16px', paddingLeft:'16px', color:'#C0C0C0'}}>
                    <div style={{display:'flex', alignContent:'center', borderBottom: '1px solid #F7F6F9', paddingTop:'8px', paddingBottom:'8px'}}>Имя</div>
                    <div style={{borderBottom: '1px solid #F7F6F9', paddingTop:'8px', paddingBottom:'8px'}}>Фамилия</div>
                    <div style={{borderBottom: '1px solid #F7F6F9', paddingTop:'8px', paddingBottom:'8px'}}>Akbota Kurmangazhyyeva</div>
                    <div style={{paddingTop:'8px', paddingBottom:'8px'}}>гггг-мм-дд</div>
                </div>

                <div style={{paddingTop:'12px'}}>
                <div style={{display:'flex', flexDirection:'column', backgroundColor:'#FFFFFF', borderRadius:'12px', fontSize:'16px', paddingLeft:'16px',paddingRight:'16px', color:'#C0C0C0', fontFamily:'Inter'}}>
                    <div style={{borderBottom: '1px solid #F7F6F9', paddingTop:'8px', paddingBottom:'8px', color:'#5458EA', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <div>Добавить номер</div>
                        <div style={{color:'#C0C0C0'}}>0(000)00000</div>
                        </div>
                    <div style={{borderBottom: '1px solid #F7F6F9', paddingTop:'8px', paddingBottom:'8px'}}>nikitina.alesya@gmail.</div>
                </div>
                </div>

                <div style={{display:'flex',justifyContent: 'center', alignItems: 'center', paddingTop:'44px'}}>
                <div style={{paddingTop: 10,paddingBottom: 10,paddingLeft: 36,paddingRight:36, background: '#5458EA', borderRadius: 80, gap: 10, fontSize:'16px', fontFamily:'Inter'}}>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
                        Закончить регистрацию</div>
                </div>
                </div>

            </div>
        </div>
        </Grid>
    </Grid>
  )
}

export default profile