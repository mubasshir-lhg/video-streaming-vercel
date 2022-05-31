import React, { useState } from "react";
import { Box } from "@mui/material";
import IndividualCategory from "./IndividualCategory";
import { styled } from "@mui/system";

const Category = () => {
  const [activeBtn, setActivebtn] = useState(0);

  const handleActiveBtn = (index) => {
    setActivebtn(index);
  };

  const LinksWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "50px",
    marginBottom: "20px",
    overflowX: "scroll",
    maxWidth: "100vw",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  });

  const obj = [
    { text: "all", color: "primary" },
    { text: "yellow", color: "yellow" },
    { text: "info", color: "info" },
    { text: "success", color: "success" },
    { text: "warning", color: "warning" },
    { text: "all", color: "primary" },
    { text: "yellow", color: "yellow" },
    { text: "info", color: "info" },
    { text: "success", color: "success" },
    { text: "warning", color: "warning" },
  ];
  return (
    <LinksWrapper>
      {obj.map((data, index) => {
        return (
          <IndividualCategory
            onClick={() => handleActiveBtn(index)}
            active={activeBtn == index}
            text={data.text}
            color={data.color}
            key={index}
          />
        );
      })}
    </LinksWrapper>
  );
};

export default Category;
