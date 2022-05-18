import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader/PageHeader";
import { styled } from "@mui/system";
import BoxContainer from "../components/BoxContainer/BoxContainer";
import CommentCard from "../components/Cards/CommentCard/CommentCard";
import { CommentData } from "../_mockup/Comment";

const LinksWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "50px",
  marginBottom: "20px",
});

const subLinks = ["Published", "Pending", "Marked as spam"];
const Comments = () => {
  const [data, setData] = useState(CommentData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pending, setPending] = useState(0);
  const [markedAsSpam, setMarkedAsSpam] = useState(0);

  const handleClick = (ind) => {
    setActiveIndex(ind);
  };

  useEffect(() => {
    if (data) {
      setPending(data.length);
      setMarkedAsSpam(data.length);
    }
  }, [data]);

  const compToShow = () => {
    switch (activeIndex) {
      case 0:
        return (
          <BoxContainer px="0">
            <Box sx={{ height: "370px", overflow: "auto" }}>
              {data?.map((item, index) => (
                <CommentCard item={item} key={index} />
              ))}
            </Box>
          </BoxContainer>
        );
      case 1:
        return (
          <BoxContainer px="0">
            <Box sx={{ height: "370px", overflow: "auto" }}>
              {data?.map((item, index) => (
                <CommentCard item={item} key={index} />
              ))}
            </Box>
          </BoxContainer>
        );
      case 2:
        return <BoxContainer>Marked as spam</BoxContainer>;
      default:
        break;
    }
  };
  return (
    <Box>
      <PageHeader title="Comments" />
      <LinksWrapper>
        {subLinks?.map((item, index) => (
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              borderBottom: activeIndex === index && "1px solid #fff",
            }}
            onClick={() => handleClick(index)}
          >
            {item}
            {item === "Pending" && ` (${pending})`}
            {item === "Marked as spam" && ` (${markedAsSpam})`}
          </Box>
        ))}
      </LinksWrapper>
      {compToShow()}
    </Box>
  );
};

export default Comments;
