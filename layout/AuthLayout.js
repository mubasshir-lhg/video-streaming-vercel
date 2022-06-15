import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <Box>
       <Head>
        <title>Alex-Lei</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {children}
    </Box>
    )
}

export default AuthLayout