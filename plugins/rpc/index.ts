const {
    flux: {
        dispatcher: FluxDispatcher,
        stores: { ApplicationStore },
    },
    http,
} = shelter;
const apps = {};
const assetCache = {};

const fetchAssetId = async (applicationId, assetName) => {
    // TO-DO Use APPLICATION_ASSETS_UPDATE and APPLICATION_ASSETS_FETCH
    if (!assetCache[applicationId]) {
        try {
			if (http.get) {
				const response = await http.get(`/oauth2/applications/${applicationId}/assets`);

				if (response.status !== 200) {
					console.error("Error fetching resources");
					return null;
				}
	
				assetCache[applicationId] = response.body;
			}
        } catch (error) {
            console.error("Request failed", error);
            return null;
        }
    }

    // Find the resource ID by its name in the cached resources
    const resource = assetCache[applicationId].find((item) => item.name === assetName);
    return resource ? resource.id : null;
};
export function onLoad() {
	const ws = new WebSocket('ws://127.0.0.1:1337');

	if (ws) ws.onmessage = async x => {
		const msg = JSON.parse(x.data);

		if (msg.activity?.assets?.large_image.startsWith("https://")) {
			msg.activity.assets.large_image = `https://images-ext-1.discordapp.net/external/${msg.activity.assets.large_image.replace("https://", "https/")}?format=webp&width=300&height=300`;
		} else {
			if (msg.activity?.assets?.large_image)
				msg.activity.assets.large_image = await fetchAssetId(
					msg.activity.application_id,
					msg.activity.assets.large_image,
				);
			if (msg.activity?.assets?.small_image)
				msg.activity.assets.small_image = await fetchAssetId(
					msg.activity.application_id,
					msg.activity.assets.small_image,
				);
		}
		if (msg.activity) {
			// TODO - Support games from DB too lool
			const appId = msg.activity.application_id;
			if (!apps[appId]) apps[appId] = (await ApplicationStore.getApplication(appId)) || "Unknown";

			const app = apps[appId];
			if (!msg.activity.name) msg.activity.name = app.name;
		}
		console.warn(msg);
		FluxDispatcher.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", ...msg }); // set RPC statusa
	})) 
}