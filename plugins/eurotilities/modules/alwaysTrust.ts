const { flux, patcher } = shelter;
const { stores } = flux;
const { instead } = patcher;
const { MaskedLinkStore } = stores;

export default () => {
	instead("isTrustedDomain", MaskedLinkStore, () => true, false);
};
