import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function AboutSmall(data: any) {
  return (
    <div id="about-small-div">
      <Box
        sx={{
          flexShrink: 2,
        }}
      >
        <Typography variant="h1">About Me</Typography>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Work</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{data.data.work}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{data.data.education}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Certifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{data.data.certifications}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Pride</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{data.data.pride}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
