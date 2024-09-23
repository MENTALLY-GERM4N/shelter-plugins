import modules from "./helpers/modules.ts";

const {
	plugin: { store },
	ui: { showToast },
} = shelter;

export function onLoad() {
	for (const module of Object.keys(store)) {
		if (store[module]) {
			if (modules[module].start()) {
				showToast({
					...modules[module],
					title: `${modules[module].title} - Enabled`,
					content: null,
					duration: 0,
				});
			}
		}
	}
}

export function onUnload() {
	for (const module of Object.keys(store)) {
		if (store[module]) {
			if (modules[module].stop()) {
				showToast({
					...modules[module],
					title: `${modules[module].title} - Disabled`,
					content: null,
					duration: 0,
				});
			} else {
				showToast({
					...modules[module],
					title: "Restat Required",
					content: `${modules[module].title} requires a restart to disable.`,
					onClick() {
						location.reload();
					},
					duration: Number.POSITIVE_INFINITY,
				});
			}
		}
	}
}

export * from "./components/settings.tsx";
