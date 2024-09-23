const { http } = shelter;
const { intercept } = http;

export default () => {
	// @ts-ignore
	intercept("post", /.*typing$/, () => {});
};
