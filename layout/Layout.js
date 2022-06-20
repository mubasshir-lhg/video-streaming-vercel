import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery, CssBaseline, Box } from "@mui/material";
import Head from "next/head";
import AppBarComp from "../components/AppBar/AppBar";
import DrawerComp from "../components/Drawer/Drawer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Layout({ children }) {
  const { breakpoints } = useTheme();
  const [open, setOpen] = useState(true);
  const [channel, setChannel] = useState(false);
  const isSmDown = useMediaQuery(breakpoints.down("sm"));

  const handleDrawer = () => {
    setOpen((preState) => !preState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Head>
        <title>Alex-Lei</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <CssBaseline />
      <AppBarComp
        open={open}
        handleDrawer={handleDrawer}
        isSmDown={isSmDown}
        setOpen={setOpen}
        setChannel={setChannel}
      />
      <DrawerComp
        open={open}
        isSmDown={isSmDown}
        handleDrawer={handleDrawer}
        channel={channel}
      />
      <Box
        component="main"
        sx={{ maxWidth: "100%", flexGrow: 1, p: { xs: 1, sm: 2, md: 3 } }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
