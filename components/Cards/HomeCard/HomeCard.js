import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Video from "../../Video/Video";
import Avatar from "@mui/material/Avatar";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});
const VideoWrapper = styled(Box)({
  position: "relative !important",
  "&:hover": {
    transform: "scale(1.02)",
  },
});
const VideoTime = styled(Box)(({ theme }) => ({
  position: "absolute !important",
  bottom: 20,
  right: 0,
  padding: "5px 20px",
  borderRadius: "30px",
  backgroundColor: theme.palette.primary.main,
}));
const InfoWrapper = styled(Box)({
  display: "flex",
  gap: 15,
});

const HomeCard = ({ item,onClick }) => {
  const {
    videoSrc,
    authorImg,
    title,
    authorName,
    views,
    uploadTime,
    duration,
  } = item;
  return (
    <Container onClick={onClick}>
      <VideoWrapper>
        <Video src={videoSrc} width="100%" height="100%" controls={false} />
        <VideoTime>{duration}</VideoTime>
      </VideoWrapper>
      <InfoWrapper>
        <Avatar src={authorImg} alt="img" />
        <Box>
          <Typography variant="subtitle1">
            {title.length > 50 ? `${title.substring(0, 50)}...` : title}
          </Typography>
          <Typography variant="caption" component="div" mt={2}>
            {authorName}
          </Typography>
          <Typography variant="caption">
            {views} views . {uploadTime}
          </Typography>
        </Box>
      </InfoWrapper>
    </Container>
  );
};

export default HomeCard;
