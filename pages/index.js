import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import HomeCard from "../components/Cards/HomeCard/HomeCard";
import { homedata } from "../_mockup/Home";
import Category from "../components/Category/Category";

const tabs = [
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

const Homepage = () => {
  const [value, setValue] = useState(0);
  const [activeBtn, setActivebtn] = useState(0);
  const [screenSize, setScreenSize] = useState(1440);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleActiveBtn = (index) => {
    setActivebtn(index);
  };

  useEffect(() => {
    window.addEventListener('resize', ()=> {
      setScreenSize( window.innerWidth)
  })
  }, [screenSize]);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ maxWidth: { xs: screenSize-130, md:screenSize-260 } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              {tabs.map((data, index) => (
                <Category
                  onClick={() => handleActiveBtn(index)}
                  active={activeBtn == index}
                  text={data.text}
                  color={data.color}
                  key={index}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>
        {homedata?.map((item, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <HomeCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Homepage;
