import { Box, Grid } from "@mui/material";
import HomeCard from "../components/Cards/HomeCard/HomeCard";
import Category from "../components/Category/Category";
import { homedata } from "../_mockup/Home";

const homepage = () => {
  return (
    <Box>
      {/* <Category /> */}
      <Grid container spacing={2}>
        {homedata?.map((item, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <HomeCard item={item}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default homepage;
