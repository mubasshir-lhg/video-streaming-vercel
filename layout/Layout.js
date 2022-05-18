import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
//components
import SearchField from "../components/SearchField/SearchField";
//images
import Image from "next/image";
import dp from "../assets/Images/user1.jpg";
import logo from "../assets/Images/logo/Teachmetoo Brandmark Full Color .png";
//icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
//mui
import ClickAwayListener from "@mui/base/ClickAwayListener";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import {
  useMediaQuery,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  IconButton,
  Divider,
  Toolbar,
  List,
  Box,
} from "@mui/material";

const drawerWidth = 220;
const sideBarLink = [
  {
    id: "dashboard",
    label: "Dashboard",
    link: "/",
    Icon: DashboardOutlinedIcon,
  },
  {
    id: "analytics",
    label: "Analytics",
    link: "/analytics",
    Icon: TimelineOutlinedIcon,
  },
  {
    id: "editor",
    label: "Editor",
    link: "/editor",
    Icon: PersonAddOutlinedIcon,
  },
  {
    id: "comments",
    label: "Comments",
    link: "/comments",
    Icon: ModeCommentOutlinedIcon,
  },
  {
    id: "subtitles",
    label: "Subtitles",
    link: "/subtitles",
    Icon: SubtitlesOutlinedIcon,
  },
  {
    id: "requests",
    label: "Requests",
    link: "/requests",
    Icon: VideoCallOutlinedIcon,
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
    width: `calc(${theme.spacing(8)} + 18px)`,
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth + 24}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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
  const [navbar, setNavbar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const isSmDown = useMediaQuery(breakpoints.down("md"));

  const handleDrawer = () => {
    setOpen((preState) => !preState);
  };
  const ShowSearchBar = () => {
    setSearchBar((preState) => !preState);
  };

  const goToPage = (href, index) => {
    router.push(href);
    setActiveIndex(index);
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if(isSmDown){
      setOpen(false)
    }else{
      setOpen(true)
    }
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  },[isSmDown]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          py: navbar ? 0.5 : 2,
          backgroundColor: navbar && "secondary.main",
        }}
      >
        <Toolbar>
          <>
            <IconButton
              onClick={handleDrawer}
              edge="start"
              sx={{
                mr: 3,
                ml: 2,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box mt={1} sx={{ ml: !open && 2, flexGrow: 1, minWidth: "25px" }}>
              <Image
                alt="logo"
                src={logo}
                width={40}
                height={40}
                quality={100}
                objectFit="cover"
              />
            </Box>
            {searchBar ? (
              <ClickAwayListener
                onClickAway={() => {
                  setSearchBar(false);
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <SearchField />
                </Box>
              </ClickAwayListener>
            ) : (
              <>
                {isSmDown ? (
                  <IconButton onClick={ShowSearchBar}>
                    <SearchIcon />
                  </IconButton>
                ) : (
                  <Box sx={{ flexGrow: 1 }}>
                    <SearchField />
                  </Box>
                )}
                <IconButton>
                  <VideoCallOutlinedIcon />
                </IconButton>
                <IconButton>
                  <MicNoneOutlinedIcon />
                </IconButton>
                <IconButton>
                  <VideocamOutlinedIcon />
                </IconButton>
                <IconButton>
                  <NotificationsOutlinedIcon />
                </IconButton>
                <Box mt={1} sx={{ minWidth: "25px" }}>
                  <Image
                    alt="Dp"
                    src={dp}
                    width={30}
                    height={30}
                    quality={100}
                    objectFit="cover"
                    className="bar-img"
                  />
                </Box>
              </>
            )}
          </>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
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
          {sideBarLink.map((item, index) => (
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
