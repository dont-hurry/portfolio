import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <PageLayout title="I'm Po-Han Chen.">
      <p>
        Hi, there! I'm a <b>frontend developer</b> who builds exquisite
        websites. I'm familiar with <b>JavaScript (ES6+)</b>, <b>CSS</b>, and
        have some knowledge of <b>React</b>, <b>RWD</b> and <b>Node.js</b>. You
        could check out my <Link to="/projects/">projects</Link> to learn more
        about the frontend technologies I use.
      </p>
      <p>
        In 2020, I was in the Academia Sinica and engaged in{" "}
        <b>deep learning-based Natural Language Processing</b> research. I have
        a publication{" "}
        <a
          href="https://link.springer.com/chapter/10.1007/978-3-030-50341-3_7"
          target="_blank"
          rel="noreferrer"
        >
          "Detecting Deceptive Language in Crime Interrogation"
        </a>{" "}
        during that time.
      </p>
      <p>
        I have a Computer Science degree from{" "}
        <a href="https://www.ntu.edu.tw/" target="_blank" rel="noreferrer">
          National Taiwan University
        </a>
        . Before graduation, I worked as an intern at Microsoft, writing unit
        tests and doing research on uploading animated GIF images to PowerPoint
        Online. Then I joined a startup company, responsible for
        blockchain-related things, especially the development of{" "}
        <b>smart contracts</b>.
      </p>
      <p>
        Making websites with both aesthetics and a great user experience gives
        me a sense of accomplishment. If you're interested in working with me,
        feel free to send me an <a href="mailto:pohanc649@gmail.com">email</a>.
      </p>
    </PageLayout>
  );
}
