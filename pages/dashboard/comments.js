import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import { styled } from "@mui/system";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import CommentCard from "../../components/Cards/CommentCard/CommentCard";
import { published, pending, markAsSpam } from "../../_mockup/Comment";

const LinksWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "50px",
  marginBottom: "20px",
});

const subLinks = ["Published", "Pending", "Marked as spam"];
const Comments = () => {
  const [publishedData, setData] = useState(published);
  const [pendingData, setPendingData] = useState(pending);
  const [markAsSpamData, setMarkAsSpamData] = useState(markAsSpam);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPending, setTotalPending] = useState(0);
  const [totalmarkedAsSpam, setTotalMarkedAsSpam] = useState(0);

  const handleClick = (ind) => {
    setActiveIndex(ind);
  };

  useEffect(() => {
    if (pendingData && markAsSpamData) {
      setTotalPending(pendingData.length);
      setTotalMarkedAsSpam(markAsSpamData.length);
    }
  }, [pendingData, markAsSpamData]);

  const compToShow = () => {
    switch (activeIndex) {
      case 0:
        return (
          <BoxContainer px="0">
            <Box sx={{ height: {xs:"auto",lg:"370px"}, overflow: "auto" }}>
              {publishedData?.map((item, index) => (
                <CommentCard item={item} key={index} />
              ))}
            </Box>
          </BoxContainer>
        );
      case 1:
        return (
          <BoxContainer px="0">
            <Box sx={{ height: {xs:"auto",lg:"370px"}, overflow: "auto" }}>
              {pendingData?.map((item, index) => (
                <CommentCard item={item} key={index} />
              ))}
            </Box>
          </BoxContainer>
        );
      case 2:
        return (
          <BoxContainer px="0">
            <Box sx={{ height: {xs:"auto",lg:"370px"}, overflow: "auto" }}>
              {markAsSpamData?.map((item, index) => (
                <CommentCard item={item} key={index} />
              ))}
            </Box>
          </BoxContainer>
        );
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
            {item === "Pending" && ` (${totalPending})`}
            {item === "Marked as spam" && ` (${totalmarkedAsSpam})`}
          </Box>
        ))}
      </LinksWrapper>
      {compToShow()}
    </Box>
  );
};

export default Comments;
