import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";
const About = React.lazy(() => import("./pages/about"));
const Projects = React.lazy(() => import("./pages/projects"));
const Contact = React.lazy(() => import("./pages/contact"));

export default function App() {
  return (
    <div>
      Unavailable
      {/* <Router>
        <div className={styles.container}>
          <Navigation />

          <Switch>
            <Suspense fallback="Loading...">
              <Route path="/" exact component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Suspense>
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}
