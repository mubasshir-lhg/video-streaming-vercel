import React, { useState } from "react";
import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import RequestCard from "../../components/Cards/RequestCard/RequestCard";
import { request } from "../../_mockup/Request";
import withAuth from "../../HOC/ProtectedRoutes";

const Requests = () => {
  const [requestData = setRequestData] = useState(request);
  return (
    <Box>
      <PageHeader title="Request" />
      <BoxContainer px="0">
        <Box sx={{ height: { xs: "auto", sm: "450px" }, overflow: "auto" }}>
          {requestData?.map((item, index) => (
            <RequestCard item={item} key={index} />
          ))}
        </Box>
      </BoxContainer>
    </Box>
  );
};

export default withAuth(Requests);
