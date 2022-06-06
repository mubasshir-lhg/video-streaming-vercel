import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({ getSearchValue}) => {
  const [inputVal, setInputVal] = useState("");

  const handleChange=(e)=>{
    setInputVal(e.target.value)
  }
  const submitSearch=()=>{
    getSearchValue(inputVal)
    setInputVal('')
  }
  return (
    <Paper
      component="form"
      sx={{
        p: "0 4px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
        boxShadow: "none",
        width: "100%",
        borderRadius: "8px",
      }}
      elevation={4}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#fff" }}
        placeholder="Search"
        value={inputVal}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
      <IconButton sx={{ p: "10px" }} onClick={submitSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchField;
