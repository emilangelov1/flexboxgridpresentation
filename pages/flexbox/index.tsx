import BackButton from "../../components/backButton/BackButton";
import styles from "./styles.module.css";

const Flexbox = () => {
  return (
    <>
      <BackButton />
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.crossAxis}>
            <p className={styles.crossAxisText}>Cross Axis</p>
          </div>
          <div className={styles.mainAxis}>Main Axis</div>
        </div>
        <div className={styles.flexItemsContainer}>
          <div className={styles.flexExampleBox1}></div>
          <div className={styles.flexExampleBox2}></div>
          {/* <div className={styles.flexExampleBox3}></div>
          <div className={styles.flexExampleBox4}></div> */}
        </div>
      </div>
    </>
  );
};

export default Flexbox;
