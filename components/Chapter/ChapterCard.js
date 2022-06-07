import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import IconButton from "@mui/material/IconButton";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import Button from "@mui/material/Button";
import { Box, Grid, Paper, Typography, ListItemIcon } from "@mui/material";
import { useTheme } from "@mui/styles";

const ChapterCard = ({ item, Edit }) => {
  const { chapterNo, duration } = item;
  const { shape } = useTheme();
  return (
    <Grid item md={6} xs={12}>
      <Paper
        variant="outlined"
        sx={{
          bgcolor: "primary.main",
          overflow: "hidden",
          borderRadius: shape.borderRadius,
        }}
      >
        <Box
          sx={{
            backgroundColor: "secondary.main",
          }}
        >
          <ListItem
            disableGutters
            secondaryAction={
              <ListItemIcon>
                <IconButton aria-label="reload">
                  <CachedRoundedIcon />
                </IconButton>
                <IconButton aria-label="edit" onClick={Edit}>
                  <ModeEditOutlinedIcon />
                </IconButton>
                <IconButton aria-label="close">
                  <CloseIcon />
                </IconButton>
              </ListItemIcon>
            }
          >
            <ListItemText
              primary={`chapter ${chapterNo}`}
              sx={{
                p: 2,
                pl: 2,
              }}
            />
          </ListItem>
        </Box>

        <Box
          sx={{
            m: 3,
            backgroundColor: "primary.dark",
            textAlign: "center",
            p: 3,
            borderRadius: shape.borderRadiusXs,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              pb: 4,
            }}
          >
            Duration
          </Typography>

          <Button
            variant="contained"
            color="info"
            sx={{
              width: "100%",
              backgroundColor: "info.main",
              color: "white",
            }}
          >
            {duration} Minutes
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ChapterCard;
