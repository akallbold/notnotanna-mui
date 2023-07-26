import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";
import ProjectViewLarge from "./ProjectViewLarge";
import {
  AdvancedChatGPT,
  ShantellTypewriter,
  NotBitly,
  StickerApp,
  Haikus,
} from "../../../data/projects";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography } from "@mui/material";
import LargeSection from "../LargeSection";

function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const projects = [
    AdvancedChatGPT,
    ShantellTypewriter,
    NotBitly,
    StickerApp,
    Haikus,
  ];
  // const { language } = useLanguage();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LargeSection fullWidth>
      <Grid
        container
        flexDirection="column"
        sx={{ backgroundColor: "rgba(237, 181, 180, 0.3)", width: "100%" }}
      >
        <Grid py={3}>
          <Typography variant="h2">Personal Projects</Typography>
        </Grid>
        <Carousel
          interval={80000}
          navButtonsAlwaysInvisible={windowWidth > 800 ? false : true}
          navButtonsAlwaysVisible={windowWidth > 800 ? true : false}
        >
          {projects.map((project, i) => {
            if (windowWidth > 800)
              return <ProjectViewLarge project={project} key={i} />;
            return <ProjectViewLarge project={project} key={i} />;
          })}
        </Carousel>
      </Grid>
    </LargeSection>
  );
}

export default Projects;
