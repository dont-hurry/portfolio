import PageLayout from "../components/PageLayout";
import styles from "./projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const featuredProjects = [
  {
    title: "Chazel",
    description:
      "A writer's portfolio website, with JWT-based user authentication and Express-based backend for creating / updating / deleting resources.",
    tags: ["React", "Module CSS", "Express", "JWT"],
    screenshot: "chazel.png",
    linkGitHub: "https://github.com/dont-hurry/chazel",
    linkDemo: "https://practical-booth-92764c.netlify.app/",
  },
  {
    title: "Instagram Clone",
    description:
      "A clone of the Instagram website with basic functions, using React context API and custom hooks.",
    tags: ["React", "Module CSS", "CSS Animation", "Firebase"],
    screenshot: "instagram-clone.png",
    linkGitHub: "https://github.com/dont-hurry/instagram-clone",
    linkDemo: "https://quirky-chandrasekhar-a38dca.netlify.app/",
  },
  {
    title: "人間動物園",
    description:
      "A website that contains an interesting personality test (built with React) to promote a book.",
    tags: ["React", "RWD"],
    screenshot: "zoo.png",
    linkGitHub: "https://github.com/dont-hurry/zoo",
    linkDemo: "https://www.books.com.tw/activity/2019/05/ZOO/",
  },
  {
    title: "Nerd Radio",
    description:
      "A platform for colleagues to share their favorite YouTube videos during my internship. The user interface is first built with Vanilla JavaScript, and then gradually adopted React.",
    tags: ["React", "PHP"],
    screenshot: "nerd-radio.png",
    linkGitHub: "https://github.com/dont-hurry/nerd-radio",
    linkDemo: "https://www.csie.ntu.edu.tw/~b02902059/nerd-radio/",
  },
];

const noteworthyProjects = [
  {
    title: "Ear Beats",
    description: "A demo webpage displaying an animated slide effect to .",
    tags: ["JavaScript", "RWD"],
    screenshot: "ear-beats.png",
    linkGitHub: "https://github.com/dont-hurry/ear-beats",
    linkDemo: "https://admiring-kalam-72669d.netlify.app/",
  },
  {
    title: "Scroll Percentage",
    description:
      "A Google Chrome extension showing how far you've scrolled. It's useful when reading long webpages.",
    tags: ["JavaScript"],
    screenshot: "scroll-percentage.png",
    linkGitHub: "https://github.com/dont-hurry/scroll-percentage",
    linkDemo: null,
  },
  {
    title: "BT21 App",
    description:
      "A React Native (Expo) App for introducing BT21's cartoonish characters.",
    tags: ["React Native (Expo)"],
    screenshot: "bt21-app.png",
    linkGitHub: "https://github.com/dont-hurry/bt21-app",
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
