import { Typography, Box } from '@mui/material'
import React from 'react'
import { SvgIcon } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Navbar() {
  return (
    <Box sx={{ flex: 1, display: 'flex',alignItems: 'center' }}>
      
          
          <Typography variant="h3" component="div" sx={{flex: 1, textAlign: 'center', color: 'black' }}>
            flymya
          </Typography>
          <Box sx={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'red'}}></Box>
          
          <Box sx={{flex: 1, textAlign: 'center'}}>
          <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
          <p style={{color: 'black', fontSize: '20px', display: 'inline'}}>Blog</p>
          <img src='https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119__340.png' style={{width: '30px', height: '30px', borderRadius: 30}}></img>
          <SvgIcon component={AccountCircleOutlinedIcon} style={{width: '40px', height: '40px', paddinTop: 20}}></SvgIcon>
          </Box>
          
          </Box>
          
        
    </Box>
  )
}

