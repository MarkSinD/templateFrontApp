import List from "@mui/material/List";
import {Box, CSSObject, Drawer as DrawerDefault, ListItemIcon as ListItemIconMui, styled, Theme, Typography} from "@mui/material";
import {drawerWidth} from "@styles/commonStyles";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: theme.spacing(14)
});

const listComponentsMixin = (): CSSObject => ({
  display: "flex",
  flexFlow: "column nowrap",
  height: "50%"
});

export const LeftToolbarWrapper = styled(Box)(({theme}) => ({
  position: "relative",
  boxShadow: `${theme.spacing(1)} 0 ${theme.spacing(1)} "#fffff`,
}));

export const LogoWrapper = styled(Box)(({theme}) => ({
  paddingTop: theme.spacing(7.5),
  paddingBottom: theme.spacing(0),
  display: "flex",
  width: "100%",
  "& img": {
    width: 30,
    height: 30,
    fill: theme.palette.primary.main
  }
}));

export const LogoText = styled(Typography)(() => ({
  fontSize: 23,
  fontWeight: 700,
  color: "#875f42"
}));

export const ListItemIcon = styled(ListItemIconMui)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  color: theme.palette.background.default
}));

export const ListComponentsTop = styled(List)(() => ({
  ...listComponentsMixin(),
  justifyContent: "flex-start"
}));

export const ListComponentsBottom = styled(List)(() => ({
  ...listComponentsMixin(),
  justifyContent: "flex-end"
}));

interface DrawerProps {
  isOpen: boolean;
}

export const Drawer = styled(DrawerDefault, {
  shouldForwardProp: (prop) => prop !== "isOpen"
})<DrawerProps>(({theme, isOpen}) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  ...(isOpen && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!isOpen && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  }),
  ["& .MuiPaper-root"]: {
    backgroundColor: theme.palette.background.default
  }
}));
