import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";

const StyledInfoVertical = styled(Box)(({ theme, background }) => ({
  borderRadius: theme.shape.borderRadiusMd,
  minWidth:'152px',
  padding: "35px 20px",
  background: background || theme.palette.gradients.info,
  color: "#fff",
  marginTop: "10px",
  display: "flex",
  flexDirection:'column',
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));
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

const InfoContainer = ({ background, icon, tag, number, shape }) => {
  const displayComp = () => {
    switch (shape) {
      case "vertical":
        return (
          <StyledInfoVertical background={background}>
            <Box>
              <StyledTypography variant="body2">{tag}</StyledTypography>
              <IconButton>{icon}</IconButton>
            </Box>
            <Typography variant="h6">{tag==='Subscribers' && '+'} {number}</Typography>
          </StyledInfoVertical>
        );

      default:
        return (
          <StyledInfo background={background}>
            <Box>
              <IconButton>{icon}</IconButton>
              <StyledTypography variant="body2">{tag}</StyledTypography>
            </Box>
            <Typography variant="h6"> {number}</Typography>
          </StyledInfo>
        );
    }
  };
  return displayComp();
};

export default InfoContainer;
