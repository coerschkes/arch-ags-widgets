import { Astal } from "ags/gtk4"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default()

export function startHyprlandListener(winProvider: () => Astal.Window) {
  hypr.connect("event", (_, event, __) => {
    if (
      event === "changefloatingmode" ||
      event === "activewindowv2" ||
      event === "workspacev2" ||
      event === "fullscreen"
    ) {
      updateVisibility(winProvider())
    }
  })
}

function updateVisibility(win: Astal.Window) {
  if (!win) {
    return
  }
  const client = hypr.focusedClient
  win.visible =
    !client ||
    !client.fullscreen ||
    (client.floating && client.get_x() === -1 && client.get_y() === -1)
}
