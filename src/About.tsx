import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { text } from "./data/text";
import useLanguage from "./hooks/useLanguage";
import AboutPanel from "./AboutPanel";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function About() {
  const { language } = useLanguage();

  // const details = text[language];
  const details = text.en;

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

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
    <Grid container sx={{ height: "100vh" }} id="about-grid">
      <Typography variant="h1">About Me</Typography>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Work" {...a11yProps(0)} />
          <Tab label="Education" {...a11yProps(1)} />
          <Tab label="Certifications" {...a11yProps(2)} />
          <Tab label="Pride" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AboutPanel data={details.work} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AboutPanel data={details.education} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AboutPanel data={details.certifications} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AboutPanel data={details.pride} />
        </TabPanel>
      </Box>
    </Grid>
  );
}

export default About;
