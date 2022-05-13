import React from 'react'
import { Grid } from "@mui/material";
import OutlinedButton from "../Button/OutlinedButton";

const IndividualCategory = ({text,color,active,onClick}) => {
  return (
    <Grid item>
        <OutlinedButton text={text}  color={color} active={active} onClick={onClick} />
    </Grid>
  )
}

export default IndividualCategory