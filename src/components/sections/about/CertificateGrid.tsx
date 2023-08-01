import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

interface CertificateGridProps {
  children?: React.ReactNode;
  windowWidth: number;
}

function CertificateGrid(props: CertificateGridProps) {
  const { children, windowWidth } = props;

  return (
    <Grid
      container
      flexDirection={windowWidth < 800 ? "row" : "column"}
      justifyContent="space-between"
      sx={{
        width: windowWidth < 800 ? "80%" : "25%",
      }}
      m={2}
      p={2}
    >
      {children}
    </Grid>
  );
}

export default CertificateGrid;
