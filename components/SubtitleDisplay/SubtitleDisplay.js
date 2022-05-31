import { Grid, Typography } from "@mui/material";
import React from "react";

const SubtitleDisplay = ({ item }) => {
  return (
    <Grid container sx={{ py: 1, borderTop: "1px solid rgba(245,245,245,0.7)" }}>
      <Grid item xs={3}>
        <Typography variant="body2">{item.startTime}</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body2">{item.startSubtitle}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2">{item.endTime}</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body2">{item.endSubtitle}</Typography>
      </Grid>
    </Grid>
  );
};

export default SubtitleDisplay;
