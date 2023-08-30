import Carousel from "react-material-ui-carousel";
import {
  Gateway,
  GoogleGlass,
  IOT,
  MagicLeap,
  Github,
  MacIcon,
  TBL,
} from "../../../data/pictures";
import PictureItemLarge from "./PictureItemLarge";
import PictureItemSmall from "./PictureItemSmall";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography } from "@mui/material";
import useIsMobile from "../../../hooks/useIsMobile";

const items = [Gateway, GoogleGlass, IOT, MagicLeap, Github, MacIcon, TBL];

function Pictures() {
  const isMobile = useIsMobile();

  return (
    <Grid
      sx={{
        backgroundColor: "rgba(19,106,97,0.04)",
        minHeight: isMobile ? "75vh" : "100vh",
      }}
      justifyContent="center"
      alignContent="center"
      py={3}
    >
      <Typography variant="h2">Tech Time Capsule</Typography>
      <Carousel
        interval={8000}
        navButtonsAlwaysVisible={!isMobile}
        height="80vh"
      >
        {items.map((item, i) => {
          if (!isMobile)
            return (
              <PictureItemLarge
                key={i}
                img={item.img}
                description={item.description["en"]}
                date={item.date}
                imgAlt={item.imgAlt}
              />
            );
          return (
            <PictureItemSmall
              key={i}
              img={item.img}
              description={item.description["en"]}
              date={item.date}
              imgAlt={item.imgAlt}
            />
          );
        })}
      </Carousel>
    </Grid>
  );
}

export default Pictures;
