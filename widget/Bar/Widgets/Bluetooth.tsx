import AstalBluetooth from "gi://AstalBluetooth?version=0.1"
import { createBinding, createComputed } from "gnim"

export function Bluetooth() {
  const bluetooth = AstalBluetooth.get_default()
  const isPowered = createBinding(bluetooth, "isPowered")
  const isConnected = createBinding(bluetooth, "isConnected")

  // todo: onclick stuff? -> search/connect/disconnect/enable/disable/etc.
  const status = createComputed(() =>
    !isPowered() ?
      "󰂲" :
      isConnected() ?
        "(blue)" :
        ""
  )

  return (
    <menubutton class={"bluetooth"}>
      <box>
        <label label={status} />
      </box>
    </menubutton>
  )
}
