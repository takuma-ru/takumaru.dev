import { json } from "@remix-run/cloudflare";

export const loader = async () => {
	return json({ message: "Hello World" });
};

export type IndexLoaderData = typeof loader;
