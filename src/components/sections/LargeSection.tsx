import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

interface ILargeSectionProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  fullHeight?: boolean;
  style?: React.CSSProperties;
  // backgroundColor?: string;
}

export default function LargeSection(props: ILargeSectionProps) {
  const { children, fullWidth, fullHeight } = props;

  return (
    <Grid
      container
      px={fullWidth ? 0 : 3}
      py={fullHeight ? 0 : 3}
      justifyContent="center"
      sx={{ minHeight: "75vh" }}
    >
      {children}
    </Grid>
  );
}
