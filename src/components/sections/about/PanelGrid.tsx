import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

interface PanelGridProps {
  children?: React.ReactNode;
  column?: boolean;
}

function PanelGrid(props: PanelGridProps) {
  const { children, column } = props;
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        width: "100%",
      }}
      flexDirection={column ? "column" : "row"}
    >
      {children}
    </Grid>
  );
}

export default PanelGrid;
