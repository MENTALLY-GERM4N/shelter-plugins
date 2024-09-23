import modules from "./helpers/modules.ts";

const {
	plugin: { store },
	ui: { showToast },
} = shelter;

export function onLoad() {
	for (const module of Object.keys(store)) {
		if (store[module]) {
			modules[module].start();
		}
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

export * from "./components/settings.tsx";
