import {useEffect, useState} from "react";
import {createTheme} from "@mui/material";
import {defaultTheme} from "@styles/theme";

const getCurrentMode = () => {
  return localStorage.getItem('mode') === 'dark' ? 'dark' : 'light'
}

const toggleMode = () => {
  if (document.documentElement.classList.contains("light")) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
  } else if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.add("light")
    }
  }
}

export const useModeListener = (passive = false) => {
  const [theme, setTheme] = useState(createTheme(defaultTheme(getCurrentMode())))

  useEffect(() => {
    const handler = () => {
      setTheme(createTheme(defaultTheme(getCurrentMode())))
      toggleMode()
    }

    window.addEventListener('storage', handler, passive)
    return () => {
      window.removeEventListener('storage', handler)
    }
  }, [theme])

  return theme;
}