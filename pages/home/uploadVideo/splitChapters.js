import React, { useState } from "react";
import { Button, Grid, Box } from "@mui/material";
import Video from "../../../components/Video/Video";
import SplitChapterCard from "../../../components/Cards/SplitChapterCard/SplitChapterCard";
import { ConfirmationModal } from "../../../components/Modal/ConfirmationModal/ConfirmationModal";
import { useRouter } from "next/router";

const SplitChapters = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const splitChapter = () => {
    setOpen(true);
  };
  const Confirm = () => {
    handleClose();
    router.push("/home/uploadVideo/chapter");
  };

  return (
    <Box mt={2}>
      <Grid container spacing={{ xs: 1, md: 4 }} justifyContent="center">
        <Grid item xs={12} md={10} lg={9}>
          <Video src="/video1.mp4" width="100%" height="100%" controls={true} />
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          lg={9}
          container
          spacing={1}
          justifyContent="center"
        >
          <Grid item xs={10} sm={5} md={6} xl={3}>
            <SplitChapterCard
              header="Intro"
              startTime="00:00"
              endTime="01:00"
            />
          </Grid>
          <Grid item xs={10} sm={5} md={6} xl={3}>
            <SplitChapterCard
              header="Specs"
              startTime="01:00"
              endTime="03:00"
            />
          </Grid>
          <Grid item xs={10} sm={5} md={6} xl={3}>
            <SplitChapterCard
              header="Review"
              startTime="03:00"
              endTime="04:00"
            />
          </Grid>
          <Grid item xs={10} sm={5} md={6} xl={3}>
            <SplitChapterCard
              header="Pricing"
              startTime="04:00"
              endTime="05:00"
            />
          </Grid>
        </Grid>
        <Grid item xs={10} md={8} container spacing={1} justifyContent="center">
          <Grid item xs={12} md={6} lg={3}>
            <Button variant="outlined" color="purple" fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Button
              variant="contained"
              color="purple"
              fullWidth
              onClick={splitChapter}
            >
              Split Chapters
            </Button>
          </Grid>
        </Grid>

        <ConfirmationModal
          open={open}
          handleClose={handleClose}
          Confirm={Confirm}
        />
      </Grid>
    </Box>
  );
};

export default SplitChapters;
