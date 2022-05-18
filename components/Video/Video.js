import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
const Video = ({ src, width, height,borderRadius }) => {
  const { shape, customShadows } = useTheme();
  return (
    <Box sx={{ width: width || 240, height: height || 140, my: 2 }}>
      <video
        width="100%"
        controls
        style={{
          borderRadius:borderRadius|| shape.borderRadiusMd,
          boxShadow: customShadows.z1,
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </Box>
  );
};

export default Video;
