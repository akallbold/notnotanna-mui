import Carousel from "react-material-ui-carousel";
import {
  Gateway,
  GoogleGlass,
  IOT,
  MagicLeap,
  TBL,
} from "../../../data/pictures";
import { useEffect, useState } from "react";
import PictureItemLarge from "./PictureItemLarge";
import PictureItemSmall from "./PictureItemSmall";
// import useLanguage from "../../hooks/useLanguage";

const items = [Gateway, GoogleGlass, IOT, MagicLeap, TBL];
function Pictures() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const { language } = useLanguage();
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
    <Carousel
      interval={8000}
      navButtonsAlwaysInvisible={windowWidth > 800 ? false : true}
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
              experience={item.experience}
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
  );
}

export default Pictures;
