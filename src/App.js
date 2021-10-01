import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          About
        </Route>
        <Route path="/projects">Projects</Route>
        <Route path="/contact">Contact</Route>
      </Switch>
    </Router>
  );
}
