import React, { useEffect, useState, useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import HomeCard from "../components/Cards/HomeCard/HomeCard";
import { homedata } from "../_mockup/Home";
import Category from "../components/Category/Category";

const tabs = [
  { text: "all", color: "primary" },
  { text: "arts", color: "yellow" },
  { text: "crafts", color: "info" },
  { text: "daily hacks", color: "success" },
  { text: "handmade", color: "warning" },
  { text: "gardening", color: "primary" },
  { text: "music", color: "yellow" },
  { text: "paintng", color: "info" },
  { text: "technoledge", color: "success" },
  { text: "animals", color: "warning" },
];

const Homepage = () => {
  const [value, setValue] = useState(0);
  const [activeBtn, setActivebtn] = useState(0);
  const [screenSize, setScreenSize] = useState(1540);
  const [selectedCategory, setSelectedCategory] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleActiveBtn = (index, text) => {
    setActivebtn(index);
    setSelectedCategory(text);
  };

  const getFilteredList = () => {
    if (!selectedCategory || selectedCategory === "all") {
      return homedata;
    }
    return homedata.filter(
      (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  };

  const filteredList = useMemo(getFilteredList, [selectedCategory, homedata]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, [screenSize]);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ borderBottom: "1px solid #2447EF", pb: 1 }}>
          <Box
            sx={{ maxWidth: { xs: screenSize - 130, md: screenSize - 260 } }}
          >
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
                  onClick={() => handleActiveBtn(index, data.text)}
                  active={activeBtn == index}
                  text={data.text}
                  color={data.color}
                  key={index}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <HomeCard item={item} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} textAlign="center" mt={5}>
            <Typography variant="h3">Not Found</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Homepage;
