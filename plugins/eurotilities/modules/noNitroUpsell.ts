import type * as types from "@uwu/shelter-defs";

interface UserStore extends types.FluxStore {
	getCurrentUser: () => {
		premiumType: number;
		_eurotilities__premiumType: number;
	};
}

const { flux } = shelter;
const { awaitStore } = flux;

export default {
	title: "No Nitro Upsell",
	content:
		"Remove ALL of Discord's nitro upsells by tricking the client into thinking you have nitro.",
	start: () => {
		awaitStore("UserStore", true).then((UserStore) => {
			const { getCurrentUser } = UserStore as UserStore;

			getCurrentUser()._eurotilities__premiumType =
				getCurrentUser().premiumType;
			getCurrentUser().premiumType = 2;
		});
		return true;
	},
	stop: () => {
		awaitStore("UserStore", true).then((UserStore) => {
			const { getCurrentUser } = UserStore as UserStore;

			getCurrentUser().premiumType =
				getCurrentUser()._eurotilities__premiumType;
		});
		return true;
	},
};
