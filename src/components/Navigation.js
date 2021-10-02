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
      <Link to="/resume" className={styles.resumeButton}>
        Resume
      </Link>
    </div>
  );
}
