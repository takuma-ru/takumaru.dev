import { Header } from "~/components/layouts/Header/Header";
import styles from "./IndexContainer.module.scss";

export const IndexContainer = () => {
  return (
    <>
      <div className={styles["index-container"]}>
        <img src="/imgs/logo.svg" alt="logo" className={styles["logo"]} />
        <button
          type="button"
          onClick={() => {}}
          style={{
            fontFamily: "Chillax",
            fontWeight: 600,
          }}
        >
          Who is ME ?
        </button>
      </div>
    </>
  );
};
