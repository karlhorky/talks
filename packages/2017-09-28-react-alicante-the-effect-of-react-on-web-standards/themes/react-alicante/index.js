import screen from "./screen";
import print from "./print";

export const colors = {
  primary: "#2e3648",
  secondary: "#f5fbff",
  tertiary: "#baccde",
  quartenary: "#772e2e"
};

export const theme = {
  screen: screen(colors, {
    primary: "Montserrat",
    secondary: "Montserrat"
  }),
  print: print()
};
