const { flux } = shelter;
const { intercept } = flux;

export default {
	title: "No Reply Mention",
	content: "Disable replies by default.",
	start: () => {
		intercept((dispatch) => {
			if (dispatch.type !== "CREATE_PENDING_REPLY") return;

			dispatch.shouldMention = false;
		});
	},
};
