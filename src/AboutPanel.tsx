import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { text } from "./data/text";
import useLanguage from "./hooks/useLanguage";
import { Divider } from "@mui/material";
import { JSX } from "react/jsx-runtime";

interface AboutPanelProps {
  data: any;
}

function AboutPanel(data: AboutPanelProps) {
  return (
    <Grid
      container
      sx={{ backgroundColor: "red" }}
      id="about-panel-grid"
      justifyContent="center"
    >
      <Grid
        flexDirection="column"
        sx={{ backgroundColor: "yellow" }}
        id="about-text-grid"
      >
        <Typography variant="h3">{data.data}</Typography>
      </Grid>
      <Grid
        container
        flexDirection="row"
        id="about-resource-grid"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Grid>
          <Typography>hi</Typography>
        </Grid>
        <Divider orientation="vertical" />
        <Grid>
          <Typography>hello</Typography>
        </Grid>
        <Divider orientation="vertical" />
        <Grid>
          <Typography>hola</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutPanel;
