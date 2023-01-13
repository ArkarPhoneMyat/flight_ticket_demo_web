import { Typography, Box } from '@mui/material'
import React from 'react'
import { SvgIcon } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Styled } from './NavBarStyle';
import { images, myColor, sizes } from '../../constants';

export default function Navbar() {
  return (
    <Box sx={{ flex: 1, display: 'flex',alignItems: 'center' }}>
      <Typography variant="h3" component="div" sx={{flex: 1, textAlign: 'center', color: 'black' }}>
        flymya
      </Typography>
      <Box sx={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'red'}}></Box>
      <Box sx={{flex: 1, textAlign: 'center'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
          <Styled.BlogP color={myColor.black} size={sizes.h3}>Blog</Styled.BlogP>
          <Styled.FlagImg src={images.britishFlag}/>
          <SvgIcon component={AccountCircleOutlinedIcon} sx={{width: '40px', height: '40px', paddinTop: 20}}></SvgIcon>
        </Box>
      </Box>
    </Box>
  )
}

