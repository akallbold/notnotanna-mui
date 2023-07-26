import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";

type IPictureItem = {
  description: string;
  img: string;
  imgAlt: string;
  date: string;
  experience: any;
};

const PictureItemLarge: React.FunctionComponent<IPictureItem> = ({
  img,
  description,
  date,
  imgAlt,
}) => {
  return (
    <Grid container px={2}>
      <Grid sx={{ width: "50%" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt={imgAlt} height="240" image={img} />
          <CardContent>
            <Typography gutterBottom variant="caption">
              {`Circa: ${date}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid sx={{ width: "50%" }}>
        <Typography variant="body2">{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default PictureItemLarge;
