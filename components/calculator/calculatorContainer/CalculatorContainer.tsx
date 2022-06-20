import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

const CalculatorContainer = ({ ...props }: Props) => {
  return <div className={styles.calculator}>{props.children}</div>;
};

export default CalculatorContainer;
