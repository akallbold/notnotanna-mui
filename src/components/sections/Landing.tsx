import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import LargeSection from "./LargeSection";
import useIsMobile from "../../hooks/useIsMobile";

function Landing() {
  const isMobile = useIsMobile();

  return (
    <LargeSection fullWidth fullHeight>
      <Grid
        container
        sx={{
          backgroundImage: isMobile
            ? "url(/images/hero-mobile.jpeg)"
            : "url(/images/hero.jpeg)",
          backgroundSize: "cover",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid
          sx={{
            width: isMobile ? "80%" : "40%",
          }}
        >
          <Typography variant="h2">
            Hi! I'm Anna, a full-stack engineer with a background as a project
            manager and product manager. Welcome to my site.
          </Typography>
        </Grid>
      </Grid>
    </LargeSection>
  );
}

export default Landing;
