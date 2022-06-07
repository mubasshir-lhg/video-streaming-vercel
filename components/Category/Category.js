import React from "react";
import CategoryButton from "./CategoryButton";

const Category = ({ text, color, active, onClick }) => {
  return (
    <CategoryButton
      text={text}
      color={color}
      active={active}
      onClick={onClick}
    />
  );
};

export default Category;
