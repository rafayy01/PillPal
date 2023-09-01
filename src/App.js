import "./App.css";
// import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInSlide from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import MedicineForm from "./components/add-medicine/MedicineForm";
import React, { createContext } from "react";
import { useState } from "react";
import { AppContextProvider } from "./components/AppContext";
import axios from "axios";

function App() {
 
  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={SignInSlide} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/add-medicine" component={MedicineForm} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
