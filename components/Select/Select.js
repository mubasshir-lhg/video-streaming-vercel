import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { KeyboardArrowDown } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  icon: {
    color: "#fff",
  },
});
export default function BasicSelect({
  placeholder,
  options,
  onClick,
  bgColor,
  p,
}) {
  const [selectedVal, setSelectedVal] = useState("");
  const classes = useStyles();
  const handleChange = (event) => {
    setSelectedVal(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <TextField
          placeholder="select any value"
          select
          id="select"
          value={selectedVal}
          onChange={handleChange}
          SelectProps={{
            IconComponent: KeyboardArrowDown,
            disableUnderline: true,
            displayEmpty: true,
            renderValue: (value) => (value !== "" ? value : placeholder),
            classes: {
              icon: classes.icon,
            },
          }}
          size="small"
          variant="standard"
        >
          {options.map((item, index) => (
            <MenuItem value={item} key={index} onClick={() => onClick(item)}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Box>
  );
}
