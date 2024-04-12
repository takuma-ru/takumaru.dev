import { Button } from "~/components/common/Button/Button";
import { Header } from "~/components/layouts/Header/Header";
import styles from "./IndexContainer.module.scss";

export const IndexContainer = () => {
  return (
    <>
      <div className={styles["index-container"]}>
        <img src="/imgs/logo.svg" alt="logo" className={styles["logo"]} />
        <Button fontFamily="chillax">Who is ME ?</Button>
      </div>
    </>
  );
};
