import * as React from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Pictures from "./components/sections/Pictures";
import Header from "./components/sections/Header";

import { Divider } from "@mui/material";
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
      <Grid
        container
        id="entire-app-grid"
        // flexDirection="column"
      >
        <Header scrollToSection={scrollToSection} />
        <Grid
          // container
          // id="entire-app-grid"
          flexDirection="column"
          px={3}
          py={3}
        >
          {/* <Landing /> */}
          <div ref={about} className="about">
            <About />
          </div>
          <Divider />
          <div ref={projects} className="projects">
            <Projects />
          </div>
          <Divider />
          <div ref={pictures} className="pictures">
            <Pictures />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
