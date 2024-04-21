import type { FC } from "react";

import { Divider } from "~/components/common/Divider/Divider";
import { CommonLayout } from "~/components/layouts/CommonLayout/CommonLayout";
import { Section } from "~/components/routes/about/Section/Section";
import styles from "./AboutContainer.module.scss";

const SECTION_CONTENTS = [
  {
    title: "Hi! I am **takumaru**",
    content: "I am a **Japanese** who loves 🐈 and programming.",
  },
  {
    title: "My occupation is **Front-end engineer** .",
    content:
      "I specialize in front-end development of web applications. \n I am very interested in developing front-end OSS such as Vue.js and unjs. I also develop some OSS on my own.",
  },
] as const;

export const AboutContainer: FC = () => {
  return (
    <CommonLayout>
      <main className={styles["about-container-component"]}>
        <div className={styles.title}>
          <h1>How is ME ?</h1>
          <Divider />
        </div>
        {SECTION_CONTENTS.map(({ title, content }) => (
          <Section key={title} title={title} content={content} />
        ))}
      </main>
    </CommonLayout>
  );
};
