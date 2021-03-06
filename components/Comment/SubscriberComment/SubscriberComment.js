import React, { useState } from "react";
import { Typography, Grid, IconButton, Box } from "@mui/material";
import Image from "next/image";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Collapse from "@mui/material/Collapse";
import AddComment from "../AddComment/AddComment";
import SubscriberReplay from "./SubscriberReplay";

const SubscriberComment = ({ item, sendComment }) => {
  const { subImg, subName, commentLikes, commentDisLikes, comment, replay } =
    item;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Grid container mt={2} spacing={1}>
      <Grid item xs={1}>
        <Image
          src={subImg}
          alt="img"
          width={40}
          height={40}
          quality={100}
          objectFit="cover"
          className="bar-img"
        />
      </Grid>
      <Grid item xs={11}>
        <Typography variant="subtitle1">{subName}</Typography>
        <Typography variant="body2" component="p">
          {comment}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            typography: "caption",
          }}
        >
          <IconButton>
            <ThumbUpOffAltIcon />
          </IconButton>
          <Typography variant="caption">{commentLikes}</Typography>
          <IconButton>
            <ThumbDownOffAltIcon />
          </IconButton>
          <Typography variant="caption">{commentDisLikes}</Typography>
          <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
            <Typography variant="caption"> Reply</Typography>
          </Box>
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <AddComment
            placeholder="Add a reply"
            Cancel={handleClick}
            ReplayBtn="Reply"
            sendComment={sendComment}
          />
          {replay?.map((item, index) => (
            <SubscriberReplay item={item} key={index} />
          ))}
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default SubscriberComment;
