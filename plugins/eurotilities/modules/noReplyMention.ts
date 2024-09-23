const { flux } = shelter;
const { intercept } = flux;

export default () => {
	intercept((dispatch) => {
		if (dispatch.type !== "CREATE_PENDING_REPLY") return;

		dispatch.shouldMention = false;
	});
};
