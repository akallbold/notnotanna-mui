import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

type IImageData = {
  src: string;
  alt: string;
};

type IWorkCard = {
  description: string;
  images: IImageData[];
  title: string;
  leadExperience: string;
  icExperience: string;
};

type IWorkCardProps = {
  data: IWorkCard;
};

const WorkCard: React.FunctionComponent<IWorkCardProps> = ({ data }) => {
  const { description, leadExperience, images, title, icExperience } = data;
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        alt={images[0].alt}
        height="100"
        width="100"
        image={images[0].src}
      />
      <CardContent>
        <Typography gutterBottom variant="h3">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body2">Lead Engineer: {leadExperience}</Typography>
        <Typography variant="body2">IC: {icExperience}</Typography>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
