import BackButton from "../../components/backButton/BackButton";
import styles from "./styles.module.css";

const GridArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Grid = () => {
  return (
    <>
      <BackButton />
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {GridArray.map((eachElement) => {
            return <div className={styles.gridElement}>{eachElement}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Grid;
