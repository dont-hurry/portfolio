import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            About
          </Route>
          <Route path="/projects">Projects</Route>
          <Route path="/contact">Contact</Route>
        </Switch>
      </div>
    </Router>
  );
}
