import { useTheme } from "@emotion/react";
import OndemandVideoTwoToneIcon from "@mui/icons-material/OndemandVideoTwoTone";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModelVideoPlayer from "../../components/model-video-player/ModelVideoPlayer";
import { BASE_URL } from "../../constant";
import "./detail.css";

export default function Detail() {
  const [open, setOpen] = useState();
  const [player, setPlayer] = useState();
  const userName = useParams();
  const theme = useTheme();
  console.log(theme);

  useEffect(() => {
    getPlayer();
  }, []);
  const getPlayer = async () => {
    try {
      const response = await fetch(BASE_URL + "/" + userName.id);
      const player = await response.json();
      console.log(player);
      setPlayer(player);
      console.log(player.img);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container">
      {player && (
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            width: "50%",
            position: "relative",
            marginTop: "10rem",
          }}
        >
          {/* <Box>
            <img src={player.img} alt="" style={{ width: "100%" }} />
          </Box> */}
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper2,
              padding: 3,
              position: "relative",
            }}
          >
            <Typography variant="h4" color="text.brands">
              Name: {player.title}
            </Typography>

            <Box>
              <Typography variant="h6" color="text.p">
                Nation: {player.nation}
              </Typography>
              <Typography variant="h6" color="text.p">
                Year published: {player.year}
              </Typography>
              <Typography variant="h6" color="text.p">
                View: {player.view}
              </Typography>
            </Box>
            <IconButton
              color="error"
              sx={{ position: "absolute", top: 15, right: 5 }}
              onClick={() => setOpen(true)}
            >
              <OndemandVideoTwoToneIcon sx={{ fontSize: "3rem" }} />
            </IconButton>
            <ModelVideoPlayer open={open} setOpen={setOpen} player={player} />
          </Box>
        </Box>
      )}
    </div>
  );
}
