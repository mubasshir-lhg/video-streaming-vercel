import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FlagIcon from "@mui/icons-material/Flag";
import { Typography, Box, IconButton, Grid } from "@mui/material";
import Image from "next/image";

const CommentCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box py={2} px={4} sx={{ "&:hover": { backgroundColor: "primary.light" } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={1}>
          <Image
            src={item.img}
            width={80}
            height={80}
            objectFit="cover"
            quality={100}
            alt="img"
            className="bar-img"
          />
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ pb: 1, display: "flex", gap: { xs: "10px", md: "30px" } }}>
            <Typography>{item.userName}</Typography>
            <Typography variant="body2">{item.time}</Typography>
            <Typography variant="body2">{item.tag}</Typography>
          </Box>
          {item.comment}
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <FlagIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Grid>
      </Grid>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pt: 2 }}>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={8}>
                <Typography>{item.moreDetail}</Typography>
              </Grid>
            </Grid>
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
};

export default CommentCard;
