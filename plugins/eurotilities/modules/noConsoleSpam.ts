const originalConsoleMethods: { [key: string]: (...args: unknown[]) => void } =
	{};

export default {
	title: "No Console Spam",
	content: "Filter the console spam.",
	start: () => {
		for (const method of Object.keys(console)) {
			originalConsoleMethods[method] = console[method];

			console[method] = (...args: unknown[]) => {
				const message = args[0];
				if (
					typeof message === "string" &&
					(message.includes("%c[") || message.toLowerCase().includes("sentry"))
				) {
					return;
				}
				originalConsoleMethods[method].apply(console, args);
			};
		}
	},
};