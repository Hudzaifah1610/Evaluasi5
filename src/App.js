import React, { Component } from "react";
import Header from "./component/navbar";
import "./component/content.css";
import Image from "./component/content";
import Profil from "./component/profil";
import Footer from "./component/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="all">
        <Header />
        <Image />
        <Profil />
        <Footer />
      </div>
    );
  }
}

export default App;
