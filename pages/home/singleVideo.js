import React from 'react'
import { withRouter } from 'next/router'

const SingleVideo = ({router}) => {
  console.log(router.query)
  return (
    <h1>SingleVideo</h1>
  )
}

export default withRouter(SingleVideo)