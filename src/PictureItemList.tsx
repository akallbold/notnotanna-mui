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
function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function PictureItemList(item: any) {
  const iconMapper = (iconText: string) => {
    switch (iconText) {
      case "DownhillSkiingIcon":
        return <DownhillSkiingIcon />;
      default:
        return <FiberManualRecordIcon />;
    }
  };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Experiences picked up
          </Typography>
          <List dense>
            {generate(
              <ListItem>
                <ListItemIcon>{iconMapper("")}</ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
