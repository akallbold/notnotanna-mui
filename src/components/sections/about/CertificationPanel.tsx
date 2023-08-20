import useIsMobile from "../../../hooks/useIsMobile";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function CertificationPanel(data: any) {
  const isMobile = useIsMobile();
  return (
    <Grid
      container
      justifyContent={isMobile ? "space-around" : "space-between"}
      sx={{
        width: "100%",
      }}
    >
      <Grid display="flex" flexDirection={isMobile ? "row" : "column"} m={2}>
        <img
          src="/images/certs/AWS-CP.png"
          alt="AWS Cloud Practitioner Badge"
          height="100px"
          width="100px"
          loading="lazy"
        />
        <img
          src="/images/certs/AWS-DA.png"
          alt="AWS Developer Associate Badge"
          height="100px"
          width="100px"
          loading="lazy"
        />
      </Grid>
      <Grid display="flex" flexDirection={isMobile ? "row" : "column"} m={2}>
        <img
          src="/images/certs/gcp_cloud_arch.png"
          alt="Google Cloud Architect Badge"
          height="100px"
          width="100px"
          loading="lazy"
        />
        <img
          src="/images/certs/gcp_cloud_eng.png"
          alt="Google Cloud Engineer Badge"
          height="100px"
          width="100px"
        />
      </Grid>
      <Grid display="flex" flexDirection={isMobile ? "row" : "column"} m={2}>
        <img
          src="/images/certs/sfdc-srvc-badge.png"
          alt="Salesforce Service Cloud Badge"
          height="110px"
          width="100px"
        />
        <img
          src="/images/certs/sfdc-admin-badge.png"
          alt="Salesforce Administrator Badge"
          height="110px"
          width="100px"
        />
      </Grid>
    </Grid>
  );
}
