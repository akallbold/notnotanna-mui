import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";

type IPictureItem = {
  description: string;
  img: string;
  imgAlt: string;
  date: string;
};

const PictureItemSmall: React.FunctionComponent<IPictureItem> = ({
  img,
  description,
  date,
  imgAlt,
}) => {
  return (
    <Grid container flexDirection="column" justifyContent="center">
      <Grid>
        <img
          src={img}
          alt={imgAlt}
          loading="lazy"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid>
        <Typography variant="caption">{date}</Typography>
      </Grid>
      <Grid>
        <Typography variant="body1">{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default PictureItemSmall;
