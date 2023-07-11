import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import s from "./news.module.scss";

export default function News() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        gap: 3,
      }}
    >
      <Grid2
        container
        width={"70%"}
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid2 xs={3}>
          <img
            src="https://images.bauerhosting.com/empire/2023/06/empaug23-newsstand-cover-crop.jpg?q=80&auto=format&w=1400&ar=16:9&fit=crop&crop=top"
            alt=""
            style={{ width: "90%" }}
          />
        </Grid2>
        <Grid2 xs={9}>
          <Typography className={s.title} variant="h5" color="text.secondary">
            Empire Issue Preview – Rebel Moon, Blue Beetle, Gran Turismo, Seth
            Rogen & Evan Goldberg
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        container
        width={"70%"}
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid2 xs={3}>
          <img
            src="https://images.bauerhosting.com/empire/2023/07/gotg3.jpg?q=80&auto=format&w=1400&ar=16:9&fit=crop&crop=top"
            alt=""
            style={{ width: "90%" }}
          />
        </Grid2>
        <Grid2 xs={9}>
          <Typography className={s.title} variant="h5" color="text.secondary">
            James Gunn Hints At Guardians Spin-Off Featuring Star-Lord Becoming
            A Reality
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        container
        width={"70%"}
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid2 xs={3}>
          <img
            src="https://images.bauerhosting.com/empire/2023/07/napoleon-trailer.jpg?q=80&auto=format&w=1400&ar=16:9&fit=crop&crop=top"
            alt=""
            style={{ width: "90%" }}
          />
        </Grid2>
        <Grid2 xs={9}>
          <Typography className={s.title} variant="h5" color="text.secondary">
            Napoleon Trailer Sends Joaquin Phoenix To War In Ridley Scott’s
            Historical Epic
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        container
        width={"70%"}
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid2 xs={3}>
          <img
            src="https://images.bauerhosting.com/empire/2023/07/john-wick-chapter-4.jpg?q=80&auto=format&w=1400&ar=16:9&fit=crop&crop=top"
            alt=""
            style={{ width: "90%" }}
          />
        </Grid2>
        <Grid2 xs={9}>
          <Typography className={s.title} variant="h5" color="text.secondary">
            John Wick 4 Nearly Had A More Obvious Final Scene: ‘The Audience
            Preferred The Ambiguous Ending’ – Exclusive
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        container
        width={"70%"}
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid2 xs={3}>
          <img
            src="https://images.bauerhosting.com/empire/2023/07/napoleon-trailer.jpg?q=80&auto=format&w=1400&ar=16:9&fit=crop&crop=tophttps://images.bauerhosting.com/empire/2023/07/beetle-tw.png?q=80&auto=format&w=1400&ar=16:9&fit=crop&crop=top"
            alt=""
            style={{ width: "90%" }}
          />
        </Grid2>
        <Grid2 xs={9}>
          <Typography className={s.title} variant="h5" color="text.secondary">
            Blue Beetle’s Super-Suit Is ‘The Coolest Suit There Is’, Says Xolo
            Maridueña – Exclusive Image
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}
