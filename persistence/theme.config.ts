import GLib from "gi://GLib"
import { ConfigData, Theme, ThemePalette } from "./types"
import { readFile, writeFile } from "ags/file"
import App from "ags/gtk4/app"

const THEME_CONFIG_FILE_NAME = ".theme.json"
const THEME_STATE_FILE_NAME = ".theme.state"

export class ThemeConfig {
  private readonly data: ConfigData

  constructor() {
    const path = `${GLib.get_home_dir()}/${THEME_CONFIG_FILE_NAME}`
    const [, raw] = GLib.file_get_contents(path)
    const parsed = JSON.parse(new TextDecoder().decode(raw))
    this.data = parsed
    this.applyTheme()
  }

  get currentTheme() {
    const path = `${GLib.get_home_dir()}/${THEME_STATE_FILE_NAME}`

    try {
      return readFile(path).trim() ?? Theme.DARK
    } catch (error) {
      return Theme.DARK
    }
  }

  set theme(theme: Theme) {
    const path = `${GLib.get_home_dir()}/${THEME_STATE_FILE_NAME}`
    writeFile(path, theme)
    this.applyTheme()
  }

  get activePalette(): ThemePalette {
    switch (this.currentTheme) {
      case Theme.DARK:
        return this.data.theme.dark
      case Theme.LIGHT:
        return this.data.theme.light
      default:
        return this.data.theme.dark
    }
  }

  applyTheme() {
    App.apply_css(
      `
    window {
      --fg: ${this.activePalette.fg};
      --bg: ${this.activePalette.bg};
      --accent: ${this.activePalette.accent};
      --primary: ${this.activePalette.primary};
    }
  `,
    )
  }
}
