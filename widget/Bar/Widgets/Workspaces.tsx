import AstalHyprland from "gi://AstalHyprland?version=0.1"
import { createBinding } from "gnim"

export function Workspaces() {
  const hyprland = AstalHyprland.get_default()
  const workspace = createBinding(hyprland, "focusedWorkspace")
    .as(ws => String(ws.id))

  return (
    <menubutton class={"workspaces"}>
      <box>
        <label label={workspace} />
      </box>
    </menubutton>
  )
}
