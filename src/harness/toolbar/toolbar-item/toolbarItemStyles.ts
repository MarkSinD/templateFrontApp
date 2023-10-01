import {ListItemButton as ListItemButtonDefault, ListItemIcon as ListItemIconMui, styled} from "@mui/material";
import {ElementType} from "react";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {purple} from "@styles/colors";

interface ListItemButtonProps {
  isItemActive: boolean;
  isOpen: boolean;
}

export const ListItemIcon = styled(ListItemIconMui)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

interface TypographyTooltipProps {
  isHidden: boolean;
}

export const TypographyTooltip = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isHidden"
})<TypographyTooltipProps>(({sx, isHidden}) => ({
  ...(isHidden && {display: "none"}),
  fontSize: "13px",
  sx
}));

export const ListItemButton = styled(ListItemButtonDefault, {
  shouldForwardProp: (prop) => prop !== "isItemActive" && prop !== "isOpen"
})<ListItemButtonProps>(({isOpen, isItemActive}) => ({
  display: "flex",
  alignItems: "center",
  padding: 0,
  ...(isOpen ? {height: "40px"} : {height: "74px"}),
  ...(isItemActive && {
    backgroundColor: purple[100],
  })
}));

export const LinkToolbar = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
  "a:-webkit-any-link": {
    textDecoration: "none",
  },
  "& .MuiLink-root": {
    textDecoration: "none",
  },
  "&:hover": {
    backgroundColor: purple[500]
  }
}));

export interface ToolbarItemProps {
  name: string,
  componentOutlined: ElementType,
  componentContained: ElementType,
  to: string,
  onItemClick?: () => void,
}