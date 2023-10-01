import React, {useCallback, useMemo} from "react";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import BallotIcon from "@mui/icons-material/Ballot";
import {useNavigate} from "react-router";
import {ToolbarItem} from "@harness/toolbar/toolbar-item/ToolbarItem";
import type {PaletteMode} from "@mui/material";
import {useTheme} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {useTranslation} from "react-i18next";
import {useLogoutMutation} from "@api/security/securityApi";
import {useModeUpdate} from "@styles/useModeUpdate";
import {useSnackbar} from "@harness/snackbar";

interface Props {
  open: boolean;
}

export const useLeftToolBar = ({open}: Props) => {
  const {t} = useTranslation(["errors"])
  const [logout] = useLogoutMutation()
  const {showError} = useSnackbar()
  const navigate = useNavigate()
  const {currentMode, updateMode} = useModeUpdate()
  const theme = useTheme()

  const handleLogout = useCallback(() => {
    logout(null).then(() => {
      localStorage.clear()
      navigate("/")
    }).catch((e: string) =>
      showError(`${t("technicalError")}: ${e}`)
    )
  }, []);

  const handleOnItemClick = useCallback(() => {
    // TODO: Отработка нажатия на иконку
  }, []);

  const isLightMode = useCallback((color: PaletteMode) => {
    return color === 'light' ? DarkModeIcon : WbSunnyIcon
  }, [])

  const toolbarItemsTop = useMemo(() => (
    [
      {
        name: "One",
        componentOutlined: BallotOutlinedIcon,
        componentContained: BallotIcon,
        to: "/first"
      },
      {
        name: "Two",
        componentOutlined: BallotOutlinedIcon,
        componentContained: BallotIcon,
        to: "/second"
      },
    ]
  ), []);

  const toolbarItemsBottom = useMemo(() => (
    [
      {
        name: `${theme.palette.mode} `,
        componentOutlined: isLightMode(currentMode),
        componentContained: isLightMode(currentMode),
        to: "/",
        onItemClick: () => updateMode()
      },
      {
        name: "Logout",
        componentOutlined: ExitToAppOutlinedIcon,
        componentContained: BallotIcon,
        to: "/",
        onItemClick: handleLogout
      }
    ]
  ), [currentMode]);

  const toolbarItemsComponentsTop = useMemo(() => toolbarItemsTop.map((toolbarItem) => {
    const isItemActive = toolbarItem.to === location.pathname;
    return <ToolbarItem key={toolbarItem.name} toolbarItem={toolbarItem} onClick={handleOnItemClick} isItemActive={isItemActive} open={open}/>;
  }), [toolbarItemsTop, location.pathname, open]);

  const toolbarItemsComponentsBottom = useMemo(() => toolbarItemsBottom.map((toolbarItem) => {
    const isItemActive = toolbarItem.to === location.pathname;
    return <ToolbarItem key={toolbarItem.name} toolbarItem={toolbarItem} onClick={handleOnItemClick} isItemActive={isItemActive} open={open}/>;
  }), [toolbarItemsBottom, location.pathname, open]);

  return [toolbarItemsComponentsTop, toolbarItemsComponentsBottom];
};