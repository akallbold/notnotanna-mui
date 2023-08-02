import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";

type IProjectCard = {
  description: string;
  githubLink?: string;
  img: string;
  imgAlt: string;
  link?: string;
  subtitle?: string;
  title: string;
};
type IProjectCardProps = {
  project: IProjectCard;
};

const ProjectViewLarge = ({ project }: IProjectCardProps) => {
  return (
    <Grid
      container
      flexDirection="row"
      px={3}
      justifyContent="space-evenly"
      sx={{ height: "100%" }}
    >
      <Grid container sx={{ width: "40%" }} flexDirection="column" spacing={1}>
        <Grid>
          <Typography variant="subtitle1">{project.subtitle}</Typography>
          <Typography variant="h3" align="left" gutterBottom>
            {project.title}
          </Typography>
        </Grid>

        <Grid>
          <Typography variant="body1" gutterBottom>
            {project.description}
          </Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          alignContent="center"
        >
          {project.link && (
            <Typography
              onClick={() => window.open(project.link, "_blank")}
              variant="button"
            >
              LINK TO SITE
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid sx={{ width: "40%" }}>
        <img src={project.img} alt={project.imgAlt} height="90%" width="90%" />
      </Grid>
    </Grid>
  );
};

export default ProjectViewLarge;
