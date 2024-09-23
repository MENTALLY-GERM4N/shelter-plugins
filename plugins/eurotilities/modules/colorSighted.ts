import { findByProps } from "../helpers/webpack.ts";

const { Masks } = findByProps("Masks");

const masks = {
	STATUS_ONLINE: Masks.STATUS_ONLINE,
	STATUS_IDLE: Masks.STATUS_IDLE,
	STATUS_DND: Masks.STATUS_DND,
	STATUS_OFFLINE: Masks.STATUS_OFFLINE,
	STATUS_STREAMING: Masks.STATUS_STREAMING,
	STATUS_ONLINE_MOBILE: Masks.STATUS_ONLINE_MOBILE,

	AVATAR_STATUS_ROUND_16: Masks.AVATAR_STATUS_ROUND_16,
	AVATAR_STATUS_ROUND_20: Masks.AVATAR_STATUS_ROUND_20,
	AVATAR_STATUS_ROUND_24: Masks.AVATAR_STATUS_ROUND_24,
	AVATAR_STATUS_ROUND_32: Masks.AVATAR_STATUS_ROUND_32,
	AVATAR_STATUS_ROUND_40: Masks.AVATAR_STATUS_ROUND_40,
	AVATAR_STATUS_ROUND_48: Masks.AVATAR_STATUS_ROUND_48,
	AVATAR_STATUS_ROUND_56: Masks.AVATAR_STATUS_ROUND_56,
	AVATAR_STATUS_ROUND_80: Masks.AVATAR_STATUS_ROUND_80,
	AVATAR_STATUS_ROUND_100: Masks.AVATAR_STATUS_ROUND_100,
	AVATAR_STATUS_ROUND_120: Masks.AVATAR_STATUS_ROUND_120,

	AVATAR_STATUS_MOBILE_16: Masks.AVATAR_STATUS_MOBILE_16,
	AVATAR_STATUS_MOBILE_20: Masks.AVATAR_STATUS_MOBILE_20,
	AVATAR_STATUS_MOBILE_24: Masks.AVATAR_STATUS_MOBILE_24,
	AVATAR_STATUS_MOBILE_32: Masks.AVATAR_STATUS_MOBILE_32,
	AVATAR_STATUS_MOBILE_40: Masks.AVATAR_STATUS_MOBILE_40,
	AVATAR_STATUS_MOBILE_48: Masks.AVATAR_STATUS_MOBILE_48,
	AVATAR_STATUS_MOBILE_56: Masks.AVATAR_STATUS_MOBILE_56,
	AVATAR_STATUS_MOBILE_80: Masks.AVATAR_STATUS_MOBILE_80,
	AVATAR_STATUS_MOBILE_100: Masks.AVATAR_STATUS_MOBILE_100,
	AVATAR_STATUS_MOBILE_120: Masks.AVATAR_STATUS_MOBILE_120,
};

const style = document.createElement("style");
style.id = "__eurotilities-moduleStyle_color-sighted";
style.textContent = `[mask="url(#svg-mask-status-online)"] { width: 10px; height: 10px; x: 22px; y: 22px; }`;

export default {
	title: "Color Sighted",
	content: "Remove the colorblind-friendly icons from statuses.",
	//url(#svg-mask-avatar-status-mobile-32)
	start: () => {
		document.head.appendChild(style);
		Masks.STATUS_DND = masks.STATUS_ONLINE;
		Masks.STATUS_IDLE = masks.STATUS_ONLINE;
		Masks.STATUS_OFFLINE = masks.STATUS_ONLINE;
		Masks.STATUS_STREAMING = masks.STATUS_ONLINE;

		Masks.STATUS_ONLINE_MOBILE = masks.STATUS_ONLINE;

		Masks.AVATAR_STATUS_MOBILE_16 = masks.AVATAR_STATUS_ROUND_16;
		Masks.AVATAR_STATUS_MOBILE_20 = masks.AVATAR_STATUS_ROUND_20;
		Masks.AVATAR_STATUS_MOBILE_24 = masks.AVATAR_STATUS_ROUND_24;
		Masks.AVATAR_STATUS_MOBILE_32 = masks.AVATAR_STATUS_ROUND_32;
		Masks.AVATAR_STATUS_MOBILE_40 = masks.AVATAR_STATUS_ROUND_40;
		Masks.AVATAR_STATUS_MOBILE_48 = masks.AVATAR_STATUS_ROUND_48;
		Masks.AVATAR_STATUS_MOBILE_56 = masks.AVATAR_STATUS_ROUND_56;
		Masks.AVATAR_STATUS_MOBILE_80 = masks.AVATAR_STATUS_ROUND_80;
		Masks.AVATAR_STATUS_MOBILE_100 = masks.AVATAR_STATUS_ROUND_100;
		Masks.AVATAR_STATUS_MOBILE_120 = masks.AVATAR_STATUS_ROUND_120;
		return true;
	},
	stop: () => {
		document.head.removeChild(style);
		Masks.STATUS_DND = masks.STATUS_DND;
		Masks.STATUS_IDLE = masks.STATUS_IDLE;
		Masks.STATUS_OFFLINE = masks.STATUS_OFFLINE;
		Masks.STATUS_STREAMING = masks.STATUS_STREAMING;

		Masks.STATUS_ONLINE_MOBILE = masks.STATUS_ONLINE_MOBILE;

		Masks.AVATAR_STATUS_MOBILE_16 = masks.AVATAR_STATUS_MOBILE_16;
		Masks.AVATAR_STATUS_MOBILE_20 = masks.AVATAR_STATUS_MOBILE_20;
		Masks.AVATAR_STATUS_MOBILE_24 = masks.AVATAR_STATUS_MOBILE_24;
		Masks.AVATAR_STATUS_MOBILE_32 = masks.AVATAR_STATUS_MOBILE_32;
		Masks.AVATAR_STATUS_MOBILE_40 = masks.AVATAR_STATUS_MOBILE_40;
		Masks.AVATAR_STATUS_MOBILE_48 = masks.AVATAR_STATUS_MOBILE_48;
		Masks.AVATAR_STATUS_MOBILE_56 = masks.AVATAR_STATUS_MOBILE_56;
		Masks.AVATAR_STATUS_MOBILE_80 = masks.AVATAR_STATUS_MOBILE_80;
		Masks.AVATAR_STATUS_MOBILE_100 = masks.AVATAR_STATUS_MOBILE_100;
		Masks.AVATAR_STATUS_MOBILE_120 = masks.AVATAR_STATUS_MOBILE_120;
		return true;
	},
};