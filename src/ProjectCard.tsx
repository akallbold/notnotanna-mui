import "./App.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

type IProjectCard = {
  description: string;
  githubLink: string;
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
  githubLink,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={imgAlt} height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link to site
        </a>
        {githubLink && (
          <IconButton size="small">
            <GitHubIcon
              onClick={() => window.open("https://github.com", "_blank")}
            ></GitHubIcon>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
