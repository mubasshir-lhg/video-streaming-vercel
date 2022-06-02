import React from "react";
import { Button, Box, TextField, Grid } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";

const ButtonWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  marginTop: "16px",
});

const AddComment = () => {
  return (
    <Grid container spacing={1} mt={3}>
      <Grid item xs={1}>
        <Image
          width={40}
          height={40}
          src="/user1.jpg"
          alt="img"
          objectFit="cover"
          className="bar-img"
        />
      </Grid>
      <Grid item xs={11}>
        <TextField
          variant="standard"
          placeholder="Add Comment..."
          fullWidth
          sx={{ backgroundColor: "transparent" }}
        />
        <ButtonWrapper>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="info">
            Submit
          </Button>
        </ButtonWrapper>
      </Grid>
    </Grid>
  );
};

export default AddComment;
