import { useTheme } from "@emotion/react";
import {
  ContactPage,
  DarkMode,
  Feed,
  Info,
  LightMode,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navigation({ colorMode }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [value, setValue] = useState(1);
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <>
      <Grid2
        className="navBar"
        container
        sx={{
          backgroundColor: theme.palette.background.nav,
          position: "fixed",
          width: "100%",
          zIndex: "1000",
          height: "60px",
          padding: "auto 0",
          left: "0",
          top: "0",
        }}
      >
        <Grid2 xs={3}>
          <Typography
            sx={{ fontSize: "2.4rem", marginLeft: "60px" }}
            color="brands.main"
          >
            List Films
          </Typography>
        </Grid2>
        <Grid2
          xs={9}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              onClick={() => navigate("/")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <HomeIcon /> <Typography>Home</Typography>
                </Box>
              }
              value={1}
            />
            <Tab
              onClick={() => navigate("/about")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <Info /> <Typography> About</Typography>
                </Box>
              }
              value={2}
            />
            <Tab
              onClick={() => navigate("/news")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <Feed /> <Typography> News</Typography>
                </Box>
              }
              value={3}
            />

            <Tab
              onClick={() => navigate("/contact")}
              label={
                <Box sx={{ display: "flex", marginRight: "10px" }}>
                  <ContactPage /> <Typography>Contact</Typography>
                </Box>
              }
              value={4}
            />
          </Tabs>
        </Grid2>
      </Grid2>
      <Box sx={{ height: "60px", width: "100%" }}></Box>
    </>
  );
}
