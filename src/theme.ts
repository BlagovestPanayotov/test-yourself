import { extendTheme } from "@chakra-ui/react";

const config = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  config,
});

export default theme;
