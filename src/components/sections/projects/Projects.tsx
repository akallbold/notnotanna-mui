import Carousel from "react-material-ui-carousel";
import ProjectView from "./ProjectView";
import {
  TerminalBasedChatGPT,
  AdvancedChatGPT,
  ShantellTypewriter,
  NotBitly,
  StickerApp,
  Haikus,
} from "../../../data/projects";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography } from "@mui/material";
import LargeSection from "../LargeSection";
import useIsMobile from "../../../hooks/useIsMobile";

const projects = [
  TerminalBasedChatGPT,
  AdvancedChatGPT,
  ShantellTypewriter,
  NotBitly,
  StickerApp,
  Haikus,
];

function Projects() {
  const isMobile = useIsMobile();

  return (
    <LargeSection fullWidth fullHeight>
      <Grid
        container
        flexDirection="column"
        sx={{
          backgroundColor: "rgba(248,212,197, 0.3)",
          width: "100%",
        }}
        py={3}
      >
        <Grid sx={{ paddingBottom: isMobile ? 6 : 3 }}>
          <Typography variant="h2">Personal Projects</Typography>
        </Grid>
        <Carousel
          interval={8000}
          navButtonsAlwaysVisible={!isMobile}
          height="80vh"
        >
          {projects.map((project, i) => {
            return <ProjectView project={project} key={i} />;
          })}
        </Carousel>
      </Grid>
    </LargeSection>
  );
}

export default Projects;
