import React, { useState, useMemo } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { RelatedVideosData } from "../../_mockup/RalatedVideos";
import SearchVideoResult from "../../components/Video/searchVideoResult/searchVideoResult";

const SearchVideos = () => {
  const router = useRouter();
  const [searchedVal, setSearchedVal] = useState(router.query.searchVal);
  const [data, setData] = useState(RelatedVideosData);

  const getFilteredList = () => {
    return data.filter(
      (item) => item.authorName.toLowerCase().includes(searchedVal?.toLowerCase()) 
    );
  };
  const filteredList = useMemo(getFilteredList, [searchedVal,data]);
  return (
    <Grid container>
      <Grid item xs={12}>
        {filteredList?.map((item, index) => (
          <SearchVideoResult item={item} key={index} />
        ))}
      </Grid>
    </Grid>
  );
};

export default SearchVideos;
