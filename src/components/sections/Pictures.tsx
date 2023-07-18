import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import PictureItem from "../../PictureItem";
import { Gateway, GoogleGlass, IOT, MagicLeap, TBL } from "../../data/pictures";

const items = [Gateway, GoogleGlass, IOT, MagicLeap, TBL];
function Pictures() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        // height: "100vh"
      }}
      flexDirection="column"
      alignContent="center"
    >
      <Grid sx={{ width: "100%" }}>
        <Typography variant="h1">Memory Lane</Typography>
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
