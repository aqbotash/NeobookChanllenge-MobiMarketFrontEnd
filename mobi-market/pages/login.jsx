import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image'
function login() {
      const iconStyle = {
        width: '25vw', // Adjust as needed
        maxWidth: '200px',
        height: '25vh',
        marginBottom: '10px', // Adjust spacing between icon and text
      };
      const typographyStyle = {
        fontSize: '2vw', // Adjust as needed
        marginBottom: '2vh',
        fontFamily: 'Nunito',
        fontWeight:800
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
        <div style={{position:'absolute', top: "50%", left:"50%", transform: 'translate(-50%, -50%)', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 14, display: 'flex'}}>
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
      hello
      </Grid>
    </Grid>
  );
}



export default login