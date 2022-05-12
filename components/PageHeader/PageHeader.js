import React from 'react'
import { Box, Grid } from "@mui/material";
import BasicSelect from '../Select/Select';

const options = ["Now", "Since published"];
const PageHeader = ({title}) => {
  const doSomething = () => {};
  return (
    <Box sx={{ my: 3, typography: "subtitle1" }}>
    <Grid container>
      <Grid item xs={6} sm={6}>
        {title}
      </Grid>
      <Grid item xs={6} sm={3} ml="auto">
        <BasicSelect
          placeholder="select any"
          options={options}
          onClick={doSomething}
        />
      </Grid>
    </Grid>
  </Box>
  )
}

export default PageHeader