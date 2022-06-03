import React, { useState } from "react";
import { Typography, Grid, IconButton, Box } from "@mui/material";
import Image from "next/image";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Collapse from "@mui/material/Collapse";
import AddComment from "../AddComment/AddComment";

const SubscriberReplay = ({ item,sendComment }) => {
  const { subImg, subName, commentLikes, commentDisLikes, comment } = item;
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
        <Typography variant="caption" component="p">
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
          <Box>{commentLikes}</Box>
          <IconButton>
            <ThumbDownOffAltIcon />
          </IconButton>
          <Box>{commentDisLikes}</Box>
          <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
            Reply
          </Box>
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <AddComment
            placeholder="Add a reply"
            Cancel={handleClick}
            ReplayBtn="Replay"
            sendComment={sendComment}
          />
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default SubscriberReplay;
