import type { Preview } from "@storybook/react";

import "app/assets/styles/global.scss";
import "destyle.css";

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "3d8cad",
			values: [
				{
					name: "3d8cad",
					value: "#3d8cad",
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
