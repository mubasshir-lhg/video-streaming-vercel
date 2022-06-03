import React, { useState } from "react";
import { Typography, Grid, IconButton, Box } from "@mui/material";
import Image from "next/image";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Collapse from "@mui/material/Collapse";
import AddComment from "../AddComment/AddComment";

const SubscriberComment = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Grid container mt={2} spacing={1}>
      <Grid item xs={1}>
        <Image
          src="/user2.jpg"
          alt="img"
          width={40}
          height={40}
          quality={100}
          objectFit="cover"
          className="bar-img"
        />
      </Grid>
      <Grid item xs={11}>
        <Typography variant="subtitle1">Lucy Gray</Typography>
        <Typography variant="caption" component="p">
          Consectetur dolor ex occaecat aute nulla labore culpa aliquip labore
          qui est do cupidatat.In cupidatat incididunt sint quis dolore tempor
          sunt.
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
          <Box>130</Box>
          <IconButton>
            <ThumbDownOffAltIcon />
          </IconButton>
          <Box>4</Box>
          <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
            Reply
          </Box>
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <AddComment placeholder="Add a reply" Cancel={handleClick} ReplayBtn='Replay'/>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default SubscriberComment;
