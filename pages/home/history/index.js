import React, { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { RelatedVideosData } from "../../../_mockup/RalatedVideos";
import SearchVideoResult from "../../../components/Video/searchVideoResult/searchVideoResult";
import DeleteIcon from "@mui/icons-material/Delete";

const History = () => {
  const router = useRouter();
  const [data, setData] = useState(RelatedVideosData);

  const playVideo = () => {
    router.push("/home/playVideo");
  };
  return (
    <Grid container spacing={2} mt={2}>
      <Grid xs={12} px={2}>
        <Typography variant="subtitle1">Watch history</Typography>
      </Grid>
      <Grid item xs={8}>
        {data?.map((item, index) => (
          <Grid item xs={12} key={index} sx={{ mt: 1, pr: 2 }}>
            <SearchVideoResult
              item={item}
              onClick={playVideo}
              hideAvatar={true}
              hideDescription={true}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Clear all watch history
        </Button>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Clear last 1 hour watch history
        </Button>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Clear last 24 hours watch history
        </Button>
      </Grid>
    </Grid>
  );
};

export default History;
