import Carousel from "react-material-ui-carousel";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import useIsMobile from "../../../hooks/useIsMobile";
import WorkCard from "./WorkCard";
import {
  CloudDeployments,
  EmergingTech,
  ProjectManagement,
  SoftwareDevelopmentBack,
  SoftwareDevelopmentFront,
} from "../../../data/work";

type IImageData = {
  src: string;
  alt: string;
};

type IWorkCard = {
  description?: string;
  title: string;
  images?: IImageData[];
  leadExperience?: string;
  icExperience?: string;
};

function WorkPanel() {
  const isMobile = useIsMobile();

  const work = [
    SoftwareDevelopmentFront,
    SoftwareDevelopmentBack,
    CloudDeployments,
    EmergingTech,
    ProjectManagement,
  ];

  return (
    <>
      {isMobile ? (
        <Grid
          sx={{
            backgroundColor: "rgba(19,106,97,0.04)",
          }}
          justifyContent="center"
          alignContent="center"
          width="100%"
        >
          <Carousel
            interval={8000}
            navButtonsAlwaysVisible={false}
            height="80vh"
          >
            {work.map((item: IWorkCard, i: number) => {
              return <WorkCard data={item} key={i} />;
            })}
          </Carousel>
        </Grid>
      ) : (
        <>
          {work.map((item: IWorkCard, i: number) => (
            <WorkCard data={item} key={i} />
          ))}
        </>
      )}
    </>
  );
}

export default WorkPanel;
