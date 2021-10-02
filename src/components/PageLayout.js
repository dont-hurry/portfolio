import styles from "./PageLayout.module.css";
import * as LINKS from "../constants/links";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import Canvas from "./Canvas";

export default function PageLayout({ title, children }) {
  return (
    <div>
      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>{title}</h2>
          <div className={styles.iconsContainer}>
            <a href={LINKS.GITHUB} target="_blank" rel="noreferrer">
              <GithubIcon alt="Link to GitHub" />
            </a>
            <a href={LINKS.LINKEDIN} target="_blank" rel="noreferrer">
              <LinkedInIcon alt="Link to LinkedIn" />
            </a>
          </div>
        </div>

        <Canvas />
      </div>

      <div className={styles.main}>{children}</div>
    </div>
  );
}
