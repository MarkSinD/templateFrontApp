import {useTranslation} from "react-i18next";
import {setLocale} from "yup";
import {memo, ReactNode} from "react";

interface Props {
  children: ReactNode
}

export const YupProvider = memo(({children}: Props) => {
  const {t} = useTranslation(['validation'])
  const required = t("required")
  const number = t("number")

  setLocale({
    mixed: {
      required: required,
      notType: number,
    }
  });

  return (
    <>
      {children}
    </>
  )
})

YupProvider.displayName = "YupProvider"

