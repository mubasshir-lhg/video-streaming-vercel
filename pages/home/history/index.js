import React, { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { RelatedVideosData } from "../../../_mockup/RalatedVideos";
import SearchVideoResult from "../../../components/Video/searchVideoResult/searchVideoResult";
import DeleteIcon from "@mui/icons-material/Delete";
import { ConfirmationModal } from "../../../components/Modal/ConfirmationModal/ConfirmationModal";

const History = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(RelatedVideosData);

  const playVideo = () => {
    router.push("/home/playVideo");
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Confirm = () => {
    handleClose();
  };
  return (
    <Grid container spacing={2} mt={2}>
      <Grid xs={12} px={2}>
        <Typography variant="subtitle1">Watch history</Typography>
      </Grid>
      <Grid item xs={12} sm={8} order={{ xs: 2, sm: 1 }}>
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
        xs={12}
        sm={4}
        order={{ xs: 1, sm: 2 }}
        sx={{
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          p: 2,
        }}
      >
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleOpen}
        >
          Clear all watch history
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleOpen}
        >
          Clear all Comment history
        </Button>
      </Grid>
      <ConfirmationModal
        open={open}
        handleClose={handleClose}
        Confirm={Confirm}
      />
    </Grid>
  );
};

export default History;
