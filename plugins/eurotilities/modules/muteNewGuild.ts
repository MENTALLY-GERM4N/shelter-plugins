const { flux, http } = shelter;
const { dispatcher } = flux;
const { patch } = http;

export default {
	title: "Mute New Guilds",
	content: "Auto mute guilds on join.",
	start: () => {
		dispatcher.subscribe(
			"INVITE_ACCEPT_SUCCESS",
			({
				invite: {
					guild: { id },
				},
			}) => {
				if (patch) {
					patch({
						body: {
							muted: true,
							suppress_everyone: true,
							suppress_roles: true,
						},
						url: `/users/@me/guilds/${id}/settings`,
						oldFormErrors: false,
					});
				}
			},
		);
	},
};
