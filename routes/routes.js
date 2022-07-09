import HomeIcon from "@mui/icons-material/Home";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import HistoryIcon from "@mui/icons-material/History";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";

export const userRoutes = [
  {
    id: "home",
    label: "Home",
    link: "",
    Icon: HomeIcon,
  },
  {
    id: "yourVideos",
    label: "Your Videos ",
    link: "channelProfile",
    Icon: FlipCameraAndroidIcon,
  },
  {
    id: "history",
    label: "History",
    link: "history",
    Icon: HistoryIcon,
  },
];
export const adminRoutes = [
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
