import { Gtk } from "ags/gtk4"
import { Theme } from "../../../persistence/types"
import { ThemeToggleState } from "../../../state/theme-toggle.state"

export function ThemeToggle() {
  const state = new ThemeToggleState()

  return (
    <menubutton class={"theme-toggle"}>
      <label label={'󰖨'} />
      <popover
        has_arrow={false}
        onShow={(popover) => state.popoverRef = popover}
      >
        <box orientation={Gtk.Orientation.VERTICAL}>
          <button onClicked={() => state.theme = Theme.DARK}>dark</button>
          <button onClicked={() => state.theme = Theme.LIGHT} > light</button>
        </box>
      </popover>
    </menubutton >
  )
}
