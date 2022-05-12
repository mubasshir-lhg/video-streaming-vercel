import { Box, Grid  } from "@mui/material";
import React from "react";
import ContainedButton from "../components/Button/ContainedButton";
import OutlinedButton from "../components/Button/OutlinedButton";
import AddChapter from "../components/Chapter/AddChapter";
import ChapterCard from "../components/Chapter/ChapterCard";
const chapter = ({}) => {
    const chap=[{chapter: '01', duration:'20'},{chapter: '02', duration:'10'},{chapter: '03', duration:'01'}];
  return (
    <Box sx={{p:2}} >
        <Grid container spacing={2}>
        {chap.map((item, index) => { return (<ChapterCard key={index} chapterNum={item.chapter} chapterDuration={item.duration} />) })}
        <Grid item xs={12} > <AddChapter/> </Grid>
      </Grid>
      <Grid container>
        <Grid item > <OutlinedButton/> </Grid>
        <Grid item > <ContainedButton/></Grid>
      </Grid>
    </Box>
  )
}

export default chapter