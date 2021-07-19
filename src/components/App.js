import React, { Component } from "react";
//import Header from "./Layouts/header";
//import Footer from "./Layouts/footer";
//Named imports
import { Header, Footer } from "./Layouts";

import Exercises from "./Exercises";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Exercises />
        <Footer />
      </>
    );
  }
}
