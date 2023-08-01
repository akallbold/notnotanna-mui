import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button, Card, CardMedia } from "@mui/material";

type IProjectCard = {
  description: string;
  githubLink?: string;
  img: string;
  imgAlt: string;
  link?: string;
  title: string;
};
type IProjectCardProps = {
  project: IProjectCard;
};

const ProjectViewLarge = ({ project }: IProjectCardProps) => {
  return (
    <Grid container flexDirection="row" px={3} justifyContent="space-evenly">
      <Grid container sx={{ width: "40%", alignContent: "center" }}>
        <Typography variant="h2" sx={{ textAlign: "left" }}>
          {project.title}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left" }}>
          {project.description}
        </Typography>
        {project.link && (
          <Button onClick={() => window.open(project.link, "_blank")}>
            Link to Site
            <ArrowOutwardIcon />
          </Button>
        )}
      </Grid>
      <Grid sx={{ width: "40%" }}>
        <Card>
          <CardMedia>
            <img
              src={project.img}
              alt={project.imgAlt}
              height="100%"
              width="100%"
            />
          </CardMedia>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProjectViewLarge;
