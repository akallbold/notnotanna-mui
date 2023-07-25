import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function PictureItemList(arrayOfExperiences: any) {
  const iconMapper = (iconText: string) => {
    switch (iconText) {
      case "DownhillSkiingIcon":
        return <DownhillSkiingIcon />;
      default:
        return <FiberManualRecordIcon />;
    }
  };
  function generateElements() {
    return [arrayOfExperiences].map((item, i) => (
      <ListItem key={i}>
        <ListItemIcon>{iconMapper(item.icon)}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    ));
  }
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Experiences picked up
          </Typography>
          <List dense>{generateElements()}</List>
        </Grid>
      </Grid>
    </Box>
  );
}
