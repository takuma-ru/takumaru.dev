import {
  type FC,
  type PropsWithChildren,
  type ReactNode,
  useMemo,
} from "react";
import Markdown from "react-markdown";

import styles from "./Section.module.scss";

type Props = {
  title: string;
  content: string;
};

export const Section: FC<Props> = ({ title, content }) => {
  return (
    <div className={styles["section-component"]}>
      <h2 className={styles.title}>
        <Markdown>{title}</Markdown>
      </h2>
      <div className={styles.content}>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};
