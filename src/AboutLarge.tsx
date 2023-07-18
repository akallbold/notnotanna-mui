import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import AboutPanel from "./AboutPanel-delete";
import { Divider } from "@mui/material";
import TabPanel from "./TabPanel";
import ProjectCard from "./ProjectCard";
import { PodBrowser, LiveWire, Intermountain } from "./data/projects";
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
    <Grid container sx={{ height: "80vh" }} id="about-large-grid">
      <Box
        sx={{
          flexShrink: 2,
        }}
      >
        <Typography variant="h1">About Me</Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "75%",
        }}
        // style={{ backgroundColor: "green" }}
      >
        <Tabs
          orientation="vertical"
          // variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="vertical-about-tabs"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: "100%",
            maxWidth: "25%",
            height: "100%",
          }}
        >
          <Tab
            label="Work"
            {...a11yProps(0)}
            sx={{
              height: "20%",
            }}
          />
          <Tab
            label="Education"
            {...a11yProps(1)}
            sx={{
              height: "20%",
            }}
          />
          <Tab
            label="Certifications"
            {...a11yProps(2)}
            sx={{
              height: "20%",
            }}
          />
          <Tab
            label="Pride"
            {...a11yProps(3)}
            sx={{
              height: "20%",
            }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container justifyContent="center">
            <Grid flexDirection="column">
              <Typography variant="h3">{data.data.work}</Typography>
            </Grid>
            <Grid
              container
              flexDirection="row"
              id="about-resource-grid"
              justifyContent="space-around"
              px={3}
              sx={{
                width: "100%",
                flexWrap: "nowrap",
                // paddingBottom: "5px",
              }}
            >
              <Grid
                px={3}
                sx={{
                  paddingBottom: "5px",
                }}
              >
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
            <Grid flexDirection="column" py={5}>
              <Typography variant="h3">{data.data.education}</Typography>
            </Grid>
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
            <Grid flexDirection="column" py={5}>
              <Typography variant="h3">{data.data.certifications}</Typography>
            </Grid>
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
            <Grid flexDirection="column" py={5}>
              <Typography variant="h3">{data.data.pride}</Typography>
            </Grid>
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
                ></iframe>
              </Grid>
              <Divider orientation="vertical" />
              <Grid
                container
                flexDirection="column"
                alignSelf="center"
                alignItems="center"
                sx={{ backgroundColor: "yellow" }}
              >
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
