import styles from "./PageLayout.module.css";
import Canvas from "./Canvas";

export default function PageLayout({ title, children }) {
  return (
    <div>
      <div className={styles.header}>
        {title}
        <Canvas />
      </div>

      <div>{children}</div>
    </div>
  );
}
