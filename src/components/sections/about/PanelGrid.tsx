import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

interface PanelGridProps {
  children?: React.ReactNode;
}

function PanelGrid(props: PanelGridProps) {
  const { children } = props;

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        width: "100%",
      }}
    >
      {children}
    </Grid>
  );
}

export default PanelGrid;
