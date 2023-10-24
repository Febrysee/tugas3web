import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
