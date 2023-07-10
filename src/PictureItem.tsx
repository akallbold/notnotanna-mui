import "./App.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import useLanguage from "./hooks/useLanguage";

type IDescriptionObject = {
  de: string;
  en: string;
  es: string;
  se: string;
};
type IPictureItem = {
  description: IDescriptionObject;
  img: string;
  imgAlt: string;
  date: string;
};
type IPictureItemProps = {
  item: IPictureItem;
};

const PictureItem: React.FunctionComponent<IPictureItemProps> = ({ item }) => {
  const { img, description, date, imgAlt } = item;
  const { language } = useLanguage();
  return (
    <Grid container flexDirection="column" justifyContent="center">
      <Grid>
        <img src={img} alt={imgAlt} style={{ width: "50%", height: "50%" }} />
      </Grid>
      <Grid>
        <Typography variant="caption">{date}</Typography>
      </Grid>
      <Grid>
        <Typography variant="body2">{description["en"]}</Typography>
      </Grid>
    </Grid>
  );
};

export default PictureItem;
