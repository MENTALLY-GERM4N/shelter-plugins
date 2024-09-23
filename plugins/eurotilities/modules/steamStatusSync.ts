const { flux } = shelter;
const { dispatcher } = flux;

const statusMap = {
	online: "online",
	idle: "away",
	dnd: "away",
	invisible: "invisible",
};

export default () => {
	dispatcher.subscribe("USER_SETTINGS_PROTO_UPDATE", ({ settings }) => {
		const protoStatus = settings.proto.status;
		const discordStatus = protoStatus.status.value;
		const showCurrentGame = protoStatus.showCurrentGame.value;
		const steamStatus = statusMap[discordStatus];

		if (!showCurrentGame) {
			return open("steam://friends/status/invisible");
		}

		return open(`steam://friends/status/${steamStatus}`);
	});
};
