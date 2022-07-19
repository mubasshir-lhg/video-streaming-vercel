import React, { useState } from "react";
import Image from "next/image";
import FlagIcon from "@mui/icons-material/Flag";
import PopupMenu from "../../PopupMenu/PopupMenu";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Typography,
  Box,
  IconButton,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";

const CommentCard = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { breakpoints } = useTheme();
  const isMdDown = useMediaQuery(breakpoints.down("md"));
  const openPopup = Boolean(anchorEl);
  const openPopupMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closePopupMenu = () => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    openPopupMenu(e);
  };
  const changeCommentStatus = () => {
    closePopupMenu();
  };
  const menuOptions = [
    { onClickFunc: changeCommentStatus, child: "publish" },
    { onClickFunc: changeCommentStatus, child: "pending" },
    { onClickFunc: changeCommentStatus, child: "mark as spam" },
  ];

  return (
    <Box py={2} px={4} sx={{ "&:hover": { backgroundColor: "primary.light" } }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={2} lg={1}>
          <Image
            src={item.img}
            width={isMdDown ? 120 : 80}
            height={isMdDown ? 120 : 80}
            objectFit="cover"
            quality={100}
            alt="img"
            className="bar-img"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={8}>
          <Box sx={{ pb: 1, display: "flex", gap: { xs: "10px", md: "30px" } }}>
            <Typography>{item.userName}</Typography>
            <Typography variant="body2">{item.time}</Typography>
            <Typography variant="body2">{item.tag}</Typography>
          </Box>
          {item.comment}
        </Grid>
        <Grid item xs={2} sm={1} sx={{ ml: "auto" }}>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2} sm={1}>
          <IconButton>
            <FlagIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2} sm={1}>
          <IconButton onClick={(e) => handleClick(e)}>
            <ExpandMore />
          </IconButton>
        </Grid>
      </Grid>
      <PopupMenu
        anchorEl={anchorEl}
        open={openPopup}
        onClose={closePopupMenu}
        options={menuOptions}
      />
    </Box>
  );
};

export default CommentCard;
