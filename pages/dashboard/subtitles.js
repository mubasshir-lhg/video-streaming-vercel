import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import PageHeader from "../../components/PageHeader/PageHeader";
import BasicSelect from "../../components/Select/Select";
import SubtitleDisplay from "../../components/SubtitleDisplay/SubtitleDisplay";
import Video from "../../components/Video/Video";
import { subtitleData } from "../../_mockup/Subtitle";

const ButtonWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  margin: "16px 0",
});

const options = ["action 1", "action 2"];
const Subtitles = () => {
  const [subtitlePage2, setSubtitlePage2] = useState(false);
  const clickHandler = () => {
    setSubtitlePage2((prevState) => !prevState);
  };
  const doSomething = () => {};
  const pageToshow = () => {
    return (
      <>
        {!subtitlePage2 ? (
          <BoxContainer>
            <Grid container textAlign={{ xs: "center", md: "left" }}>
              <Grid xs={12} md={8}>
                <Video
                  src="/video1.mp4"
                  width="90%"
                  height="100%"
                  borderRadius="24px"
                />
              </Grid>
              <Grid xs={12} md={4}>
                <Button
                  variant="contained"
                  color="warning"
                  fullWidth
                  size="large"
                  sx={{ my: 2 }}
                  onClick={clickHandler}
                >
                  Add New Subtitle or CC
                </Button>
                <Box sx={{ borderTop: "1px solid #fff", my: 4 }}></Box>
                <Box>PUBLISHED</Box>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="large"
                  sx={{ mt: 2 }}
                >
                  ENGLISH (AUTOMATIC)
                </Button>
              </Grid>
            </Grid>
          </BoxContainer>
        ) : (
          <BoxContainer>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
                <Grid item xs={12} md={6}>
                  <BasicSelect
                    placeholder="Action"
                    options={options}
                    onClick={doSomething}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", my: 2 }}>
                    <TextField
                      placeholder="Type subtiitle here then press enter"
                      multiline
                      rows={5}
                      fullWidth
                    />
                    <Button variant="contained" color="info">
                      +
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ height: "300px", overflow: "auto" }}>
                    {subtitleData?.map((item, index) => (
                      <SubtitleDisplay key={index} item={item} />
                    ))}
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
                <Video
                  src="/video1.mp4"
                  width="95%"
                  height="100%"
                  borderRadius="24px"
                  mx="auto"
                />
              </Grid>
            </Grid>
          </BoxContainer>
        )}
      </>
    );
  };
  return (
    <Box>
      <PageHeader title="Subtitles" />
      {!subtitlePage2 ? (
        <ButtonWrapper>
          <Button variant="contained" color="secondary" sx={{width:100}}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" sx={{width:100}}>
            Unpublish
          </Button>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <Button variant="contained" color="secondary" sx={{width:120}}>
            Delete Draft
          </Button>
          <Button variant="contained" color="info" onClick={clickHandler} sx={{width:120}}>
            Publish Edits
          </Button>
        </ButtonWrapper>
      )}
      {pageToshow()}
    </Box>
  );
};

export default Subtitles;
