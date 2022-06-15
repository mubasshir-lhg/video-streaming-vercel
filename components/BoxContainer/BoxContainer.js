import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
const BoxContainer = ({ children, py, px, bgColor }) => {
  const { shape, customShadows } = useTheme();
  return (
    <Box
      sx={{
        py: py || { xs: 1, sm: 2, md: 5 },
        px: px || { xs: 2, sm: 3, md: 4 },
        backgroundColor: bgColor || "primary.main",
        borderRadius: shape.borderRadius,
        boxShadow: customShadows.z12,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
