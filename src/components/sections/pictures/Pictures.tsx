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
      sx={{ minHeight: "75vh" }}
      justifyContent="center"
      alignContent="center"
    >
      <Typography variant="h2">Just for Fun</Typography>
      <Carousel
        interval={8000}
        navButtonsAlwaysInvisible={windowWidth > 800 ? false : true}
        navButtonsAlwaysVisible={windowWidth > 800 ? true : false}
        height="75vh"
      >
        {items.map((item, i) => {
          if (windowWidth > 800)
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
