import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import PictureItem from "./PictureItem";
import { Gateway, GoogleGlass, IOT, MagicLeap, TBL } from "./data/pictures";

const items = [Gateway, GoogleGlass, IOT, MagicLeap, TBL];
function Pictures() {
  return (
    <Grid
      container
      sx={{ width: "100%" }}
      flexDirection="column"
      alignContent="center"
    >
      <Grid sx={{ width: "100%" }}>
        <Typography>Tech memories over the years</Typography>
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <Carousel height="50vh" interval={10000}>
          {items.map((item, i) => (
            <PictureItem key={i} item={item} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}

export default Pictures;
