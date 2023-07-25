import * as React from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Pictures from "./components/sections/pictures/Pictures";
import Header from "./components/sections/Header";

import { Divider } from "@mui/material";
import Landing from "./components/sections/Landing";
import Footer from "./components/sections/Footer";
function App() {
  const about = React.useRef(null);
  const projects = React.useRef(null);
  const pictures = React.useRef(null);
  const scrollToSection = (elementRef: any) => {
    console.log({ elementRef });
    if (elementRef === "about") elementRef = about;
    if (elementRef === "projects") elementRef = projects;
    if (elementRef === "pictures") elementRef = pictures;
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Grid container id="entire-app-grid">
        <Header scrollToSection={scrollToSection} />
        <Landing />
        <Grid flexDirection="column">
          <div ref={about} className="about">
            <About />
          </div>
          {/* <Divider /> */}
          <div
            ref={projects}
            className="projects"
            style={{ padding: "24px 0px" }}
          >
            <Projects />
          </div>
          {/* <Divider /> */}
          <div
            ref={pictures}
            className="pictures"
            style={{ padding: "24px 0px" }}
          >
            <Pictures />
          </div>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
