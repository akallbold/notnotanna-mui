import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";

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
    <Grid
      container
      flexDirection="row"
      // justifyContent="center"
      id="grid-1"
      // sx={{ backgroundColor: "yellow" }}
    >
      <Grid container sx={{ width: "50%" }} flexDirection="column">
        <Grid sx={{ backgroundColor: "red", width: "100%" }} id="grid-2">
          <img
            src={img}
            alt={imgAlt}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid id="grid-3">
          <Typography
            variant="caption"
            sx={{ textAlign: "left" }}
          >{`Circa: ${date}`}</Typography>
        </Grid>
      </Grid>
      <Grid id="grid-4" sx={{ width: "50%" }} px={2}>
        <Typography variant="body2" sx={{ textAlign: "left" }}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PictureItemLarge;
