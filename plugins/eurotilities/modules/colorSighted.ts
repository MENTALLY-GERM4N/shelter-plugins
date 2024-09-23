import { findByProps } from "../helpers/webpack.ts";

const { Masks } = findByProps("Masks");

const style = document.createElement("style");
style.id = "__eurotilities-moduleStyle_color-sighted";
style.textContent = `[mask="url(#svg-mask-status-online)"] { width: 10px; height: 10px; x: 22px; y: 22px; }`;

export default {
	title: "Color Sighted",
	content: "Remove the colorblind-friendly icons from statuses.",
	start: () => {
		document.head.appendChild(style);
		Masks.STATUS_DND = Masks.STATUS_ONLINE;
		Masks.STATUS_IDLE = Masks.STATUS_ONLINE;
		Masks.STATUS_OFFLINE = Masks.STATUS_ONLINE;
		Masks.STATUS_STREAMING = Masks.STATUS_ONLINE;

		Masks.STATUS_ONLINE_MOBILE = Masks.STATUS_ONLINE;

		Masks.AVATAR_STATUS_MOBILE_16 = Masks.AVATAR_STATUS_ROUND_16;
		Masks.AVATAR_STATUS_MOBILE_20 = Masks.AVATAR_STATUS_ROUND_20;
		Masks.AVATAR_STATUS_MOBILE_24 = Masks.AVATAR_STATUS_ROUND_24;
		Masks.AVATAR_STATUS_MOBILE_32 = Masks.AVATAR_STATUS_ROUND_32;
		Masks.AVATAR_STATUS_MOBILE_40 = Masks.AVATAR_STATUS_ROUND_40;
		Masks.AVATAR_STATUS_MOBILE_48 = Masks.AVATAR_STATUS_ROUND_48;
		Masks.AVATAR_STATUS_MOBILE_56 = Masks.AVATAR_STATUS_ROUND_56;
		Masks.AVATAR_STATUS_MOBILE_80 = Masks.AVATAR_STATUS_ROUND_80;
		Masks.AVATAR_STATUS_MOBILE_100 = Masks.AVATAR_STATUS_ROUND_100;
		Masks.AVATAR_STATUS_MOBILE_120 = Masks.AVATAR_STATUS_ROUND_120;
	},
};
