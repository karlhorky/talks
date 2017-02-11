// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  // Fill,
  // Fit,
  Heading,
  Slide
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#fff8eb",
  secondary: "#482e2e",
  tertiary: "#ae4737",
  quartenary: "#ffdb99"
}, {
  primary: "Montserrat",
  secondary: "Montserrat"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} progress="none">
        <Slide>
          <Heading size={2} textColor="secondary">
            kununu
          </Heading>
          <br />
          <Heading size={4} textColor="secondary">
            kununu.com/at/kununu/jobs
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
