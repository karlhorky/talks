// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  Deck,
  // Fill,
  // Fit,
  // Heading,
  // Image,
  // Layout,
  // Link,
  // ListItem,
  // List,
  MarkdownSlides as markdownSlides
  // Quote,
  // Slide,
  // Text
} from "spectacle";

// eslint-disable-next-line import/no-unresolved
import slidesMarkdown from "raw-loader!./slides.md";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const theme = createTheme(
  {
    primary: "#e9f0f5",
    secondary: "#2e3648",
    tertiary: "#ae3737",
    quartenary: "#cddaea"
  },
  {
    primary: "Montserrat",
    secondary: "Montserrat"
  }
);

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/seattlejs/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const images = {
  // bg: require("../assets/bg_skyline.svg"),
  // logo: require("../assets/logo-seattlejsconference.svg"),
  // logoAlexa: require("../assets/logo-alexa.svg"),
  // logoImdb: require("../assets/logo-IMDb.svg"),
  // logoFormidable: require("../assets/logo-formidable.svg"),
  // logoMicrosoft: require("../assets/logo-microsoft.svg"),
  // logoZillow: require("../assets/logo-zillow.svg"),
  // logoGalvanize: require("../assets/logo-galvanize.svg"),
  // logoAppSheet: require("../assets/logo-appsheet.svg"),
  // logoGoDaddy: require("../assets/logo-godaddy.svg"),
  // logoNpm: require("../assets/logo-npm.svg"),
  // logoSitepen: require("../assets/logo-sitepen.svg"),
  // logoIndeed: require("../assets/logo-indeed.png"),
  // logoOpenDoor: require("../assets/logo-opendoor.svg"),
  // logoSheCodesNow: require("../assets/logo-shecodesnow.png"),
  // logoSendGrid: require("../assets/logo-sendgrid.svg"),
  // logoTwitter: require("../assets/logo-twitter.svg"),
  // logoUnbounce: require("../assets/logo-unbounce.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={0}
      >
        {markdownSlides(slidesMarkdown)}
      </Deck>
    );
  }
}
