import type * as types from "@uwu/shelter-defs";

interface UserStore extends types.FluxStore {
	getCurrentUser: () => {
		premiumType: number;
		_eurotilities__premiumType: number;
	};
}

const { flux, util } = shelter;
const { awaitDispatch } = util;
const { awaitStore } = flux;

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

export default async () => {
	const user = await getUser();

	user._eurotilities__premiumType = user.premiumType;
	user.premiumType = 2;
};
