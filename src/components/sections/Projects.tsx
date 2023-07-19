import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import {
  Haikus,
  ShantellTypewriter,
  StickerApp,
  NotBitly,
  AdvancedChatGPT,
} from "../../data/projects";
import ProjectCard from "../../ProjectCard";

function Projects() {
  const projects = [
    AdvancedChatGPT,
    ShantellTypewriter,
    NotBitly,
    StickerApp,
    Haikus,
  ];
  const projectCardData = () => {
    return projects.map((project, i) => {
      return (
        <Grid xs={12} md={6} lg={4} key={i}>
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
    <Grid container flexDirection="column" id="projects-grid">
      <Grid>
        <Typography variant="h1" sx={{ textAlign: "left" }}>
          Personal Projects
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {projectCardData()}
      </Grid>
    </Grid>
  );
}

export default Projects;
