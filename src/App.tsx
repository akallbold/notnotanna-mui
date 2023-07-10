import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Pictures from "./Pictures";

function App() {
  return (
    <div className="App">
      <Grid container id="entire-app-grid" flexDirection="column" px={3} py={3}>
        <Landing />
        <About />
        {/* <Projects /> */}
        <Pictures />
      </Grid>
    </div>
  );
}

export default App;
