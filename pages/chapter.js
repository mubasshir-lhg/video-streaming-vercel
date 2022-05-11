import { Box, Grid  } from "@mui/material";
import React from "react";
import ChapterCard from "../components/ChapterCard";
const chapter = ({}) => {
    const chap=[{chapter: '01', duration:'20'},{chapter: '02', duration:'10'},{chapter: '03', duration:'01'}];
  return (
    <Box sx={{p:2}} >
        <Grid container spacing={2}>
             {chap.map((item,index)=>{return (<ChapterCard key={index} chapterNum={item.chapter} chapterDuration={item.duration} / >)})}
        </Grid>
    </Box>
  )
}

export default chapter