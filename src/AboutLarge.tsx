import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Divider } from "@mui/material";
import TabPanel from "./TabPanel";
import ProjectCard from "./ProjectCard";
import { PodBrowser, LiveWire, Intermountain } from "./data/projects";
import PanelGrid from "./PanelGrid";
function AboutLarge(data: any) {
  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container id="about-large-grid" px={3} py={3}>
      <Box>
        <Typography variant="h2">About Me</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          id: "padding-issue? ",
          paddingTop: "0px",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="vertical-about-tabs"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: "100%",
          }}
        >
          <Tab label="Work" {...a11yProps(0)} id="interesting" />
          <Tab label="Education" {...a11yProps(1)} />
          <Tab label="Certifications" {...a11yProps(2)} />
          <Tab label="Pride" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container>
            <PanelGrid text={data.data.work}></PanelGrid>
            <Grid
              container
              flexDirection="row"
              id="about-resource-grid"
              justifyContent="space-around"
              px={3}
              sx={{
                width: "100%",
                flexWrap: "nowrap",
              }}
            >
              <Grid px={3}>
                <ProjectCard
                  description={PodBrowser.description}
                  key={PodBrowser.title}
                  img={PodBrowser.img}
                  imgAlt={PodBrowser.imgAlt}
                  link={PodBrowser.link}
                  title={PodBrowser.title}
                />
              </Grid>
              <Divider orientation="vertical" />
              <Grid px={3}>
                <ProjectCard
                  description={LiveWire.description}
                  key={LiveWire.title}
                  img={LiveWire.img}
                  imgAlt={LiveWire.imgAlt}
                  link={LiveWire.link}
                  title={LiveWire.title}
                />
              </Grid>
              <Divider orientation="vertical" />
              <Grid px={3}>
                <ProjectCard
                  description={Intermountain.description}
                  key={Intermountain.title}
                  img={Intermountain.img}
                  imgAlt={Intermountain.imgAlt}
                  link={Intermountain.link}
                  title={Intermountain.title}
                />
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container justifyContent="center">
            <PanelGrid text={data.data.education}></PanelGrid>
            <Grid
              container
              flexDirection="row"
              id="about-resource-grid"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Grid>
                <img src="/images/uconn.png" alt="UCONN logo" height="100px" />
              </Grid>
              <Divider orientation="vertical" />
              <Grid>
                <img src="/images/yale.png" alt="Yale logo" height="100px" />
              </Grid>
              <Divider orientation="vertical" />
              <Grid>
                <img
                  src="/images/flatiron.png"
                  alt="Flatiron school logo"
                  height="100px"
                />
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container justifyContent="center">
            <PanelGrid text={data.data.certifications}></PanelGrid>
            <Grid
              container
              flexDirection="row"
              id="about-resource-grid"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Grid container flexDirection="column">
                <Grid>
                  <img
                    src="/images/certs/AWS-CP.png"
                    alt="AWS Cloud Practitioner Badge"
                    height="100px"
                  />
                </Grid>
                <Grid>
                  <img
                    src="/images/certs/AWS-DA.png"
                    alt="AWS Developer Associate Badge"
                    height="100px"
                  />
                </Grid>
              </Grid>
              <Divider orientation="vertical" />
              <Grid container flexDirection="column">
                <Grid>
                  <img
                    src="/images/certs/sfdc-srvc-badge.png"
                    alt="Salesforce Service Cloud Badge"
                    height="100px"
                  />
                </Grid>
                <Grid>
                  <img
                    src="/images/certs/sfdc-admin-badge.png"
                    alt="Salesforce Administrator Badge"
                    height="100px"
                  />
                </Grid>
              </Grid>
              <Divider orientation="vertical" />
              <Grid container flexDirection="column">
                <Grid>
                  <img
                    src="/images/certs/gcp_cloud_arch.png"
                    alt="Google Cloud Architect Badge"
                    height="100px"
                  />
                </Grid>
                <Grid>
                  <img
                    src="/images/certs/gcp_cloud_eng.png"
                    alt="Google Cloud Engineer Badge"
                    height="100px"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container justifyContent="center">
            <PanelGrid text={data.data.education}></PanelGrid>
            <Grid
              container
              flexDirection="row"
              id="about-resource-grid"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Grid>
                <iframe
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed?v=rAJbRdx2wDE&t=82s"
                  title="Anna at Romba"
                ></iframe>
              </Grid>
              <Divider orientation="vertical" />
              <Grid container flexDirection="column" alignSelf="center">
                <img
                  src="/images/pla-pride.png"
                  alt="BCG Pride slide"
                  height="100px"
                />
                <img
                  src="/images/lwt.png"
                  alt="Lesbians Who Tech logo"
                  height="100px"
                />
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Grid>
  );
}

export default AboutLarge;
