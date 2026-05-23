import { Gtk } from "ags/gtk4"
import { Theme } from "../persistence/types"
import { ThemeConfig } from "../persistence/theme.config"

export class ThemeToggleState {
  private readonly config: ThemeConfig
  private _popoverRef: Gtk.Popover | null = null

  constructor() {
    this.config = new ThemeConfig()
  }

  set popoverRef(ref: Gtk.Popover) {
    this._popoverRef = ref
  }

  set theme(theme: Theme) {
    this.config.theme = theme
    this._popoverRef?.popdown()
  }
}
