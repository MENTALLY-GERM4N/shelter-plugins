import modules from "./helpers/modules.ts";

const {
	ui: { showToast },
} = shelter;

export function onLoad() {
	for (const module of Object.keys(modules)) {
		modules[module].start();
	}
}

export function onUnload() {
	showToast({
		title: "Restart Required",
		content: "€tilities requires a restart to disable.",
		onClick() {
			location.reload();
		},
		duration: Number.POSITIVE_INFINITY,
	});
}
