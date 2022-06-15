import React from "react";
import { Box, Grid, Button } from "@mui/material";
import AddChapter from "../../../components/Chapter/AddChapter";
import ChapterCard from "../../../components/Chapter/ChapterCard";
import { useRouter } from "next/router";

const Chapter = () => {
  const router = useRouter();
  const chap = [
    { chapterNo: "01", duration: "20" },
    { chapterNo: "02", duration: "10" },
    { chapterNo: "03", duration: "01" },
    { chapterNo: "04", duration: "01" },
  ];

  const editChapter = () => {
    router.push("/home/uploadVideo/editChapter");
  };
  const saveChapter = () => {
    router.push("/home/");
  };
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {chap.map((item, index) => (
          <ChapterCard key={index} item={item} Edit={editChapter} />
        ))}
        <Grid item xs={12}>
          <AddChapter />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          p: 3,
          flexGrow: 1,
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Button variant="outlined" color="purple" fullWidth>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Button variant="contained" color="purple" fullWidth onClick={saveChapter}>
            Save Chapters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chapter;
