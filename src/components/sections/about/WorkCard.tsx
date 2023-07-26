import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

type IWorkCard = {
  description: string;
  githubLink?: string;
  img: string;
  imgAlt: string;
  link?: string;
  title: string;
};
const WorkCard: React.FunctionComponent<IWorkCard> = ({
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
        <Typography gutterBottom variant="h3">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
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

export default WorkCard;
