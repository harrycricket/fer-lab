import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useNavigate } from "react-router-dom";
const style = (theme) => {
  return {
    container: {
      backgroundColor: theme.palette.background.paper,
    },
    image: {},
    content: {
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
    },
  };
};
export default function PlayerCard({ player }) {
  console.log(player.img);
  const navigate = useNavigate();
  const theme = useTheme();
  const s = style(theme);
  return (
    <Box sx={s.container}>
      <Box sx={s.image}>
        <img src={player.img} alt="" style={{ width: "100%" }} />
      </Box>
      <Box sx={s.content}>
        <Box>
          <Typography
            sx={s.title}
            style={{ fontSize: "2.4rem", fontWeight: "700" }}
            variant="h3"
            color={"text.brands"}
          >
            {player.title}
          </Typography>
          <Typography
            sx={s.nation}
            style={{ fontSize: "1.4rem" }}
            variant="h4"
            color={"text.secondary"}
          >
            Nation: {player.nation}
          </Typography>
          <Typography
            sx={s.year}
            style={{ fontSize: "1.4rem" }}
            variant="h4"
            color={"text.secondary"}
          >
            Year published: {player.year}
          </Typography>
        </Box>
        <IconButton onClick={() => navigate("detail/" + player.id)}>
          <MoreVertOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
