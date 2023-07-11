import React, { Component } from "react";
import "./footer.css";
import { useTheme } from "@emotion/react";

export default function Footer() {
  const theme = useTheme();
  return (
    <div
      className="footer-container"
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
      Copyright &copy; 2023 by Huynh Van Phuot
    </div>
  );
}
