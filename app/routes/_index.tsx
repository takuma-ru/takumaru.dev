import type { MetaFunction } from "@remix-run/cloudflare";
import { IndexContainer } from "~/components/routes/_index/IndexContainer";

export const meta: MetaFunction = () => {
  return [
    { title: "takumaru.dev" },
    {
      name: "description",
      content: "takumaru.dev - takumaru's personal website.",
    },
  ];
};

export default function Index() {
  return <IndexContainer />;
}
