import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadiusMd,
}));
const Header = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  borderTopLeftRadius: theme.shape.borderRadiusMd,
  borderTopRightRadius: theme.shape.borderRadiusMd,
  color: "#fff",
  padding: "20px",
}));
const MiniCardsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
}));
const MiniCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "10px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadiusMd,
  gap: "4px",
  cursor: "pointer",
}));
const StyledButton = styled(Box)(({ theme }) => ({
  padding: "5px 20px",
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadiusMd,
}));

const SplitChapterCard = ({ header, startTime, endTime }) => {
  return (
    <Container>
      <Header>
        <Typography variant="subtitle1">{header}</Typography>
      </Header>
      <MiniCardsWrapper>
        <MiniCard>
          <Box>Start Time</Box>
          <Box>
            <ScheduleIcon fontSize="large" />
          </Box>
          <StyledButton>{startTime}</StyledButton>
        </MiniCard>
        <MiniCard>
          <Box>End Time</Box>
          <Box>
            <ScheduleIcon fontSize="large" />
          </Box>
          <Box>
            <StyledButton>{endTime}</StyledButton>
          </Box>
        </MiniCard>
      </MiniCardsWrapper>
    </Container>
  );
};

export default SplitChapterCard;
