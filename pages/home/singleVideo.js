import React, { useState } from "react";
import { withRouter } from "next/router";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import VideoToPlay from "../../components/Video/videoToPlay/videoToPlay";
import AddComment from "../../components/Comment/AddComment/AddComment";
import SubscriberComment from "../../components/Comment/SubscriberComment/SubscriberComment";
import { subscriberComments } from "../../_mockup/subscriberComments";
import { chaptersData } from "../../_mockup/Chapters";
import user1 from "../../assets/Images/user1.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import ChapterVideo from "../../components/Video/chapterVideo/chapterVideo";

const ChapterWrapper = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.customShadows.z1,
  marginTop: "16px",
}));
const ChapterHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: "12px 12px 0 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px",
}));

const SingleVideo = () => {
  const [subscriberData, setSubscriberData] = useState(subscriberComments);
  const [activeChapter, setActiveChapter] = useState(0);

  const sendComment = (val) => {
    setSubscriberData([
      {
        id: 10,
        subImg: user1,
        subName: "John Doe",
        commentLikes: "",
        commentDisLikes: "",
        comment: val,
      },
      ...subscriberData,
    ]);
  };
  const sendReplay = (val) => {
    console.log(val);
  };
  const playVideo = (index, item) => {
    setActiveChapter(index);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <VideoToPlay />
        <AddComment sendComment={sendComment} />
        {subscriberData?.map((item, index) => (
          <SubscriberComment item={item} sendComment={sendReplay} key={index} />
        ))}
      </Grid>
      <Grid item xs={4}>
        <ChapterWrapper>
          <ChapterHeader>
            <Typography variant="subtitle1">Chapters</Typography>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </ChapterHeader>
          {chaptersData?.map((item, index) => (
            <ChapterVideo
              item={item}
              key={index}
              activeBorder={{
                borderRight: activeChapter === index && "2px solid #fff",
              }}
              activePlayBtn={{
                transform: activeChapter === index && "scale(1)",
              }}
              onClick={() => playVideo(index, item)}
            />
          ))}
        </ChapterWrapper>
      </Grid>
    </Grid>
  );
};

export default withRouter(SingleVideo);
