import { merge } from "lodash";
import Card from "./Card";
import Lists from "./Lists";
import Paper from "./Paper";
import Input from "./Input";
import Button from "./Button";
import Tooltip from "./Tooltip";
import Backdrop from "./Backdrop";
import Typography from "./Typography";
import IconButton from "./IconButton";
import Autocomplete from "./Autocomplete";
import Drawer from "./Drawer";
import AppBar from "./AppBar";
import Table from "./Table";
import CheckBox from "./Checkbox";
import Calender from "./Calender";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(
    Card(theme),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    Drawer(theme),
    AppBar(theme),
    Table(theme),
    CheckBox(theme),
    Calender(theme),
  );
}
