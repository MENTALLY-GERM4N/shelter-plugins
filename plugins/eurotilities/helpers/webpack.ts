// Original code taken from https://github.com/Vendicated/Vencord under GPLv3 license

// biome-ignore lint/suspicious/noImplicitAnyLet: N/A
let wreq;
// biome-ignore lint/suspicious/noImplicitAnyLet: N/A
// biome-ignore lint/style/useConst: N/A
let cache;

declare global {
	interface Window {
		// biome-ignore lint/suspicious/noExplicitAny: N/A
		webpackChunkdiscord_app: any[];
	}
}

window.webpackChunkdiscord_app.push([
	[Symbol()],
	{},
	(x) => {
		wreq = x;
	},
]);
window.webpackChunkdiscord_app.pop();
cache = wreq.c;

export const filters = {
	byProps:
		(...props) =>
		(m) =>
			props.every((p) => m[p] !== void 0),
};

export function handleModuleNotFound(method, ...filter) {
	const errMsg = `webpack.${method} found no module. Filter: ${filter}`;
	console.error(new Error(errMsg));
	return { error: errMsg };
}

export function find(filter, { isIndirect = false, isWaitFor = false } = {}) {
	if (typeof filter !== "function") {
		return handleModuleNotFound("find", "Invalid filter function");
	}

	for (const key in cache) {
		const mod = cache[key];
		if (!mod.loaded || !mod?.exports) continue;

		const exports = mod.exports;

		if (filter(exports)) return isWaitFor ? [exports, key] : exports;

		if (exports.default && filter(exports.default)) {
			const found = exports.default;
			return isWaitFor ? [found, key] : found;
		}

		if (typeof exports === "object") {
			for (const nestedKey in exports) {
				if (nestedKey.length > 3) continue;

				const nested = exports[nestedKey];
				if (nested && filter(nested)) {
					return isWaitFor ? [nested, key] : nested;
				}
			}
		}
	}

	if (!isIndirect) {
		return handleModuleNotFound("find", filter);
	}

	return isWaitFor ? [null, null] : null;
}

export function findByProps(...props) {
	const result = find(filters.byProps(...props), { isIndirect: true });
	if (!result || result.error) {
		return handleModuleNotFound("findByProps", ...props);
	}
	return result;
}
