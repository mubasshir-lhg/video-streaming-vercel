import React, { useState, useMemo } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { RelatedVideosData } from "../../../_mockup/RalatedVideos";
import SearchVideoResult from "../../../components/Video/searchVideoResult/searchVideoResult";

const SearchResult = () => {
  const router = useRouter();
  const [searchedVal, setSearchedVal] = useState(router.query.searchVal);
  const [data, setData] = useState(RelatedVideosData);

  const getFilteredList = () => {
    return data.filter((item) =>
      item.authorName.toLowerCase().includes(searchedVal?.toLowerCase())
    );
  };
  const filteredList = useMemo(getFilteredList, [searchedVal, data]);

  const playVideo = () => {
    router.push("/home/playVideo");
  };
  return (
    <Grid container rowSpacing={1} mt={2}>
      {filteredList?.map((item, index) => (
        <Grid item xs={12} key={index}>
          <SearchVideoResult item={item} onClick={playVideo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResult;
