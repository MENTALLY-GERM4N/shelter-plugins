const nativeWindow = window as unknown as {
	DiscordNative: {
		window: {
			setDevtoolsCallbacks: (a, b) => VoidFunction;
		};
	};
};

export default () => {
	if (nativeWindow.DiscordNative) {
		// desktop, cannot be unloaded easily
		nativeWindow.DiscordNative.window.setDevtoolsCallbacks(
			() => {},
			() => {},
		);
	}
};
