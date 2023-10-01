import React, {memo, useState} from "react";
import {Box} from "@mui/material";
import {useLeftToolBar} from "@harness/toolbar/left-toolbar/useLeftToolBar";
import {ArrowToolbarButton} from "@harness/toolbar/ArrowToolbarButton";
import Logo from "@assets/logo.png";
import {useTranslation} from "react-i18next";
import {Drawer, LeftToolbarWrapper, ListComponentsBottom, ListComponentsTop, ListItemIcon, LogoText, LogoWrapper} from "./leftToolbarStyles"

export const LeftToolbar = memo(() => {
  const [open, setOpen] = useState(false);
  const [toolbarItemsComponentsTop, toolbarItemsComponentsBottom] = useLeftToolBar({open});
  const {t} = useTranslation("main")

  return (
    <LeftToolbarWrapper onClick={() => setOpen(prevState => !prevState)}>
      <ArrowToolbarButton
        isOpen={open}
        hasBorder
      />
      <Drawer variant="permanent" isOpen={open}>
        <LogoWrapper>
          <ListItemIcon>
            <Box component="img" src={Logo} alt="Logo"/>
          </ListItemIcon>
          <LogoText>{t("titleLogo")}</LogoText>
        </LogoWrapper>
        <ListComponentsTop onClick={(e) => e.stopPropagation()}>
          {toolbarItemsComponentsTop}
        </ListComponentsTop>
        <ListComponentsBottom onClick={(e) => e.stopPropagation()}>
          {toolbarItemsComponentsBottom}
        </ListComponentsBottom>
      </Drawer>
    </LeftToolbarWrapper>
  );
});

LeftToolbar.displayName = "LeftToolbar";
