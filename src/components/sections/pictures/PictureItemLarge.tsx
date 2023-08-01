import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";

type IPictureItem = {
  description: string;
  img: string;
  imgAlt: string;
  date: string;
};

const PictureItemLarge: React.FunctionComponent<IPictureItem> = ({
  img,
  description,
  date,
  imgAlt,
}) => {
  return (
    <Grid container px={3} py={3}>
      <Grid sx={{ width: "60%" }} px={3}>
        <Card>
          <CardMedia component="img" alt={imgAlt} height="500" image={img} />
          <CardContent>
            <Typography
              gutterBottom
              variant="caption"
              style={{ fontFamily: "shantell sans", fontSize: "1.5rem" }}
            >
              {`Circa ${date}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid sx={{ width: "40%" }} px={3}>
        <Typography variant="body2">{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default PictureItemLarge;
