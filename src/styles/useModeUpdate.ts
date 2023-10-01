import {PaletteMode} from "@mui/material";

export const useModeUpdate = () => {
  const currentMode: PaletteMode = localStorage.getItem('mode') === 'light' ? 'light' : 'dark'
  const updateMode = () => {
    const futureMode: PaletteMode = currentMode === 'dark' ? 'light' : 'dark'
    localStorage.setItem('mode', futureMode)
    window.dispatchEvent(new Event("storage"));
  }
  return {currentMode, updateMode}
}