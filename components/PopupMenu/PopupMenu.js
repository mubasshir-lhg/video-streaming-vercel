import React from "react";
import { Menu, MenuItem } from "@mui/material";

const PopupMenu = ({ anchorEl, open, onClose, options }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      disableScrollLock={true}
      sx={{ maxHeight: "400px" }}
    >
      {options?.map((item, index) => (
        <MenuItem onClick={item.onClickFunc} key={index}>
          {item.child}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default PopupMenu;
