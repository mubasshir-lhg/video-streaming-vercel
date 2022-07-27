import React, { useState, useContext } from "react";
import Image from "next/image";
import dp from "../../assets/Images/user1.jpg";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { userRoutes, adminRoutes } from "../../routes/routes";
import { UserContext } from "../../context/userContext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiDrawer from "@mui/material/Drawer";
import { DrawerContext } from "../../context/userContext";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  List,
  Box,
} from "@mui/material";

const drawerWidth = 220;

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
const DrawerComp = ({ isSmDown, handleDrawer, open, channel }) => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { activeRoute, setActiveRoute } = useContext(DrawerContext);

  const goToPage = (href, index) => {
    channel ? router.push(`/dashboard/${href}`) : router.push(`/home/${href}`);
    setActiveRoute(index);
  };
  return (
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
            src={user?.profileUrl || dp}
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
        {(channel ? adminRoutes : userRoutes).map((item, index) => (
          <ListItemButton
            key={item.label}
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
              mt: 2,
              backgroundColor: activeRoute === index && "primary.main",
            }}
            onClick={() => goToPage(item.link, index)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: activeRoute === index && "purple.main",
              }}
            >
              <item.Icon />
            </ListItemIcon>
            <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerComp;
