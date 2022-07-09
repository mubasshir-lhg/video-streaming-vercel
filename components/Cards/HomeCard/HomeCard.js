import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import VideoWithTime from "../../Video/VideoWithTime/VideoWithTime";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

const InfoWrapper = styled(Box)({
  display: "flex",
  gap: 15,
});

const HomeCard = ({ item, onClick,channelProfile }) => {
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
    <Container onClick={onClick} mt={1}>
      <VideoWithTime src={videoSrc} duration={duration} />
      <InfoWrapper>
       {!channelProfile && <Avatar src={authorImg} alt="img" />}
        <Box>
          <Typography variant={!channelProfile?"subtitle1":"body1"}>
            {title.length > 50 ? `${title.substring(0, 50)}...` : title}
          </Typography>
         {!channelProfile && <Typography variant="caption" component="div" mt={1}>
            {authorName}
          </Typography>}
          <Typography variant="caption">
            {views} views . {uploadTime}
          </Typography>
        </Box>
      </InfoWrapper>
    </Container>
  );
};

export default HomeCard;
