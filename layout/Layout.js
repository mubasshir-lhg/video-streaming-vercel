import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
//components
import SearchField from "../components/SearchField/SearchField";
import Head from "next/head";
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
import VideoCallIcon from "@mui/icons-material/VideoCall";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//mui
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
  Menu,
  MenuItem,
} from "@mui/material";
import { RequestModal } from "../components/Modal/RequestAVideo/RequestAVideo";
import { UploadVideoModal } from "../components/Modal/UploadVideoModal/UploadVideoModal";
import PopupMenu from "../components/PopupMenu/PopupMenu";

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
    id: "time",
    label: "Time",
    link: "time",
    Icon: AccessTimeIcon,
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
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [channel, setChannel] = useState(false);
  const [menuOption, setMenuOption] = useState([]);
  const isMdDown = useMediaQuery(breakpoints.down("md"));
  const isSmDown = useMediaQuery(breakpoints.down("sm"));

  const getSearchValue = (searchVal) => {
    router.push(
      {
        pathname: "/home/searchVideos",
        query: { searchVal: searchVal },
      },
      "/home/searchVideos"
    );
  };
  const logoHandler = () => {
    router.push("/home/");
    setChannel(false);
  };
  const uploadVideo = () => {
    router.push("/home/splitChapters");
    handleCloseModal();
  };
  const openPopup = Boolean(anchorEl);
  const openPopupMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closePopupMenu = () => {
    setAnchorEl(null);
  };
  const switchToChannel = () => {
    setChannel(true);
    closePopupMenu();
    router.push("/dashboard/");
  };
  const switchToHome = () => {
    setChannel(false);
    closePopupMenu();
    router.push("/home/");
  };
  const handleDrawer = () => {
    setOpen((preState) => !preState);
  };
  const handleCloseModal = () => {
    setOpenRequestModal(false);
    setOpenUploadModal(false);
  };
  const goToPage = (href, index) => {
    channel ? router.push(`/dashboard/${href}`) : router.push(`/home/${href}`);
    setActiveIndex(index);
  };
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (isMdDown) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, [isMdDown]);

  const menuOptions1 = [
    { onClickFunc: switchToChannel, child: "Your Channel" },
    { onClickFunc: switchToHome, child: "Home" },
    { onClickFunc: closePopupMenu, child: "Logout" },
  ];
  const menuOptions2 = [
    {
      onClickFunc: () => {
        setOpenRequestModal(true);
        closePopupMenu();
      },
      child: (
        <>
          <VideoCallOutlinedIcon sx={{ pr: 1 }} />
          Request Video
        </>
      ),
    },
    {
      onClickFunc: closePopupMenu,
      child: (
        <>
          <MicNoneOutlinedIcon sx={{ pr: 1 }} />
          Voice
        </>
      ),
    },
    {
      onClickFunc: () => {
        setOpenUploadModal(true);
        closePopupMenu();
      },
      child: (
        <>
          <VideocamOutlinedIcon sx={{ pr: 1 }} />
          Upload video
        </>
      ),
    },
    {
      onClickFunc: closePopupMenu,
      child: (
        <>
          <NotificationsOutlinedIcon sx={{ pr: 1 }} />
          Notification
        </>
      ),
    },
  ];

  const updateMenuOptions = (e, opt) => {
    setMenuOption(opt);
    openPopupMenu(e);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Head>
        <title>Alex-Lei</title>
      </Head>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          py: navbar ? 0.5 : 2,
          backgroundColor: navbar && "#2f3566",
        }}
      >
        <Toolbar>
          <>
            <IconButton
              onClick={handleDrawer}
              edge="start"
              sx={{
                mr: { xs: 0, sm: 3 },
                ml: 2,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              mt={1}
              sx={{ flexGrow: 1, minWidth: "25px", cursor: "pointer" }}
              onClick={logoHandler}
            >
              <Image
                alt="logo"
                src={logo}
                width={40}
                height={40}
                quality={100}
                objectFit="cover"
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <SearchField getSearchValue={getSearchValue} />
            </Box>
            {isSmDown ? (
              <IconButton onClick={(e) => updateMenuOptions(e, menuOptions2)}>
                <MoreVertIcon />
              </IconButton>
            ) : (
              <>
                <IconButton onClick={() => setOpenRequestModal(true)}>
                  <VideoCallOutlinedIcon />
                </IconButton>
                <IconButton>
                  <MicNoneOutlinedIcon />
                </IconButton>
                <IconButton onClick={() => setOpenUploadModal(true)}>
                  <VideocamOutlinedIcon />
                </IconButton>
                <IconButton>
                  <NotificationsOutlinedIcon />
                </IconButton>
              </>
            )}
            <Box
              mt={1}
              sx={{ minWidth: "25px", cursor: "pointer" }}
              id="basic-button"
              aria-controls={openPopup ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openPopup ? "true" : undefined}
              onClick={(e) => updateMenuOptions(e, menuOptions1)}
            >
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
            <PopupMenu
              anchorEl={anchorEl}
              open={openPopup}
              onClose={closePopupMenu}
              options={menuOption}
            />
          </>
        </Toolbar>
      </AppBar>
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

      <RequestModal open={openRequestModal} handleClose={handleCloseModal} />
      <UploadVideoModal
        open={openUploadModal}
        handleClose={handleCloseModal}
        onClick={uploadVideo}
      />
    </Box>
  );
}
