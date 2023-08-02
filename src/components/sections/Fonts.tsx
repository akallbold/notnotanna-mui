import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import LargeSection from "./LargeSection";

function Fonts() {
  return (
    <LargeSection fullWidth fullHeight>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
    </LargeSection>
  );
}

export default Fonts;
