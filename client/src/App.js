import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar"
import BookSearch from "./components/BookSearch/BookSearch";
import BookSave from "./components/BookSave/BookSave";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={BookSearch} />
        <Route exact path="/Saved" component={BookSave} />
      </div>
    </Router>
  );
}

export default App;
