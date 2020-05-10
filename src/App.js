import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Services from "./components/services";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Work from "./components/work";
import Contact from "./components/contact";


class App extends Component {
 render() {
  return (
    <div id="colorlib-page">
    <div id="container-wrap">
      <Sidebar></Sidebar>
      <div id="colorlib-main">
        <Introduction></Introduction>
        <About></About>
        <Services></Services>
        <Skills></Skills>
        <Experience></Experience>
        <Work></Work>
        <Contact></Contact>
        {/* <Blog></Blog> */}
        {/* <Timeline></Timeline> */}
      </div>
    </div>
  </div>
  );
 }
}

export default App;
