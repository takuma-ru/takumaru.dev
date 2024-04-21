import type { FC } from "react";

import { Divider } from "~/components/common/Divider/Divider";
import { CommonLayout } from "~/components/layouts/CommonLayout/CommonLayout";
import { Section } from "~/components/routes/about/Section/Section";
import styles from "./AboutContainer.module.scss";

export const AboutContainer: FC = () => {
  return (
    <CommonLayout>
      <main className={styles["about-container-component"]}>
        <div className={styles.title}>
          <h1>How is ME ?</h1>
          <Divider />
        </div>
        <Section
          titleNode={
            <>
              Hi! I am <strong>takumaru</strong>
            </>
          }
        >
          I am a Japanese who loves cat🐈 and programming.I am currently a
          student, but I have decided to work as a web engineer.My hobbies are
          varied, but I especially enjoy things related to cats, games, and
          searching for artists.I also like to create things, so I became a web
          engineer because I can create various tangible things with a single
          PC.Best regards.
        </Section>
      </main>
    </CommonLayout>
  );
};
