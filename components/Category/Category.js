import React from "react";
import OutlinedButton from "../Button/OutlinedButton";

const Category = ({ text, color, active, onClick }) => {
  return (
    <OutlinedButton
      text={text}
      color={color}
      active={active}
      onClick={onClick}
    />
  );
};

export default Category;
