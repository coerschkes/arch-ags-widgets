import { Gtk } from "ags/gtk4"

export function Tailscale() {
  return (
    <menubutton class={"tailscale"}>
      <label label={''} />
      <popover
        has_arrow={false}
      >
        <box orientation={Gtk.Orientation.VERTICAL}>
        </box>
      </popover>
    </menubutton >
  )
}
