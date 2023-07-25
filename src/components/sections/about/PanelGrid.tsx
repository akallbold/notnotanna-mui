import "./App.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

interface PanelGridProps {
  children?: React.ReactNode;
  text?: String;
}

function PanelGrid(props: PanelGridProps) {
  const { children, text } = props;

  return (
    <Grid
      flexDirection="column"
      sx={{
        paddingBottom: "24px",
        textAlign: "left",
      }}
    >
      {text && <Typography variant="h3">{text}</Typography>}

      {children}
    </Grid>
  );
}

export default PanelGrid;
