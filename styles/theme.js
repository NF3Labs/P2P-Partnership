import { extendTheme, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  /* fonts: {
    body: `'Grandis', sans-serif`,
  }, */
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#FFFFFF", "#1A1429")(props),
        color: mode("#000000", "#FFFFFF")(props),
      },
    }),
  },
  colors: {
    bg: {
      dark: "#1A1429",
      light: "#FFFFFF"
    },
    border: {
      dark: "#1A1429",
      light: "#d9d9d9"
    },
    lightBg: {
      dark: "#2A2142",
      light: "#F1F1F1"
    },
    content: {
      dark: "#C4C4D4",
      light: "#696869"
    },
    header: {
      dark: "#403462",
      light: "#BCBCBC"
    },
    input: {
      dark: "#ffffff",
      light: "#696869"
    },
    selecter: {
      dark: "#ffffff",
      light: "#000000"
    },
    whiter: "#FFFFFF",
    blacker: "#000000",
    grayer: "#F1F1F1",
    pinker: "#FF0083",
    whitePinker: "#FF80C1",
    greener: "#4ACB53",
    oranger: "#FF2E00",
    pinkerHover: "#FF008350",
    whiteHover: "#ffffffb0",
    bluer: "#1197E2",
    title: {
      dark: "#ffffff",
      light: "#000000"
    },
    titleHover: {
      dark: "#ffffff50",
      light: "#00000050"
    },
    placeholder: {
      dark: "#C4C4D4",
      light: "#BCBCBC"
    }
  },
  components: {
    Alert: {
      variants: {
        // define own toast variant
        toast: (props) => ({
          container: {
            border: mode("2px solid black", "2px solid white")(props),
            bg: mode("#FFFFFF", "#1A1429")(props),
          },
        }),
      },
    },
  },
});

export default theme;
