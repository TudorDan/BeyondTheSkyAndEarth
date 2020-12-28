import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SchoolsPage from "./components/pages/SchoolsPage";
import SchoolPage from "./components/pages/SchoolPage";
import SchoolMentorsPage from "./components/pages/SchoolMentorsPage";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/schools" component={SchoolsPage} />
          <Route exact path="/schools/:id" component={SchoolPage} />
          <Route
            exact
            path="/schools/:id/mentors"
            component={SchoolMentorsPage}
          />
        </Switch>
      </main>
    </>
  );
}

export default App;
