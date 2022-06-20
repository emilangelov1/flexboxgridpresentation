import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children?: ReactNode;
};

const CalculatorDisplay = ({ ...props }: Props) => {
  return <div className={styles.display}>{props.children}</div>;
};

export default CalculatorDisplay;
