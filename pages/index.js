import React from "react";
import { Box, Grid } from "@mui/material";
import BasicSelect from "../components/Select/Select";

const options = ["Now", "Since published"];
const Home = () => {
  const doSomething = () => {};
  return (
    <Box>
      <Box sx={{ my: 3, typography: "subtitle1" }}>
        <Grid container>
          <Grid item xs={8}>
            Dashboard
          </Grid>
          <Grid item xs={3} ml="auto">
            <BasicSelect
              placeholder="select any"
              options={options}
              onClick={doSomething}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ p: 5, backgroundColor: "primary.main",borderRadius:'shape.borderRadius' }}>
        Latest Video performance
      </Box>
    </Box>
  );
};

export default Home;
