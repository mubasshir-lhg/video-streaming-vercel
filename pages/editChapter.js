import React from "react";
import { Grid, TextField, Box } from "@mui/material";
import Video from "../components/Video/Video";

const Label = ({ children }) => (
  <Box sx={{ py: 2, typography: "subtitle2" }}>{children}</Box>
);
const EditChapter = () => {
  return (
    <Grid container spacing={2} mt={5}>
      <Grid item xs={12} md={6} sx={{mt:3}}>
        <Video src="video1.mp4" width="100%" height="100%" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Label>Title</Label>
            <TextField name="title"  fullWidth/>
          </Grid>
          <Grid item xs={6}>
            <Label>Tags</Label>
            <TextField name="tags" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Label>Visibility</Label>
            <TextField name="visibility" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Label>Date</Label>
            <TextField name="date" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Label>Restriction</Label>
            <TextField name="restriction" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Label>Description</Label>
            <TextField name="description" fullWidth />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditChapter;
