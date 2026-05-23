import AstalWp from "gi://AstalWp?version=0.1"
import { createBinding } from "gnim"

export function Audio() {
  const { defaultSpeaker: speaker } = AstalWp.get_default()!
  const percent = createBinding(
    speaker,
    "volume",
  )((v) => `${Math.floor(v * 100)}%`)

  return (
    <menubutton class="wdg-audio">
      <box>
        <image iconName={createBinding(speaker, "volumeIcon")} />
        <label label={percent} />
      </box>
      <popover has_arrow={false}>
        <box>
          <slider
            widthRequest={260}
            onChangeValue={({ value }) => speaker.set_volume(value)}
            value={createBinding(speaker, "volume")}
          />
        </box>
      </popover>
    </menubutton>
  )
}
