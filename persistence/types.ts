export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export interface ThemePalette {
  fg: string
  bg: string
  accent: string
  primary: string
}

export interface ConfigData {
  theme: {
    dark: ThemePalette
    light: ThemePalette
  }
}
