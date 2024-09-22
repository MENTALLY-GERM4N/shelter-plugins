const { flux } = shelter;
const { dispatcher } = flux;

const statusMap = {
	online: "online",
	idle: "away",
	dnd: "away",
	invisible: "invisible",
};

const listener = ({ settings }) => {
	const protoStatus = settings.proto.status;
	const discordStatus = protoStatus.status.value;
	const showCurrentGame = protoStatus.showCurrentGame.value;
	const steamStatus = statusMap[discordStatus];

	if (!showCurrentGame) {
		return open("steam://friends/status/invisible");
	}

	return open(`steam://friends/status/${steamStatus}`);
};

export default {
	title: "Steam Status Sync",
	content: "Sync your Steam Status to your Discord Status.",
	start: () => {
		dispatcher.subscribe("USER_SETTINGS_PROTO_UPDATE", listener);
		return true;
	},
	stop: () => {
		dispatcher.unsubscribe("USER_SETTINGS_PROTO_UPDATE", listener);
		return true;
	},
};
