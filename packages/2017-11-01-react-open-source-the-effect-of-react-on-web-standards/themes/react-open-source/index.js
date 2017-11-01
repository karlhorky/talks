import screen from "./screen";
import print from "./print";

export const colors = {
  primary: "#2e3138",
  secondary: "#f5fbff",
  tertiary: "#b8ead2",
  quartenary: "#b8ead2"
};

export const theme = {
  screen: screen(colors, {
    primary: "Montserrat",
    secondary: "Montserrat"
  }),
  print: print()
};
