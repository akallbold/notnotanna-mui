import Carousel from "react-material-ui-carousel";
import {
  Gateway,
  GoogleGlass,
  IOT,
  MagicLeap,
  MacIcon,
  TBL,
} from "../../../data/pictures";
import { useEffect, useState } from "react";
import PictureItemLarge from "./PictureItemLarge";
import PictureItemSmall from "./PictureItemSmall";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography } from "@mui/material";
// import useLanguage from "../../hooks/useLanguage";

const items = [Gateway, GoogleGlass, IOT, MagicLeap, MacIcon, TBL];

function Pictures() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Grid
      sx={{
        backgroundColor: "rgba(19,106,97,0.04)",
        minHeight: windowWidth < 800 ? "75vh" : "100vh",
      }}
      justifyContent="center"
      alignContent="center"
      py={3}
    >
      <Typography variant="h3">Just for Fun</Typography>
      <Carousel
        interval={8000}
        navButtonsAlwaysInvisible={windowWidth > 768 ? false : true}
        navButtonsAlwaysVisible={windowWidth > 768 ? true : false}
        height="75vh"
      >
        {items.map((item, i) => {
          if (windowWidth > 768)
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
