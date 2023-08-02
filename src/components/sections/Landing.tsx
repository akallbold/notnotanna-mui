import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import LargeSection from "./LargeSection";

function Landing() {
  return (
    <LargeSection fullWidth fullHeight>
      <Grid
        container
        sx={{
          backgroundImage: "url(/images/hero.png)",
          backgroundSize: "cover",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid
          sx={{
            width: "40%",
          }}
        >
          <Typography variant="h2">
            Hi! I am Anna, a fullstack engineer with a background as a project
            manager and product manager. Welcome to my site.
          </Typography>
        </Grid>
      </Grid>
    </LargeSection>
  );
}

export default Landing;
