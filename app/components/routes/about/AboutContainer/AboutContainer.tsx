import type { FC } from "react";

import { CommonLayout } from "~/components/layouts/CommonLayout/CommonLayout";
import styles from "./AboutContainer.module.scss";

type Props = {
  /** Prop type **/
};

export const AboutContainer: FC<Props> = ({}) => {
  return <CommonLayout>About</CommonLayout>;
};
