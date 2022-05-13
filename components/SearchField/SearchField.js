import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchField =() => (
  <Paper
    component="form"
    sx={{
      p: "0 4px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "primary.main",
      boxShadow: "none",
      width: "100%",
    }}
    elevation={4}
  >
    <InputBase
      sx={{ ml: 1, flex: 1, color: "#fff" }}
      placeholder="Search"
      inputProps={{ "aria-label": "search" }}
    />
    <IconButton sx={{ p: "10px" }}>
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchField;
