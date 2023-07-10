import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";

function AboutItem() {
  return (
    <Grid container sx={{ height: "50vh" }}>
      <Typography>AboutItem</Typography>
    </Grid>
  );
}

export default AboutItem;
