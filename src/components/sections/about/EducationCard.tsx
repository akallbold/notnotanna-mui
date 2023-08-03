import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import useIsMobile from "../../../hooks/useIsMobile";

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
  const isMobile = useIsMobile();

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        flexGrow: 1,
        flexBasis: isMobile ? null : 0,
      }}
    >
      <CardContent>
        <Grid container justifyContent="center" py={3}>
          <img src={image.src} alt={image.alt} width="50%" />
        </Grid>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="caption" sx={{ fontStyle: "italic" }}>
          {years}
        </Typography>
        <Typography variant="body1"> {concentration} </Typography>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
