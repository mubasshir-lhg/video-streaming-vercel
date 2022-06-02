import React from "react";
import { Grid, TextField, Box, Button } from "@mui/material";
import Video from "../../components/Video/Video";
import Dropdown from "../../components/Dropdown/Dropdown";
import BasicDatePicker from "../../components/DatePicker/DatePicker";

const tagOptions = ["tags1", "tags2", "tags3"];
const visibiltyOptions = ["public", "private"];
const restrictionOptions = ["copy Write claim", "other",];
const Label = ({ children }) => (
  <Box sx={{ py: 2, typography: "subtitle2" }}>{children}</Box>
);
const EditChapter = () => {
  return (
    <Grid container spacing={6} mt={5}>
      <Grid item xs={12} md={6} sx={{ mt: 3 }}>
        <Video src="video1.mp4" width="100%" height="100%" />
      </Grid>
      <Grid item xs={12} md={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Label>Title</Label>
            <TextField name="title"  />
          </Grid>
          <Grid item xs={6}>
            <Label>Tags</Label>
            <Dropdown options={tagOptions} variant="outlined"/>
          </Grid>
          <Grid item xs={6}>
            <Label>Visibility</Label>
            <Dropdown options={visibiltyOptions} variant="outlined"/>
          </Grid>
          <Grid item xs={6}>
            <Label>Date</Label>
            <BasicDatePicker />
          </Grid>
          <Grid item xs={6}>
            <Label>Restriction</Label>
            <Dropdown options={restrictionOptions} variant="outlined"/>
          </Grid>
          <Grid item xs={12}>
            <Label>Description</Label>
            <TextField name="description"  />
          </Grid>
          <Grid item xs={6} mt={2}>
            <Button variant="outlined" color="purple" fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6} mt={2}>
            <Button variant="contained" color="purple" fullWidth>
              Update
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditChapter;
