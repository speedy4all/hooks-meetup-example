import React from "react";
import "./styles.css";
import { Router } from "@reach/router";
import CatInfoList from "./components/cat-info-list";
import CatServicesProvider from "./components/cat-services-provider";
import CatInfo from "./components/cat-info";
// import CatInfoClass from "./components/cat-info-class";

export default function App() {
  return (
    <div className="App">
      <h1>List of services</h1>
      <CatServicesProvider>
        <Router>
          <CatInfoList path="/" />
          <CatInfo path="/services/:type" />
        </Router>
      </CatServicesProvider>
    </div>
  );
}
