const { flux } = shelter;
const { intercept } = flux;

// biome-ignore lint/complexity/noBannedTypes: N/A
let unintercept: Function | null = null;

export default {
	title: "No Reply Mention",
	content: "Disable replies by default.",
	start: () => {
		unintercept = intercept((dispatch) => {
			if (dispatch.type !== "CREATE_PENDING_REPLY") return;

			dispatch.shouldMention = false;
		});

		return true;
	},
};
