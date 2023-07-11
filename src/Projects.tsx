import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import {
  LiveWire,
  Haikus,
  ShantellTypewriter,
  StickerApp,
  NotBitly,
  AdvancedChatGPT,
} from "./data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    AdvancedChatGPT,
    ShantellTypewriter,
    NotBitly,
    StickerApp,
    LiveWire,
    Haikus,
  ];
  const projectCardData = () => {
    return projects.map((project) => {
      return (
        <Grid xs={12} md={6} lg={4} xl={3}>
          <ProjectCard
            description={project.description}
            githubLink={project.githubLink}
            key={project.title}
            img={project.img}
            imgAlt={project.imgAlt}
            link={project.link}
            title={project.title}
          />
        </Grid>
      );
    });
  };

  return (
    <Grid container flexDirection="column">
      <Grid>
        <Typography>Projects</Typography>
      </Grid>
      <Grid container spacing={3}>
        {projectCardData()}
      </Grid>
    </Grid>
  );
}

export default Projects;
