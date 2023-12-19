import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image'
import Input from '../components/Input'
import InputWithIcon from '../components/InputWithIcon'
import Button from '../components/Button'
import ButtonAsText from '../components/ButtonAsText'


function login() {
      const iconStyle = {
        width: '30vw', // Adjust as needed
        maxWidth: '30vw',
        height: '30vh',
        marginBottom: '10px', // Adjust spacing between icon and text
      };
      const typographyStyle = {
        fontSize: '2vw', // Adjust as needed
        marginBottom: '2vh',
        fontFamily: 'Nunito',
        fontWeight:800,
      };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
      <div style={{position: 'relative', width:'100%', height:'100vh'}}>
        <img
          src="/images/image1.png"
          alt="Description of the image"
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        />
        <div style={{position:'absolute', top: "46%", left:"49%", transform: 'translate(-50%, -50%)',
         width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 14, display: 'flex'}}>
            <img
              src="/images/shopping-cart.svg"
              alt="Shopping cart icon"
              style={iconStyle}
            />
            <Typography variant="h1" style={typographyStyle}>MOBI MARKET</Typography>
        </div>
      </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <div style={{position:'relative', width:'100%', height:'100vh'}}>
        <div style={{position:'absolute', top:'60%', left:'50%', transform:'translate(-50%, -50%)', width:'50%'}}>
          <Input/>
          <InputWithIcon/>
          <div style={{color: '#5458EA', fontSize: 14, fontFamily: 'Inter', fontWeight: '800', lineHeight: 4, wordWrap: 'break-word'}}>Забыли пароль</div>
          <Button/>
          <ButtonAsText/>
        </div>
        </div>
      </Grid>
    </Grid>
  );
}



export default login