import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

type IImageData = {
  src: string;
  alt: string;
};

type IWorkCard = {
  description?: string;
  title: string;
  images?: IImageData[];
  leadExperience?: string;
  icExperience?: string;
};

type IWorkCardProps = {
  data: IWorkCard;
};

const WorkCard: React.FunctionComponent<IWorkCardProps> = ({ data }) => {
  const { description, leadExperience, images, title, icExperience } = data;

  const renderLogos = () => {
    if (!images || !images.length) return null;
    return images.map((image, i) => {
      return (
        <Grid key={i} px={2}>
          <img src={image.src} alt={image.alt} height="80" width="80" />
        </Grid>
      );
    });
  };
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <Grid container justifyContent="center" py={3}>
        {images && renderLogos()}
      </Grid>
      <CardContent>
        <Grid container justifyContent="center">
          <Grid>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
          </Grid>
          {description && (
            <Grid py={1}>
              <Typography variant="body1">{description}</Typography>
            </Grid>
          )}
          <Grid py={1}>
            {leadExperience && (
              <>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Lead Engineer:
                </Typography>
                <Typography variant="body1">{leadExperience}</Typography>
              </>
            )}
          </Grid>
          <Grid py={1}>
            {icExperience && (
              <>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  IC:
                </Typography>
                <Typography variant="body1">{icExperience}</Typography>
              </>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
