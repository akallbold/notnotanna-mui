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
    <LargeSection fullWidth fullHeight>
      <Grid
        container
        flexDirection="column"
        sx={{
          backgroundColor: "rgba(248,212,197, 0.3)",
          width: "100%",
          height: "100%",
        }}
        py={3}
      >
        {/* <Grid sx={{ paddingBottom: "2rem" }}> */}
        <Grid sx={{ paddingBottom: 3 }}>
          <Typography variant="h3">Personal Projects</Typography>
        </Grid>
        <Carousel
          interval={80000}
          // navButtonsAlwaysInvisible={windowWidth > 768 ? false : true}
          navButtonsAlwaysVisible
        >
          {projects.map((project, i) => {
            if (windowWidth > 768)
              return <ProjectViewLarge project={project} key={i} />;
            return <ProjectViewLarge project={project} key={i} />;
          })}
        </Carousel>
      </Grid>
    </LargeSection>
  );
}

export default Projects;
