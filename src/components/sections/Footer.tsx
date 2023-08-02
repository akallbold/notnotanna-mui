import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { constants } from "../../data/constants";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function Footer(props: any) {
  return (
    <Grid
      // sx={{
      //   backgroundColor: (theme) =>
      //     theme.palette.mode === "light"
      //       ? theme.palette.grey[200]
      //       : theme.palette.grey[800],
      //   p: 6,
      // }}
      container
      sx={{ backgroundColor: "primary.main" }}
      component="footer"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px={3}
    >
      <Grid>
        <Typography variant="h1" color="secondary.main">
          AKB
        </Typography>
      </Grid>
      <Grid container>
        <GitHubIcon
          onClick={() => window.open(constants.githubUrl, "_blank")}
          sx={{
            my: 2,
            mx: 2,
            display: "block",
            alignSelf: "center",
            color: "secondary.main",
          }}
        />
        <LinkedInIcon
          onClick={() => window.open(constants.linkedinURL, "_blank")}
          sx={{
            my: 2,
            mx: 2,
            display: "block",
            alignSelf: "center",
            color: "secondary.main",
          }}
        />
      </Grid>
    </Grid>
  );
}
export default Footer;
