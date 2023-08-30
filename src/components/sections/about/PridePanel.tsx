import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { List, ListItem, Typography } from "@mui/material";
import { constants } from "../../../data/constants";

export default function PridePanel(data: any) {
  return (
    <>
      <Typography variant="body1">
        I represent and support the LGBTQ+ community wherever I am. Here is a
        little peek into what that has looked like:
        <List>
          <ListItem>
            <Grid container flexDirection="column">
              <Grid container>
                <Typography variant="subtitle1" sx={{ marginRight: "1em" }}>
                  Los Angeles
                </Typography>
                <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
                  2013
                </Typography>
              </Grid>
              <Typography variant="body1">
                {`I attended a small Lesbians Who Tech (LWT) meetup in Palo
                    Alto. I loved the group and asked the founder, Leanne, if I
                    could start a Los Angeles Chapter. The Los Angeles chapter of
                    LWT had close to 300 members by the time I
                    left LA for business school and now the organization has over
                    100,000 members worldwide.`}
              </Typography>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container flexDirection="column">
              <Grid container>
                <Typography variant="subtitle1" sx={{ marginRight: "1em" }}>
                  Yale School of Management
                </Typography>
                <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
                  2016
                </Typography>
              </Grid>
              <Typography variant="body1">
                {`I became the co-lead of Out of Office, the LGBTQ+ club at
                      the Yale School of Management. We organized events,
                      coordinated recruiting opportunities, and built relations
                      with other graduate programs at the university. Here is a `}
                <a
                  href={constants.rombaVideoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  an interview
                </a>
                {` I did for ROMBA that goes into more depth about our work.`}
              </Typography>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container flexDirection="column">
              <Grid container>
                <Typography variant="subtitle1" sx={{ marginRight: "1em" }}>
                  BCG X
                </Typography>
                <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
                  2019
                </Typography>
              </Grid>
              <Typography variant="body1">
                {`Started the BCG X North American Pride ERG. Three of my
                    colleagues and I started the ERG and participated in recruiting conversations and took efforts to ensure
                    BCG X was a comfortable place for queer people to work.`}
              </Typography>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container flexDirection="column">
              <Grid container>
                <Typography variant="subtitle1" sx={{ marginRight: "1em" }}>
                  Inrupt
                </Typography>
                <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
                  2021
                </Typography>
              </Grid>
              <Typography variant="body1">
                When I joined Inrupt we were ~35 people and fully remote. We
                didn't have a Pride ERG but I created a Slack channel that folks
                could opt into. This channel was one of the more active channels
                I was a part of and we were able to build a little community
                despite the remote culture.
              </Typography>
            </Grid>
          </ListItem>
        </List>
      </Typography>
    </>
  );
}
