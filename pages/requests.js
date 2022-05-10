import React from 'react'
import { Box } from '@mui/material'

const Requests = () => {
  return (
    <Box>
    <Box sx={{p:5,backgroundColor:'primary.main'}}>Primary</Box>
    <Box sx={{p:5,backgroundColor:'primary.light'}}>Primary.light</Box>
    <Box  sx={{p:5,backgroundColor:'secondary.main'}}>Secondary</Box>
    <Box  sx={{p:5,backgroundColor:'secondary.dark'}}>Secondary.dark</Box>
    <Box  sx={{p:5,backgroundColor:'purple.main'}}>Secondary.dark</Box>
  </Box>
  )
}

export default Requests