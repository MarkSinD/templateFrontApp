import {Box} from "@mui/material";
import {memo} from "react";
import {useTranslation} from "react-i18next";

export const AccessDenied = memo(() => {
  const {t} = useTranslation("main")
  return (
    <Box data-testid={"Access-Denied"}>{t('accessDenied')}</Box>
  )
});
AccessDenied.displayName = "AccessDenied";
