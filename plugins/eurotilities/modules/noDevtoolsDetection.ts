const nativeWindow = window as unknown as {
	DiscordNative: {
		window: {
			setDevtoolsCallbacks: (a, b) => VoidFunction;
		};
	};
};

export default {
	title: "No Devtools Detection",
	content: "Prevent annoying devtools detection. (Desktop only)",
	start: () => {
		if (nativeWindow.DiscordNative) {
			// desktop, cannot be unloaded easily
			nativeWindow.DiscordNative.window.setDevtoolsCallbacks(
				() => {},
				() => {},
			);
		}
	},
};
