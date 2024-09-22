import modules from "../helpers/modules.ts";

const {
	plugin: { store },
	ui: { SwitchItem, tooltip },
	React,
} = shelter;

const handleSettingChange = (key, value) => {
	store[key] = value;
};

export const settings = () => {
	return (
		<>
			<div use:tooltip="Remove the colorblind-friendly icons from statuses.">
				<SwitchItem
					value={store.colorSighted}
					onChange={(v) => handleSettingChange("colorSighted", v)}
					hideBorder
					// biome-ignore lint/correctness/noChildrenProp: N/A
					children="Color Sighted"
				/>
			</div>

			<div use:tooltip="Remove ALL of Discord's nitro upsells by tricking the client into thinking you have nitro.">
				<SwitchItem
					value={store.noNitroUpsell}
					onChange={(v) => handleSettingChange("noNitroUpsell", v)}
					hideBorder
					// biome-ignore lint/correctness/noChildrenProp: N/A
					children="No Nitro Upsell"
				/>
			</div>

			<div use:tooltip="Disable the CPU-intensive typing dots animation.">
				<SwitchItem
					value={store.noTypingAnimation}
					onChange={(v) => handleSettingChange("noTypingAnimation", v)}
					hideBorder
					// biome-ignore lint/correctness/noChildrenProp: N/A
					children="No Typing Animation"
				/>
			</div>

			<div use:tooltip="Sync your Steam Status to your Discord Status.">
				<SwitchItem
					value={store.steamStatusSync}
					onChange={(v) => handleSettingChange("steamStatusSync", v)}
					hideBorder
					// biome-ignore lint/correctness/noChildrenProp: N/A
					children="Steam Status Sync"
				/>
			</div>
		</>
	);
};
