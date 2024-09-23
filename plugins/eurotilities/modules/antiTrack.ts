const { http } = shelter;
const { intercept } = http;

export default () => {
	try {
		(
			window as unknown as {
				__SENTRY__: {
					hub: {
						getClient: () => { getOptions: () => { enabled: boolean } };
					};
				};
			}
		).__SENTRY__.hub
			.getClient()
			.getOptions().enabled = false;
		for (const x of Object.keys(console)) {
			console[x] = console[x].__sentry_original__ ?? console[x];
		}
	} catch {}

	// @ts-ignore
	intercept("post", /^\/science|^\/error-reporting-proxy/, () => {});
};
