import { text } from "../../../data/text";
import { useEffect, useState } from "react";
import AboutLarge from "./AboutLarge";
// import AboutSmall from "./AboutSmall";

function About() {
  // const { language } = useLanguage();
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
  const data = text.en;
  if (windowWidth > 800) return <AboutLarge data={data} />;
  // return <AboutSmall data={data} />;
  return <AboutLarge data={data} />;
}

export default About;
