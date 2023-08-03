import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import useIsMobile from "../../../hooks/useIsMobile";

interface CertificateGridProps {
  children?: React.ReactNode;
}

function CertificateGrid(props: CertificateGridProps) {
  const { children } = props;
  const isMobile = useIsMobile();

  return (
    <Grid
      container
      flexDirection={isMobile ? "row" : "column"}
      justifyContent={isMobile ? "space-around" : "space-around"}
      sx={{
        width: "100%",
      }}
      m={2}
      p={2}
    >
      {children}
    </Grid>
  );
}

export default CertificateGrid;
