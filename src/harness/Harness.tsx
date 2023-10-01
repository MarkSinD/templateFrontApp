import React, {memo, ReactNode} from "react";
import {Box, styled} from "@mui/material";
import {LeftToolbar} from "@harness/toolbar";

const HarnessWrapper = styled(Box)(() => ({
  flexGrow: 1,
  height: "100vh",
  zIndex: 1,
  overflow: "hidden",
  position: "relative",
  display: "flex",
}));

const Workspace = styled(Box)(({theme}) => ({
  flexGrow: 1,
  overflowY: "auto",
  padding: theme.spacing(6)
}));

interface Props {
  children: ReactNode
}

export const Harness = memo(({children}: Props) => {
  return (
    <HarnessWrapper>
      <LeftToolbar/>
      <Workspace>
        {children}
      </Workspace>
    </HarnessWrapper>);
});

Harness.displayName = "Harness"
