import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  ReactNode,
} from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  className?: string | undefined;
};

const LightCalculatorButtons = ({ ...props }: Props) => {
  return (
    <div className={props.className} style={{ width: "100%", height: "100%" }}>
      <button onClick={props.onClick} className={styles.lightButton}>
        {props.children}
      </button>
    </div>
  );
};

export default LightCalculatorButtons;
