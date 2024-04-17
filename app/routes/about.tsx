import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { AboutContainer } from "~/components/routes/about/AboutContainer/AboutContainer";

export async function loader() {
  return json({ name: "Ryan", date: new Date() });
}
const About = () => {
  // const data = useLoaderData<typeof loader>();

  return <AboutContainer />;
};

export default About;
