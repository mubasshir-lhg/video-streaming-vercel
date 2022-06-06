import { Typography, Box } from "@mui/material";
import React from "react";
import Video from "../Video";
import { styled } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ChaptersWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: "0 30px",
  padding: "10px 0",
  cursor: "pointer",
  position: "relative",
});
const PlayBtn = styled(Box)({
  position: "absolute",
  top: "translate(50%,-50%)",
  left: -25,
  transform: "scale(0)",
});

const ChapterVideo = ({ item, onClick, activeChapter, lastChapter }) => {
  const { videoSrc, title, time } = item;
  return (
    <Box
      sx={{
        backgroundColor: activeChapter && "primary.light",
        borderRadius: lastChapter && "0 0 12px 12px",
      }}
    >
      <ChaptersWrapper onClick={onClick} sx={{ gap: { xs: 1, lg: 2, xl: 10 } }}>
        <PlayBtn sx={{ transform: activeChapter && "scale(1)" }}>
          <PlayArrowIcon />
        </PlayBtn>
        <Video src={videoSrc} width="180px" my="0" />
        <Box
          mr={4}
          sx={{ borderRight: activeChapter && "2px solid #fff" }}
          flexGrow={1}
        >
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="caption">{time}</Typography>
        </Box>
      </ChaptersWrapper>
    </Box>
  );
};

export default ChapterVideo;
