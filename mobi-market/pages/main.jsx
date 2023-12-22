import React from 'react'
import { Grid, Box, Typography } from '@mui/material';

function main() {
  return (
    <div style={{paddingLeft:'44px', paddingRight:'44px'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingBottom:'40px'}}>
            <div>
                Logo
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div>Подать объявление</div>
                <div>Аккаунт</div>
            </div>
        </div>
        <Grid container spacing={2}>
      {Array.from({ length: 4 }, (_, row) => (
        <Grid container item key={row} spacing={2}>
          {Array.from({ length: 8 }, (_, col) => (
            <Grid item key={col} xs={1.5}>
              {/* Your content for each grid item */}
              <div style={{ height: '17.9vh', border: '1px solid #ddd' }}>
                Product
              </div>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
    </div>
  )
}

export default main