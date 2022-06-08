import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/styles";

const CategoryButton = ({ text, width, color, active, onClick }) => {
  const { palette } = useTheme();

  let activeColor = "";
  color === "primary"
    ? (activeColor = palette.gradients.purple)
    : color === "yellow"
    ? (activeColor = palette.gradients.yellow)
    : color === "info"
    ? (activeColor = palette.gradients.info)
    : color === "warning"
    ? (activeColor = palette.gradients.warning)
    : color === "success"
    ? (activeColor = palette.gradients.success)
    : (activeColor = "");

  return (
    <Button
      variant="outlined"
      color={color}
      onClick={onClick}
      sx={{
        px: 2,
        mr:3,
        color: "white",
        minWidth: "120px",
        minHeight: "40px",
        width: `${width}`,
        background: active && activeColor,
      }}
    >
      {text}
    </Button>
  );
};

export default CategoryButton;
