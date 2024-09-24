const { flux, util } = shelter;
const { awaitDispatch } = util;
const { awaitStore } = flux;

import type { FluxStore } from "@uwu/shelter-defs";

interface UserStore extends FluxStore {
	getCurrentUser: () => {
		premiumType: undefined | number;
		_real_premiumType: undefined | number;
	};
}

const getUser = async () => {
	const UserStore = await awaitStore("UserStore", true);

	const { getCurrentUser } = UserStore as unknown as UserStore;

	let user = getCurrentUser();

	if (!user) {
		await awaitDispatch("CONNECTION_OPEN");
		user = getCurrentUser();
	}

	return user;
};

export const onLoad = async () => {
	const user = await getUser();

	user._real_premiumType = user.premiumType;
	user.premiumType = 2;
};

export const onUnload = async () => {
	const user = await getUser();

	user.premiumType = user._real_premiumType;
	user._real_premiumType = undefined;
};
