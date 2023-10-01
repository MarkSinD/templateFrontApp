import {Box, ListItemText} from "@mui/material";
import React, {memo, MouseEvent as ME, useMemo} from "react";
import {LinkToolbar, ListItemButton, ListItemIcon, ToolbarItemProps, TypographyTooltip} from "@harness/toolbar/toolbar-item/toolbarItemStyles";

interface Props {
  toolbarItem: ToolbarItemProps,
  onClick: (e: ME<HTMLDivElement, MouseEvent>) => void,
  isItemActive: boolean,
  open: boolean
}

export const ToolbarItem = memo(({toolbarItem, onClick: handleOnItemClick, isItemActive, open}: Props) => {
  const {name, componentOutlined: ComponentIconOutlined, componentContained: ComponentIconContained, to, onItemClick} = toolbarItem;

  const ComponentIcon = useMemo(() => isItemActive ? ComponentIconContained : ComponentIconOutlined, [isItemActive]);

  const contentItem = useMemo(() => (
    <ListItemButton
      key={name}
      isItemActive={isItemActive}
      onClick={handleOnItemClick}
      isOpen={open}
    >
      <ListItemIcon>
        <ComponentIcon/>
        <TypographyTooltip isHidden={open}>{name}</TypographyTooltip>
      </ListItemIcon>
      <ListItemText sx={{mt: 0, mb: 0}}>
        <TypographyTooltip isHidden={!open}>
          {name}
        </TypographyTooltip>
      </ListItemText>
    </ListItemButton>
  ), [name, isItemActive, open]);

  if (onItemClick) {
    return (
      <Box onClick={onItemClick}>
        {contentItem}
      </Box>
    );
  } else {
    return (
      <LinkToolbar to={to}>
        {contentItem}
      </LinkToolbar>
    );
  }
});

ToolbarItem.displayName = "ToolbarItem";