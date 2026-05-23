import AstalBattery from "gi://AstalBattery?version=0.1"
import { createBinding } from "gnim"
export function Battery() {
  const battery = AstalBattery.get_default()

  const percent = createBinding(
    battery,
    "percentage",
  )((p) => `${Math.floor(p * 100)}%`)

  return (
    <menubutton visible={createBinding(battery, "isPresent")}>
      <box>
        <image iconName={createBinding(battery, "iconName")} />
        <label label={percent} />
      </box>
    </menubutton>
  )
}
