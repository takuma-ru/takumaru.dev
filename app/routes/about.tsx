import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({ name: "Ryan", date: new Date() });
}
const About = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
