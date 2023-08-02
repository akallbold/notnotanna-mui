import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import {
  SoftwareDevelopmentFront,
  SoftwareDevelopmentBack,
  CloudDeployments,
  EmergingTech,
  GeneralManagement,
} from "../../../data/work";
import { Uconn, Yale, Flatiron } from "../../../data/education";
import WorkCard from "./WorkCard";
import PanelGrid from "./PanelGrid";
import LargeSection from "../LargeSection";
import EducationCard from "./EducationCard";
import CertificateGrid from "./CertificateGrid";
import { Typography } from "@mui/material";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutLarge(data: any) {
  const [value, setValue] = React.useState(0);
  const work = [
    SoftwareDevelopmentFront,
    SoftwareDevelopmentBack,
    CloudDeployments,
    EmergingTech,
    GeneralManagement,
  ];
  const education = [Flatiron, Yale, Uconn];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LargeSection fullWidth fullHeight>
      <Grid sx={{ backgroundColor: "rgba(19,106,97,0.04)" }}>
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
              },
              "& .MuiTab-root": {
                color: "primary.main",
                fontWeight: "bolder",
                fontSize: windowWidth > 768 ? "large" : "small",
              },
              overflow: "visible",
              // TODO: add a different color for selected
              color: "secondary.dark",
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
            {work.map((data, i) => (
              <WorkCard data={data} key={i} />
            ))}
          </PanelGrid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PanelGrid>
            {education.map((data, i) => (
              <EducationCard data={data} key={i} />
            ))}
          </PanelGrid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PanelGrid>
            <CertificateGrid windowWidth={windowWidth}>
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
            </CertificateGrid>
            <CertificateGrid windowWidth={windowWidth}>
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
            </CertificateGrid>
            <CertificateGrid windowWidth={windowWidth}>
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
            </CertificateGrid>
          </PanelGrid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PanelGrid>Pride things to go here</PanelGrid>
        </TabPanel>
      </Grid>
    </LargeSection>
  );
}
