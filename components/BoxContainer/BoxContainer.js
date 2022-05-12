import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
const BoxContainer = ({ children }) => {
  const { shape, customShadows } = useTheme();
  return (
    <Box
      sx={{
        py: 5,
        px: 4,
        backgroundColor: "primary.main",
        borderRadius: shape.borderRadius,
        boxShadow: customShadows.z12,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
