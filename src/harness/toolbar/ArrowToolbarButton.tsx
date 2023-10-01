import {CSSObject, IconButton as DefaultButton, styled, Theme} from "@mui/material";
import React, {memo, useMemo} from "react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import {drawerWidth} from "@styles/commonStyles";

interface Props {
  isOpen: boolean,
  hasBorder: boolean,
  disabled?: boolean,
}

interface ArrowToolbarButtonProps {
  isOpen: boolean,
  hasBorder: boolean,
}

const openedMixin = (theme: Theme): CSSObject => ({
  left: `calc(${drawerWidth}px - 11px)`,
  transition: theme.transitions.create("left", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })
});

const closedMixin = (theme: Theme): CSSObject => ({
  left: theme.spacing(12),
  transition: theme.transitions.create("left", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
});

const Button = styled(DefaultButton, {
  shouldForwardProp: (prop) => prop !== "isOpen" && prop !== "hasBorder"
})<ArrowToolbarButtonProps>(({ theme, isOpen, hasBorder }) => ({
  position: "fixed",
  top: theme.spacing(11),
  width: theme.spacing(6),
  height: theme.spacing(6),
  zIndex: 2000,
  ...(isOpen ? {
    ...openedMixin(theme)
  } : {
    ...closedMixin(theme)
  }),
  ...(hasBorder && {
    width: theme.spacing(5),
    height: theme.spacing(5),
    border: "1px solid",
    borderRadius: "50%"
  })
}));

export const ArrowToolbarButton = memo(({
  disabled = false,
  hasBorder,
  isOpen
}: Props) => {

  const Component = useMemo(() =>
      isOpen ? ChevronLeftOutlinedIcon : ChevronRightOutlinedIcon,
    [isOpen]
  );

  return (
    <Button
      disabled={disabled}
      isOpen={isOpen}
      hasBorder={hasBorder}
    >
      <Component/>
    </Button>
  );
});

ArrowToolbarButton.displayName = "ArrowToolbarButton";