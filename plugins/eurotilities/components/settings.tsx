import modules from "../helpers/modules.ts";

const {
	plugin: { store },
	ui: {
		Divider,
		SwitchItem,
		openModal,
		ModalRoot,
		ModalSizes,
		ModalHeader,
		ModalBody,
		ModalConfirmFooter,
		Button,
		ButtonLooks,
		ButtonColors,
		ButtonSizes,
	},
	React,
} = shelter;

const handleSettingChange = (key, value) => {
	store[key] = value;
};

const camelize = (str: string) => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
			index === 0 ? word.toLowerCase() : word.toUpperCase(),
		)
		.replace(/\s+/g, "");
};

const makeModal = () => {
	const remove = openModal(() => (
		<ModalRoot size={ModalSizes.SMALL}>
			<ModalHeader
				close={() => {
					remove();
				}}
			>
				€tilities Settings
			</ModalHeader>
			<ModalBody>
				<Divider mb />
				{Object.keys(modules).map((module) => {
					const mod = modules[module];
					return (
						<div key={module}>
							<SwitchItem
								value={store[camelize(module)]}
								onChange={(v) => handleSettingChange(camelize(module), v)}
								hideBorder
								// biome-ignore lint/correctness/noChildrenProp: <explanation>
								children=""
							>
								{mod.title}
								<br />
								{mod.content}
							</SwitchItem>
							<Divider mb />
						</div>
					);
				})}
			</ModalBody>
			<ModalConfirmFooter
				close={() => {
					remove();
				}}
				cancelText="Close"
				confirmText="Apply"
				onConfirm={() => {
					location.reload();
				}}
			/>
		</ModalRoot>
	));
};

export const settings = () => {
	return (
		<Button
			look={ButtonLooks.FILLED}
			color={ButtonColors.BRAND}
			size={ButtonSizes.XLARGE}
			onClick={() => {
				(
					document.querySelector('[aria-label="close modal"]') as HTMLElement
				)?.click();
				(
					document.querySelector('[class^="_mroot_"]') as HTMLElement
				)?.classList.add("_active_1dl10_1");
				makeModal();
			}}
			style={{
				width: "100%",
				height: "100%",
			}}
			// biome-ignore lint/correctness/noChildrenProp: N/A
			children="Open Settings"
		/>
	);
};
