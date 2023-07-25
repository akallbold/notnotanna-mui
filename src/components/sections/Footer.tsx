import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { constants } from "../../data/constants";
import BottomNavigation from "@mui/material/BottomNavigation";

const pages = [
  { label: "About Me", elementName: "about" },
  { label: "Projects", elementName: "projects" },
  { label: "Memory Lane", elementName: "pictures" },
];

function Footer(props: any) {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <GitHubIcon
            onClick={() => window.open(constants.githubUrl, "_blank")}
            sx={{
              my: 2,
              mx: 2,
              color: "white",
              display: "block",
              alignSelf: "center",
            }}
          />
          <LinkedInIcon
            onClick={() => window.open(constants.linkedinURL, "_blank")}
            sx={{
              my: 2,
              mx: 2,
              color: "white",
              display: "block",
              alignSelf: "center",
            }}
          />
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
export default Footer;
