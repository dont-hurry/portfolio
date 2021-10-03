import styles from "./PageLayout.module.css";
import * as LINKS from "../constants/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Canvas from "./Canvas";

export default function PageLayout({ title, children }) {
  return (
    <div>
      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>{title}</h2>
          <div className={styles.iconsContainer}>
            <a href={LINKS.GITHUB} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a href={LINKS.LINKEDIN} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
          </div>
        </div>

        <Canvas />
      </div>

      <div className={styles.main}>{children}</div>
    </div>
  );
}
