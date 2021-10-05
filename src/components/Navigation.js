import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <a
        href="https://www.cakeresume.com/s--JZtlwnB0Hs1yyXcvvr8Org--/pohanc649"
        target="_blank"
        rel="noreferrer"
        className={styles.resumeButton}
      >
        Resume
      </a>
    </div>
  );
}
