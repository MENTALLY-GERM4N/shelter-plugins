const { flux, patcher } = shelter;
const { stores } = flux;
const { instead } = patcher;
const { MaskedLinkStore } = stores;

export default {
	title: "Always Trust",
	content: 'Remove the "You are leaving Discord" popup.',
	start: () => {
		instead("isTrustedDomain", MaskedLinkStore, () => true, false);
	},
};
