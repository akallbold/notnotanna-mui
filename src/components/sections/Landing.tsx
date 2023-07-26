import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";

function Landing() {
  return (
    <Grid
      container
      sx={{
        height: "50vh",
        backgroundColor: "primary.main",
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid
        sx={{
          width: "40%",
        }}
      >
        <Typography variant="h1">
          Hi! I am Anna, a fullstack engineer with a background as a project
          manager and product manager. Welcome to my site.
        </Typography>
      </Grid>

      {/* generate AI image and put here */}
    </Grid>
  );
}

export default Landing;
