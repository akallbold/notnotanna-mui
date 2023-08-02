import * as React from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Pictures from "./components/sections/pictures/Pictures";
import Header from "./components/sections/Header";
import Landing from "./components/sections/Landing";
import Footer from "./components/sections/Footer";
// import Fonts from "./components/sections/Fonts";

function App() {
  const about = React.useRef(null);
  const projects = React.useRef(null);
  const pictures = React.useRef(null);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scrollToSection = (elementRef: any) => {
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
      <Grid container flexDirection="column">
        {windowWidth > 768 && <Header scrollToSection={scrollToSection} />}
        <Landing />
        {/* <Fonts /> */}
        <div ref={about} className="about">
          <About />
        </div>
        <div ref={projects} className="projects">
          <Projects />
        </div>
        <div ref={pictures} className="pictures">
          <Pictures />
        </div>
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
