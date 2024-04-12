import { create } from "@storybook/theming/create";

export default create({
	base: "dark",
	// Typography
	fontBase: "Satoshi, sans-serif",
	fontCode: "monospace",

	//
	colorPrimary: "#60abf0",
	colorSecondary: "#3d8cad",

	// UI
	appBg: "#1d1d1d",
	appContentBg: "#1d1d1d",
	appPreviewBg: "#1d1d1d",
	appBorderColor: "#585C6D",
	appBorderRadius: 8,

	// Text colors
	textColor: "#e0e0e0",
	textInverseColor: "#1d1d1d",

	// Toolbar default and active colors
	barTextColor: "#9E9E9E",
	barSelectedColor: "#585C6D",
	barHoverColor: "#585C6D",
	barBg: "#1d1d1d",

	// Form colors
	inputBg: "#1d1d1d",
	inputBorder: "#e0e0e0",
	inputTextColor: "#e0e0e0",
	inputBorderRadius: 2,
});
