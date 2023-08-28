import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Uconn, Yale, Flatiron } from "../../../data/education";
import PanelGrid from "./PanelGrid";
import LargeSection from "../LargeSection";
import EducationCard from "./EducationCard";
import { Typography } from "@mui/material";
import PridePanel from "./PridePanel";
import CertificationPanel from "./CertificationPanel";
import useIsMobile from "../../../hooks/useIsMobile";
import WorkPanel from "./WorkPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const education = [Flatiron, Yale, Uconn];

export default function About() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const isMobile = useIsMobile();

  return (
    <LargeSection fullWidth fullHeight>
      <Grid
        sx={{
          backgroundColor: "rgba(19,106,97,0.04)",
        }}
      >
        <Grid py={3}>
          <Typography variant="h2">About Me</Typography>
        </Grid>
        <Grid>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "transparent",
              },
              "& .Mui-selected": {
                color: "secondary.main",
                textDecoration: "underline",
              },
              "& .MuiTab-root": {
                color: "secondary.light",
                fontWeight: "bolder",
                fontSize: isMobile ? "x-small" : "large",
              },
              overflow: "hidden",
            }}
          >
            <Tab label="Work" {...a11yProps(0)} />
            <Tab label="Education" {...a11yProps(1)} />
            <Tab label="Certifications" {...a11yProps(2)} />
            <Tab label="Pride" {...a11yProps(3)} />
          </Tabs>
        </Grid>
        <TabPanel value={value} index={0}>
          <PanelGrid>
            <WorkPanel />
          </PanelGrid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PanelGrid column={isMobile}>
            {education.map((data, i) => (
              <EducationCard data={data} key={i} />
            ))}
          </PanelGrid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PanelGrid column={isMobile}>
            <CertificationPanel />
          </PanelGrid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PanelGrid>
            <PridePanel />
          </PanelGrid>
        </TabPanel>
      </Grid>
    </LargeSection>
  );
}
