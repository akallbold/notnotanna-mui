import CertificateGrid from "./CertificateGrid";

export default function CertificationPanel(data: any) {
  return (
    <>
      <CertificateGrid>
        <img
          src="/images/certs/AWS-CP.png"
          alt="AWS Cloud Practitioner Badge"
          height="100px"
        />
        <img
          src="/images/certs/AWS-DA.png"
          alt="AWS Developer Associate Badge"
          height="100px"
        />
      </CertificateGrid>
      <CertificateGrid>
        <img
          src="/images/certs/gcp_cloud_arch.png"
          alt="Google Cloud Architect Badge"
          height="100px"
        />
        <img
          src="/images/certs/gcp_cloud_eng.png"
          alt="Google Cloud Engineer Badge"
          height="100px"
        />
      </CertificateGrid>
      <CertificateGrid>
        <img
          src="/images/certs/sfdc-srvc-badge.png"
          alt="Salesforce Service Cloud Badge"
          height="100px"
        />
        <img
          src="/images/certs/sfdc-admin-badge.png"
          alt="Salesforce Administrator Badge"
          height="100px"
        />
      </CertificateGrid>
    </>
  );
}
