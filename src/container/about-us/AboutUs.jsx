import { LiveTv, TrendingUp } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import s from "./aboutUs.module.scss";
export default function AboutUs() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", padding: "50px 200px" }}
    >
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <LiveTv />
            <Typography>Movie</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Film, also called motion picture or movie, series of still
              photographs on film, projected in rapid succession onto a screen
              by means of light. Because of the optical phenomenon known as
              persistence of vision, this gives the illusion of actual, smooth,
              and continuous movement.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <TrendingUp />

            <Typography>IMDB</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              IMDb (an acronym for Internet Movie Database) is an online
              database of information related to films, television series,
              podcasts, home videos, video games, and streaming content online –
              including cast, production crew and personal biographies, plot
              summaries, trivia, ratings, and fan and critical reviews
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <WhatshotIcon />

            <Typography>Daily news movie</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={s.news}>
                <a href="https://www.empireonline.com/movies/news/james-gunn-hints-at-guardians-spin-off-featuring-star-lord-becoming-a-reality/">
                  James Gunn Hints At Guardians Spin-Off Featuring Star-Lord
                  Becoming A Reality
                </a>
                <a href="https://www.empireonline.com/movies/news/deadpool-3-wolverine-yellow-suit/">
                  Deadpool 3: Hugh Jackman’s Yellow Wolverine Suit Unveiled By
                  Ryan Reynolds
                </a>
                <a href="https://www.empireonline.com/movies/news/napoleon-trailer-joaquin-phoenix-ridley-scott-historical-epic/">
                  Napoleon Trailer Sends Joaquin Phoenix To War In Ridley
                  Scott’s Historical Epic
                </a>
                <a href="https://www.empireonline.com/movies/news/jennifer-garner-returning-as-marvels-elektra-for-deadpool-3/">
                  Jennifer Garner Returning as Marvel’s Elektra For Deadpool 3
                </a>
                <a href="https://www.empireonline.com/movies/news/john-wick-4-nearly-had-more-obvious-ending-exclusive/">
                  John Wick 4 Nearly Had A More Obvious Final Scene: ‘The
                  Audience Preferred The Ambiguous Ending’ – Exclusive
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
