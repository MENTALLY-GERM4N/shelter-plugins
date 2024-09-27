import { findByProps } from "./webpack.ts";
import type { ShelterApi } from "@uwu/shelter-defs";

const {
	flux: {
		dispatcher: FluxDispatcher,
		stores: { ApplicationStore },
	},
	http: { get, post },
} = shelter as ShelterApi;

const apps = {};
const assetCache = {};
const httpAssetCache = {};

const fetchAssetId = async (applicationId, assetName) => {
	// TO-DO Use APPLICATION_ASSETS_UPDATE and APPLICATION_ASSETS_FETCH
	if (!assetCache[applicationId] && get) {
		try {
			const response = await get(
				`/oauth2/applications/${applicationId}/assets`,
			);

			if (response.status !== 200) {
				console.error("Error fetching resources");
				return null;
			}

			assetCache[applicationId] = response.body;
		} catch (error) {
			console.error("Request failed", error);
			return null;
		}
	}

	// Find the resource ID by its name in the cached resources
	const resource = assetCache[applicationId].find(
		(item) => item.name === assetName,
	);
	return resource ? resource.id : null;
};

const getStuff = findByProps("fetchAssetIds", "getAssetImage");
const fetchHttpAsset = async (applicationId, assetId) => {
	if (!httpAssetCache[assetId]) {
		try {
			const response = await getStuff.fetchAssetIds(applicationId, [assetId]);

			httpAssetCache[assetId] = response[0];
		} catch (error) {
			console.error("Request failed", error);
			return null;
		}
	}

	return httpAssetCache[assetId];
};

// https://images-ext-1.discordapp.net/external/1u9jSonO6pasZ41RA1LGqSbTysKHHF0MzoL0YDeTJg0/https/lh3.googleusercontent.com/fhDgRO0LrPPo9CDqsLQlxR3CVZc8xPmSi9Ja8DKAS5zhoWsZKdj2scyWqBUU2t4DHxK1xcbWKY2Q7cpj%3Dw544-h544-l90-rj?format=webp&width=300&height=300
export function onLoad() {
	const ws = new WebSocket("ws://localhost:1337");

	ws.onmessage = async ({ data }) => {
		const msg = JSON.parse(data);

		if (msg.activity?.assets?.large_image) {
			if (msg.activity.assets.large_image.startsWith("https://")) {
				msg.activity.assets.large_image = await fetchHttpAsset(
					msg.activity.application_id,
					msg.activity.assets.large_image,
				);
			} else {
				msg.activity.assets.large_image = await fetchAssetId(
					msg.activity.application_id,
					msg.activity.assets.large_image,
				);
			}

			if (msg.activity.assets.small_image) {
				if (msg.activity.assets.small_image.startsWith("https://")) {
					msg.activity.assets.small_image = await fetchHttpAsset(
						msg.activity.application_id,
						msg.activity.assets.small_image,
					);
				} else {
					msg.activity.assets.small_image = await fetchAssetId(
						msg.activity.application_id,
						msg.activity.assets.small_image,
					);
				}
			}
		}

		if (msg.activity) {
			// TODO - Support games from DB too lool
			const appId = msg.activity.application_id;
			if (!apps[appId])
				apps[appId] =
					(await (Array.isArray(ApplicationStore)
						? ApplicationStore[0].getApplication(appId)
						: ApplicationStore.getApplication(appId))) || "??";

			const app = apps[appId];
			if (!msg.activity.name) msg.activity.name = app.name;
		}
		//console.warn(msg); ??
		FluxDispatcher.dispatch({
			type: "LOCAL_ACTIVITY_UPDATE",
			...msg,
		}); // set RPC status
	};
}
