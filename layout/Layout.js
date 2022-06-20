import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import dp from "../assets/Images/user1.jpg";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import HistoryIcon from "@mui/icons-material/History";
import AppBarComp from "../components/AppBar/AppBar";

import MuiDrawer from "@mui/material/Drawer";
import {
  useMediaQuery,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  IconButton,
  Divider,
  List,
  Box,
} from "@mui/material";

const drawerWidth = 220;
const sideBarLinkUser = [
  {
    id: "home",
    label: "Home",
    link: "",
    Icon: HomeIcon,
  },
  {
    id: "video",
    label: "Video ",
    link: "video",
    Icon: FlipCameraAndroidIcon,
  },
  {
    id: "history",
    label: "History",
    link: "history",
    Icon: HistoryIcon,
  },
];
const sideBarLinkAdmin = [
  {
    id: "dashboard",
    label: "Dashboard",
    link: "",
    Icon: DashboardOutlinedIcon,
  },
  {
    id: "analytics",
    label: "Analytics",
    link: "analytics",
    Icon: TimelineOutlinedIcon,
  },
  {
    id: "editor",
    label: "Editor",
    link: "editor",
    Icon: PersonAddOutlinedIcon,
  },
  {
    id: "comments",
    label: "Comments",
    link: "comments",
    Icon: ModeCommentOutlinedIcon,
  },
  {
    id: "subtitles",
    label: "Subtitles",
    link: "subtitles",
    Icon: SubtitlesOutlinedIcon,
  },
  {
    id: "requests",
    label: "Requests",
    link: "requests",
    Icon: VideoCallIcon,
  },
];
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 18px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 20px)`,
  },
  [theme.breakpoints.down("sm")]: {
    width: `0px`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Layout({ children }) {
  const router = useRouter();
  const { breakpoints } = useTheme();
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [channel, setChannel] = useState(false);
  const isSmDown = useMediaQuery(breakpoints.down("sm"));

  const handleDrawer = () => {
    setOpen((preState) => !preState);
  };
  const goToPage = (href, index) => {
    channel ? router.push(`/dashboard/${href}`) : router.push(`/home/${href}`);
    setActiveIndex(index);
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
        drawerWidth={drawerWidth}
        setOpen={setOpen}
        setChannel={setChannel}
      />
      <Drawer
        variant="permanent"
        open={open}
        sx={{ position: isSmDown && "absolute", top: 0, left: 0 }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawer} sx={{ mt: 3 }}>
            {open === false ? "" : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {open && (
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Image
              alt="Dp"
              src={dp}
              width={100}
              height={100}
              quality={100}
              objectFit="cover"
              layout="intrinsic"
              className="dp-img"
            />
          </Box>
        )}

        <List sx={{ pl: 3 }}>
          {(channel ? sideBarLinkAdmin : sideBarLinkUser).map((item, index) => (
            <ListItemButton
              key={item.label}
              sx={{
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
                mt: 2,
                backgroundColor: activeIndex === index && "primary.main",
              }}
              onClick={() => goToPage(item.link, index)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: activeIndex === index && "purple.main",
                }}
              >
                <item.Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
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
