import "./App.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

type IProjectCard = {
  description: string;
  img: string;
  imgAlt: string;
  link: string;
  title: string;
};
const ProjectCard: React.FunctionComponent<IProjectCard> = ({
  description,
  img,
  imgAlt,
  link,
  title,
}) => {
  return (
    <Card>
      <Grid container flexDirection="column">
        <Grid>
          <Typography variant="h2"> {title} </Typography>
        </Grid>
        <Grid>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "5px",
            }}
          >
            <img src={img} alt={imgAlt} />
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Typography variant="body1"> {description} </Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <a href={link} />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
