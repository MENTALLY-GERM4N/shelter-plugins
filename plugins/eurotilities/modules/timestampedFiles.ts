const { flux } = shelter;
const { intercept } = flux;

export default {
	title: "Timestamped Files",
	content: "Rename uploaded files to the current timestamp.",
	start: () => {
		intercept((dispatch) => {
			if (dispatch?.type === "UPLOAD_ATTACHMENT_ADD_FILES") {
				for (const { file } of dispatch?.files ?? []) {
					if (!file?.name) continue;

					let newFilename = Date.now().toString();

					if (file.name.includes(".")) {
						newFilename += file.name.slice(file.name.lastIndexOf("."));
					}

					Object.defineProperty(file, "name", {
						value: newFilename,
					});
				}
				return dispatch;
			}
		});
	},
};
