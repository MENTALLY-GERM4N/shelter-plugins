const { http } = shelter;
const { intercept } = http;

export default {
	title: "No Typing",
	content: "Stop Discord from sending your typing status.",
	start: () => {
		// @ts-ignore
		intercept("post", /.*typing$/, () => {});

		return true;
	},
};
