import { Gtk } from "ags/gtk4"
import { exec } from "ags/process"

export function PowerMenu() {
  return (
    <menubutton class={'power-menu'}>
      <label label={''} />
      <popover has_arrow={false}>
        <box orientation={Gtk.Orientation.VERTICAL}>
          <box>
            <button onClicked={() => exec('systemctl suspend')}></button>
            <button onClicked={() => exec('hyprctl dispatch exit')}></button>
          </box>
          <box>
            <button onClicked={() => exec('systemctl reboot')}></button>
            <button onClicked={() => exec('systemctl poweroff')}></button>
          </box>
        </box>
      </popover>
    </menubutton>
  )
}
