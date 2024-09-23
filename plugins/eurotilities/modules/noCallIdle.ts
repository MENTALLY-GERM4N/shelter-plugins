const { flux } = shelter;
const { intercept, dispatcher } = flux;

const dispatchTypes = ["EMBEDDED_ACTIVITY_DISCONNECT", "VOICE_STATE_UPDATES"];

export default {
	title: "No Call Idle",
	content: "Stay in VC forever.",
	start: () => {
		intercept(({ type }) => {
			if (dispatchTypes.includes(type)) {
				const actionHandlers = dispatcher._subscriptions[type] ?? [];

				for (const handler of actionHandlers) {
					if (handler.toString().includes("idleTimeout.start")) {
						actionHandlers.delete(handler);
					}
				}
			}
		});
	},
};