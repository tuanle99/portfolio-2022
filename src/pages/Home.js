import React from "react";
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";
import TypeWriterEffect from "react-typewriter-effect";

import { useWindowDimensions } from "../util/Helper";
import { backgroundColor2, textColor2 } from "../css/Globalvar";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

export default function Home() {
  const { height } = useWindowDimensions();
  const backgroundHeight = height * 0.8;

  return (
    <Box
      id="Home"
      sx={{
        height: backgroundHeight,
        backgroundColor: backgroundColor2,
        color: textColor2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h3">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Red Hat Display" }}
            startDelay={100}
            cursorColor="black"
            text="Full-Stack Developer"
            typeSpeed={100}
            // scrollArea={myAppRef}
          />
        </Typography>
      </ThemeProvider>
    </Box>
  );
}
