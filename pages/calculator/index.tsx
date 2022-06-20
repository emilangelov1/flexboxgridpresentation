import BackButton from "../../components/backButton/BackButton";
import CalculatorContainer from "../../components/calculator/calculatorContainer/CalculatorContainer";
import DarkCalculatorButton from "../../components/calculator/calculatorButtons/darkCalculatorButtons/DarkCalculatorButtons";
import LightCalculatorButtons from "../../components/calculator/calculatorButtons/lightButtons/LightCalculatorButtons";
import styles from "./styles.module.css";
import CalculatorDisplay from "../../components/calculator/calculatorDisplay/CalculatorContainer";
import { useState } from "react";

const ButtonsArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const Calculator = () => {
  const [number, setNumber] = useState("");
  return (
    <>
      <BackButton />
      <div className={styles.calcContainer}>
        <CalculatorContainer>
          <CalculatorDisplay>{number || 0}</CalculatorDisplay>
          <div className={styles.buttonsContainer}>
            <DarkCalculatorButton
              className={styles.itemAc}
              onClick={() => setNumber("")}
            >
              AC
            </DarkCalculatorButton>
            <DarkCalculatorButton className={styles.itemCE}>
              CE
            </DarkCalculatorButton>
            {ButtonsArray.map((eachButton) => {
              return (
                <LightCalculatorButtons
                  className={styles.eachButton}
                  onClick={(event) => {
                    return setNumber(
                      (prev) =>
                        `${prev}${(event?.target as HTMLElement).innerHTML}`
                    );
                  }}
                >
                  {eachButton}
                </LightCalculatorButtons>
              );
            })}
            <LightCalculatorButtons
              className={styles.itemDot}
              onClick={() => setNumber(`${number}.`)}
            >
              .
            </LightCalculatorButtons>
            <LightCalculatorButtons className={styles.itemMultiply}>
              x
            </LightCalculatorButtons>
            <LightCalculatorButtons className={styles.itemDivision}>
              %
            </LightCalculatorButtons>
            <LightCalculatorButtons
              className={styles.itemMinus}
              onClick={() => setNumber(`${number}-`)}
            >
              -
            </LightCalculatorButtons>
            <LightCalculatorButtons
              className={styles.itemPlus}
              onClick={() => setNumber(`${number}+`)}
            >
              +
            </LightCalculatorButtons>
            <LightCalculatorButtons
              className={styles.itemEquals}
              onClick={() => setNumber(`${number}=`)}
            >
              =
            </LightCalculatorButtons>
          </div>
        </CalculatorContainer>
      </div>
    </>
  );
};

export default Calculator;
