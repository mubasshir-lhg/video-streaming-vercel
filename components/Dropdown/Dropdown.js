import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { KeyboardArrowDown } from "@mui/icons-material";
import { TextField } from "@mui/material";

export default function Dropdown({ placeholder, options }) {
  const [selectedVal, setSelectedVal] = useState("");
  const handleChange = (event) => {
    setSelectedVal(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <TextField
          select
          id="select"
          value={selectedVal}
          onChange={handleChange}
          SelectProps={{
            IconComponent: KeyboardArrowDown,
            disableUnderline: true,
            displayEmpty: true,
            renderValue: (value) => (value !== "" ? value : placeholder),
            inputProps: {
              MenuProps: { disableScrollLock: true }
            },
          }}
          variant="outlined"
        >
          {options.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Box>
  );
}
