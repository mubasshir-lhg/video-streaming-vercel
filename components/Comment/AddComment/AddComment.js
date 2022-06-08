import React, { useState } from "react";
import { Button, Box, TextField, Grid } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";

const ButtonWrapper = styled(Box)(({theme})=>({
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  marginTop: "16px",
  [theme.breakpoints.down("sm")]:{
    justifyContent: "center",
    marginTop: "8px",
    "& Button":{
      width:"100%"
    }
  },
 
}));

const AddComment = ({ placeholder, Cancel, ReplayBtn,sendComment }) => {
  const [inputVal,setInputVal]=useState("")

  const handleChange=(e)=>{
    setInputVal(e.target.value)
  }
  const submitComment=()=>{
    sendComment(inputVal)
    setInputVal('')
  }
  return (
    <Grid container spacing={1} mt={3}>
      <Grid item xs={2} sm={1}>
        <Image
          width={40}
          height={40}
          src="/user1.jpg"
          alt="img"
          objectFit="cover"
          className="bar-img"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={inputVal}
          variant="standard"
          placeholder={placeholder || "Add Comment..."}
          fullWidth
          sx={{ backgroundColor: "transparent" }}
          onChange={handleChange}
        />
        <ButtonWrapper>
          <Button variant="outlined" color="secondary" onClick={Cancel}>
            Cancel
          </Button>
          <Button variant="contained" color="info" onClick={submitComment}>
            {ReplayBtn || "Submit"}
          </Button>
        </ButtonWrapper>
      </Grid>
    </Grid>
  );
};

export default AddComment;
