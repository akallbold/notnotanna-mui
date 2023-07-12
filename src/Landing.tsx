import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";

function Landing() {
  return (
    <Grid container sx={{ height: "50vh" }} id="landing-grid">
      <Typography variant="h1">Landing</Typography>
      {/* generate AI image and put here */}
    </Grid>
  );
}

export default Landing;
