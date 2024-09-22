export default {
	title: "No Typing Animation",
	content: "Disable the CPU-intensive typing dots animation.",
	start: () => {
		document.hasFocus = () => {
			return false;
		};
		return true;
	},
	stop: () => false,
};
