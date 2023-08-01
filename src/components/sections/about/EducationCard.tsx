import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

type IImageData = {
  src: string;
  alt: string;
};

type IEducationCard = {
  title: string;
  image: IImageData;
  years: string;
  concentration: string;
};

type IEducationCardProps = {
  data: IEducationCard;
};

const EducationCard: React.FunctionComponent<IEducationCardProps> = ({
  data,
}) => {
  const { image, years, title, concentration } = data;
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        alt={image.alt}
        height="100"
        width="100"
        image={image.src}
      />
      <CardContent>
        <Typography gutterBottom variant="h3">
          {title}
        </Typography>
        <Typography variant="caption">{years}</Typography>
        <Typography variant="body2"> {concentration}</Typography>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
