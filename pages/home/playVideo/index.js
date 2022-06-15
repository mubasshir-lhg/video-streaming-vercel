import React, { useState } from "react";
import { withRouter } from "next/router";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import VideoToPlay from "../../../components/Video/videoToPlay/videoToPlay";
import AddComment from "../../../components/Comment/AddComment/AddComment";
import SubscriberComment from "../../../components/Comment/SubscriberComment/SubscriberComment";
import { subscriberComments } from "../../../_mockup/subscriberComments";
import { chaptersData } from "../../../_mockup/Chapters";
import { RelatedVideosData } from "../../../_mockup/RalatedVideos";
import user1 from "../../../assets/Images/user1.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import ChapterVideo from "../../../components/Video/chapterVideo/chapterVideo";
import RelatedVideos from "../../../components/Video/relatedVideos/relatedVideos";
import RelatedVideosSkeleton from "../../../components/Skeleton/RelatedVideoSkeleton/RelatedVideoSkeleton";

const ChapterWrapper = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.customShadows.z1,
  marginTop: "16px",
}));
const ChapterHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "12px 12px 0 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px",
}));

const SingleVideo = () => {
  const [subscriberData, setSubscriberData] = useState(subscriberComments);
  const [allChaptersData, setAllChaptersData] = useState(chaptersData);
  const [activeChapter, setActiveChapter] = useState(0);
  const [loading, setloading] = useState(false);
  const [playChapter, setPlayChapter] = useState(allChaptersData[0]);
  const [allRelatedVideosData, setRelatedVideosData] =
    useState(RelatedVideosData);

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
    setPlayChapter(item);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} xl={8}>
        <Grid item xs={12}>
          <VideoToPlay item={playChapter} />
        </Grid>
        <Grid item xs={12}>
          <AddComment sendComment={sendComment} />
          {subscriberData?.map((item, index) => (
            <SubscriberComment
              item={item}
              sendComment={sendReplay}
              key={index}
            />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <ChapterWrapper>
          <ChapterHeader>
            <Typography variant="subtitle1">Chapters</Typography>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </ChapterHeader>
          {allChaptersData?.map((item, index) => (
            <ChapterVideo
              item={item}
              key={index}
              activeChapter={activeChapter === index}
              lastChapter={allChaptersData.length - 1 === index}
              onClick={() => playVideo(index, item)}
            />
          ))}
        </ChapterWrapper>
        <Box sx={{ px: { md: 1, xl: 4 }, mt: 4 }}>
          {loading
            ? allRelatedVideosData.map((item, index) => (
                <RelatedVideosSkeleton key={index} />
              ))
            : allRelatedVideosData?.map((item, index) => (
                <RelatedVideos
                  key={index}
                  item={item}
                  onClick={() => playVideo(index, item)}
                />
              ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default withRouter(SingleVideo);
