import React from "react";
import {
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import Image from "next/image";
//icon
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
const EditorCard = ({ value, individualCheckHandler }) => {
  
  return (
    <Grid
      container
      alignItems="center"
      sx={{ py: 2, borderTop: "1px solid #fff" }}
      spacing={1}
    >
      <Grid item xs={1}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="purple"
                checked={value.check}
                onClick={()=>individualCheckHandler(value.id)}
              />
            }
          />
        </FormGroup>
      </Grid>
      <Grid item sm={4} md={4} lg={2}>
        <Box sx={{ minWidth: "100px", mr: 2 }}>
          <Image
            alt="table-img"
            src={value.img}
            width={150}
            height={100}
            quality={100}
            objectFit="cover"
            className="bar-img"
          />
        </Box>
      </Grid>
      <Grid item xs={11} lg={7} order={{ xs: 3, md: 3, lg: 1 }} ml='auto'>
        {value.videoTitle}
        <Typography variant="body2" mt={1}>
          {value.videoViews} . {value.videoUploadTime}
        </Typography>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={1} order={{ xs: 2, md: 2, lg: 2 }}>
        {value.views}
      </Grid>
      <Grid item xs={3} md={3} lg={1} order={{ xs: 1, md: 1, lg: 2 }}>
        <Grid container>
          <Grid item xs={6}>
            <ChatBubbleIcon />
          </Grid>
          <Grid item xs={6}>
            {value.comments}
          </Grid>
          <Grid item xs={6}>
            <ThumbUpAltIcon />
          </Grid>
          <Grid item xs={6}>
            {value.likes}
          </Grid>
          <Grid item xs={6}>
            <ThumbDownAltIcon />
          </Grid>
          <Grid item xs={6}>
            {value.dislikes}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditorCard;
