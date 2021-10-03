import PageLayout from "../components/PageLayout";
import styles from "./projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const featuredProjects = [
  {
    title: "Chazel",
    description: "A writer's portfolio website.",
    tags: ["React", "Module CSS"],
    screenshot: "chazel.png",
    linkGitHub: "https://github.com/dont-hurry/chazel",
    linkDemo: null,
  },
  {
    title: "Instagram Clone",
    description: "A clone of the Instagram website with basic functions.",
    tags: ["React", "Module CSS", "Firebase"],
    screenshot: "instagram-clone.png",
    linkGitHub: "https://github.com/dont-hurry/instagram-clone",
    linkDemo: null,
  },
  {
    title: "人間動物園",
    description:
      "A website that contains an interesting personality test to promote a book.",
    tags: ["React", "RWD"],
    screenshot: "zoo.png",
    linkGitHub: null,
    linkDemo: "https://www.books.com.tw/activity/2019/05/ZOO/",
  },
  {
    title: "Nerd Radio",
    description:
      "A platform for colleagues to share their favorite YouTube videos.",
    tags: ["JavaScript", "PHP"],
    screenshot: null,
    linkGitHub: null,
    linkDemo: null,
  },
];

const noteworthyProjects = [
  {
    title: "Ear Beats",
    description: "",
    tags: ["JavaScript"],
    screenshot: null,
    linkGitHub: null,
    linkDemo: null,
  },
  {
    title: "Scroll Percentage",
    description:
      "A Google Chrome extension showing how far you've scrolled. It's useful when reading long webpages.",
    tags: ["JavaScript"],
    screenshot: null,
    linkGitHub: "https://github.com/dont-hurry/scroll-percentage",
    linkDemo: null,
  },
  {
    title: "BT21 App",
    description:
      "A React Native App for introducing BT21's cartoonish characters.",
    tags: ["React Native"],
    screenshot: null,
    linkGitHub: null,
    linkDemo: null,
  },
];

function Item({ item }) {
  const { title, description, tags, screenshot, linkGitHub, linkDemo } = item;

  return (
    <div className={styles.itemWrapper}>
      <div
        className={styles.screenshot}
        style={{ backgroundImage: `url(/images/screenshots/${screenshot})` }}
      />

      <div className={styles.textContainer}>
        <div className={styles.tagsContainer}>
          {tags.map((tag) => (
            <div key={tag} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>

        <div className={styles.titleContainer}>
          <h3>{title}</h3>
          {linkGitHub && (
            <a href={linkGitHub} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
          )}
          {linkDemo && (
            <a href={linkDemo} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className={styles.icon}
              />
            </a>
          )}
        </div>
        <div className={styles.descriptionWrapper}>{description}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <PageLayout title="Projects">
      <div className={styles.container}>
        <h2>Featured Projects</h2>
        <div className={styles.itemsContainer}>
          {featuredProjects.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>

        <h2>Other Noteworthy Projects</h2>
        <div className={styles.itemsContainer}>
          {noteworthyProjects.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
