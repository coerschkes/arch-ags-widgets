import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"
import GLib from "gi://GLib?version=2.0"

export function Clock({ format = "%H:%M" }) {
  const time = createPoll("", 1000, () => {
    return GLib.DateTime.new_now_local().format(format)!
  })

  return (
    <menubutton class='clock'>
      <label label={time} />
      <popover has_arrow={false}>
        <Gtk.Calendar />
      </popover>
    </menubutton>
  )
}
