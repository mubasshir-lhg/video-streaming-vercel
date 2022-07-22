import React, { useState, useEffect, useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

import Image from "next/image";
import Badge from "@mui/material/Badge";
import MuiAppBar from "@mui/material/AppBar";
import PopupMenu from "../PopupMenu/PopupMenu";
import dp from "../../assets/Images/user1.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchField from "../SearchField/SearchField";
import logo from "../../assets/Images/logo/logo.png";
import SpeechToText from "../SpeechToText/speechToText";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import NotificationCard from "../Cards/NotificationCard/NotificationCard";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import { UploadVideoModal } from "../Modal/UploadVideoModal/UploadVideoModal";
import { NotificationData } from "../../_mockup/AppBar/Notification";
import { Box, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { UserContext ,DrawerContext} from "../../context/userContext";

const drawerWidth = 220;
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

const AppBarComp = ({ open, handleDrawer, isSmDown, setOpen, setChannel }) => {
  const router = useRouter();
  const { breakpoints } = useTheme();
  const [menuOption, setMenuOption] = useState([]);
  const [navbar, setNavbar] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const isMdDown = useMediaQuery(breakpoints.down("md"));
  const { user, setUser } = useContext(UserContext);
  const { setActiveRoute } = useContext(DrawerContext);

  const switchToChannel = () => {
    router.push("/dashboard/");
    closePopupMenu();
  };
  useEffect(() => {
    if (router.pathname.startsWith("/dashboard")) {
      setChannel(true);
    } else {
      setChannel(false);
    }
  }, [setChannel, router.pathname]);
  const switchToHome = () => {
    setChannel(false);
    closePopupMenu();
    router.push("/home/");
  };
  const logoHandler = () => {
    setChannel(false);
    router.push("/home/");
    setActiveRoute(0)
  };
  const openPopup = Boolean(anchorEl);
  const openPopupMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closePopupMenu = () => {
    setAnchorEl(null);
  };
  const handleCloseModal = () => {
    setOpenUploadModal(false);
  };
  const getSearchValue = (searchVal) => {
    router.push(
      {
        pathname: "/home/searchResult",
        query: { searchVal: searchVal },
      },
      "/home/searchResult"
    );
  };

  const uploadVideo = () => {
    router.push("/home/uploadVideo/splitChapters");
    handleCloseModal();
  };
  const logoutHandler = () => {
    closePopupMenu();
    setChannel(false);
    router.push("auth/login");
  };
  const goToProfile = () => {
    router.push(`/dashboard/profile`);
    closePopupMenu();
    setChannel(true);
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
    { onClickFunc: goToProfile, child: "Profile" },
    { onClickFunc: logoutHandler, child: "Logout" },
  ];
  const menuOptions2 = [
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
  const notificationOption = NotificationData?.map((item, index) => {
    return {
      onClickFunc: closePopupMenu,
      child: <NotificationCard item={item} />,
    };
  });
  const updateMenuOptions = (e, opt) => {
    setMenuOption(opt);
    openPopupMenu(e);
  };

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        py: 2,
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
              ml: { xs: 0, sm: 2 },
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
          <Box sx={{ flexGrow: 1, mr: 2 }}>
            <SearchField getSearchValue={getSearchValue} />
          </Box>
          <SpeechToText />
          {isSmDown ? (
            <IconButton onClick={(e) => updateMenuOptions(e, menuOptions2)}>
              <MoreVertIcon />
            </IconButton>
          ) : (
            <>
              <IconButton onClick={() => setOpenUploadModal(true)}>
                <VideocamOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={(e) => updateMenuOptions(e, notificationOption)}
                sx={{ mr: 1 }}
              >
                <Badge badgeContent={notificationOption.length} color="error">
                  <NotificationsOutlinedIcon />
                </Badge>
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
              src={user ? user.profileUrl : dp}
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
      <UploadVideoModal
        open={openUploadModal}
        handleClose={handleCloseModal}
        onClick={uploadVideo}
      />
    </AppBar>
  );
};

export default AppBarComp;
