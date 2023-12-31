// import { useState } from "react";
import Button from "@mui/material/Button";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

import Stack from "@mui/material/Stack";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}
const theme = extendTheme({
  // ...your custom theme
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function App() {
  return (
    <>
      <CssVarsProvider theme={theme}>
        <ModeToggle />
        <p>hello</p>
        <Button variant="contained">Hello world</Button>
        <AccessAlarm />
        <ThreeDRotation />
        <Stack direction="row" spacing={3}>
          <HomeIcon />
          <HomeIcon color="primary" />
          <HomeIcon color="secondary" />
          <HomeIcon color="success" />
          <HomeIcon color="action" />
          <HomeIcon color="disabled" />
          <HomeIcon sx={{ color: pink[500] }} />
        </Stack>
      </CssVarsProvider>
    </>
  );
}

export default App;
