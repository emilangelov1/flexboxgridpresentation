import { useRouter } from "next/router";
import styles from "./styles.module.css";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className={styles.backContainer}>
      <button className={styles.backButton} onClick={() => router.push("/")}>
        Back
      </button>
    </div>
  );
};

export default BackButton;
