import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { styled } from '@mui/system';

const StyledInfo = styled(Box)(({ theme, background }) => ({
  borderRadius: theme.shape.borderRadiusMd,
  padding: "6px 15px",
  background: background || theme.palette.gradients.info,
  color: "#fff",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
}));
const StyledTypography = styled(Typography)({
  display: "inline-block",
  marginLeft: "6px",
});

const InfoContainer = ({ background, icon, tag, number }) => {
  return (
    <StyledInfo background={background}>
      <Box>
        <IconButton>{icon}</IconButton>
        <StyledTypography variant="body2">{tag}</StyledTypography>
      </Box>
      <Typography variant="h6"> {number}</Typography>
    </StyledInfo>
  );
};

export default InfoContainer;
