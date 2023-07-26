import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Intermountain, LiveWire, PodBrowser } from "../../../data/projects";
import WorkCard from "./WorkCard";
import PanelGrid from "./PanelGrid";
import LargeSection from "../LargeSection";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutLarge(data: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <LargeSection>
      <Grid>
        <Grid>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "secondary.main",
              },
              "& .MuiTab-root": {
                color: "secondary.main",
              },
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
            <WorkCard
              description={PodBrowser.description}
              key={PodBrowser.title}
              img={PodBrowser.img}
              imgAlt={PodBrowser.imgAlt}
              link={PodBrowser.link}
              title={PodBrowser.title}
            />
            <WorkCard
              description={LiveWire.description}
              key={LiveWire.title}
              img={LiveWire.img}
              imgAlt={LiveWire.imgAlt}
              link={LiveWire.link}
              title={LiveWire.title}
            />
            <WorkCard
              description={Intermountain.description}
              key={Intermountain.title}
              img={Intermountain.img}
              imgAlt={Intermountain.imgAlt}
              link={Intermountain.link}
              title={Intermountain.title}
            />
          </PanelGrid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PanelGrid>
            <img src="/images/uconn.png" alt="UCONN logo" height="100px" />
            <img src="/images/yale.png" alt="Yale logo" height="100px" />
            <img
              src="/images/flatiron.png"
              alt="Flatiron school logo"
              height="100px"
            />
          </PanelGrid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PanelGrid>
            <Grid container flexDirection="column">
              <img
                src="/images/certs/AWS-CP.png"
                alt="AWS Cloud Practitioner Badge"
                height="100px"
              />
              <img
                src="/images/certs/AWS-DA.png"
                alt="AWS Developer Associate Badge"
                height="100px"
              />
            </Grid>
            <Grid container flexDirection="column">
              <img
                src="/images/certs/sfdc-srvc-badge.png"
                alt="Salesforce Service Cloud Badge"
                height="100px"
              />
              <img
                src="/images/certs/sfdc-admin-badge.png"
                alt="Salesforce Administrator Badge"
                height="100px"
              />
            </Grid>
            <Grid container flexDirection="column">
              <img
                src="/images/certs/gcp_cloud_arch.png"
                alt="Google Cloud Architect Badge"
                height="100px"
              />
              <img
                src="/images/certs/gcp_cloud_eng.png"
                alt="Google Cloud Engineer Badge"
                height="100px"
              />
            </Grid>
          </PanelGrid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PanelGrid>Pride things to go here</PanelGrid>
        </TabPanel>
      </Grid>
    </LargeSection>
  );
}
