import { Astal, Gdk } from "ags/gtk4"
import app from "ags/gtk4/app"
import { onCleanup } from "gnim"
import { Workspaces } from "./Widgets/Workspaces"
import { Clock } from "./Widgets/Clock"
import { Tray } from "./Widgets/Tray"
import { Wireless } from "./Widgets/Network"
import { Battery } from "./Widgets/Battery"
import { Bluetooth } from "./Widgets/Bluetooth"
import { Audio } from "./Widgets/Audio"
import { PowerMenu } from "./Widgets/Power-Menu"
import { ThemeToggle } from "./Widgets/Theme-Toggle"
import { Tailscale } from "./Widgets/Tailscale"
import { startHyprlandListener } from "../../event/hyprland-event-listener"

let win: Astal.Window
startHyprlandListener(() => win)

export default function Bar({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  onCleanup(() => {
    win.destroy()
  })

  return (
    <window
      $={(self) => (win = self)}
      visible
      namespace="my-bar"
      class="Bar"
      name={`bar-${gdkmonitor.connector}`}
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
      <centerbox>
        <box $type="start">
          <Workspaces />
        </box>
        <box $type="center">
          <Clock />
        </box>
        <box $type="end">
          <ThemeToggle />
          <Audio />
          <Tailscale />
          <Bluetooth />
          <Tray />
          <Wireless />
          <Battery />
          <PowerMenu />
        </box>
      </centerbox>
    </window>
  )
}
