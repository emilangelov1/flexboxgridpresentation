import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button onClick={() => router.push("/flexbox")}>Flexbox</button>
      <button onClick={() => router.push("/grid")}>Grid</button>
      <button onClick={() => router.push("/calculator")}>
        Calculator Example
      </button>
    </div>
  );
};

export default Home;
