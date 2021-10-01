import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export default function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navigation />

        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
