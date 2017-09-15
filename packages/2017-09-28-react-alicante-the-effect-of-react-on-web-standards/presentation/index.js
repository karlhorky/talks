// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  Deck,
  // Fill,
  // Fit,
  Heading,
  // Image,
  // Layout,
  // Link,
  ListItem,
  List,
  // Quote,
  Slide,
  Text
} from "spectacle";

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
        autoplay
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={0}
      >
        <Slide bgColor="white">
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>Clickbaity cliffhanger</Heading>
          TODO: think of some interesting situation to open with, with
          record-scratch effect
        </Slide>

        <Slide bgColor="white">
          <List>
            <ListItem>web standards</ListItem>
            <ListItem>attempts to improve web standards</ListItem>
            <ListItem>react: new paradigms</ListItem>
            <ListItem>react: standardization efforts</ListItem>
            <ListItem>react: other influence</ListItem>
            <ListItem>future</ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>Web Standards</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>web standards</Heading>
          <Heading size={4}>
            small selection of current and historical representation on
            standards bodies (for example: W3C TAG, TC39, CSSWG, CSS Houdini
            task force, WHATWG, WICG, etc)
          </Heading>
          <Text>TODO: Make sure this isnt too boring</Text>
          <List>
            <ListItem>w3c</ListItem>
            <ListItem>google</ListItem>
            <ListItem>mozilla</ListItem>
            <ListItem>microsoft</ListItem>
            <ListItem>apple</ListItem>
            <ListItem>facebook</ListItem>
            <ListItem>opera</ListItem>
            <ListItem>yahoo</ListItem>
            <ListItem>samsung</ListItem>
            <ListItem>
              smaller companies like Fastly, Odd Concepts, etc
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>web standards</Heading>
          <Heading size={4}>implementers (browser vendors)</Heading>
          <Text>TODO: Make sure this isnt too boring</Text>
          <List>
            <ListItem>google</ListItem>
            <ListItem>mozilla</ListItem>
            <ListItem>microsoft</ListItem>
            <ListItem>apple</ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>web standards</Heading>
          <Heading size={4}>consensus-based</Heading>
          <List>
            <ListItem>
              changes need to be agreed upon by multiple stakeholders
            </ListItem>
            <ListItem>standards recommendations can be ignored</ListItem>
            <ListItem>
              browser vendors can choose to forge their own paths (IE's JScript
              & AJAX, Chrome's default passive touch listeners & SPDY)
            </ListItem>
            <ListItem>
              This is getting better, with browser vendors pledging to support
              more standards-based development ("our policy on thoughtfully
              augmenting the platform" - Chrome)
              https://www.chromium.org/blink/developer-faq#TOC-What-s-stopping-Chrome-from-shipping-proprietary-features-
            </ListItem>
            <ListItem>
              TODO: Make this recurring theme more of a main point example of
              conflict: Microsoft blocking ES4 (recurring theme: "I think it was
              polarized as a consequence of the ES4 team refusing to consider
              any other opinions" - Douglas Crockford)
            </ListItem>
            <ListItem>
              fundamentally different than library API development with single
              owner and monoculture
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>Dissatisfaction with Web Standards</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>dissatisfaction with web standards</Heading>
          <List>
            <ListItem>verbosity of APIs</ListItem>
            <ListItem>boilerplate</ListItem>
            <ListItem>
              insufficient component primitives (Why we Need an App Browser by
              Ken Wheeler)
            </ListItem>
            <ListItem>not being able to remember syntax</ListItem>
            <ListItem>examples: xhr, toggling visibility</ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>simplified apis</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={4}>simplified apis, widgets</Heading>
          <Heading size={5}>
            Prototype, jQuery, Dojo, MooTools (2005-2006)
          </Heading>
          <Text>
            tools to simplify programming instead of using overcomplicated,
            fragmented DOM APIs (Why we need an app browser by Ken Wheeler)
          </Text>
          <Text>
            provided UI widgets which are not part of the web platform (Why we
            need an app browser by Ken Wheeler)
          </Text>
          <Text>
            influenced several JS web standards, including
            document.querySelector & document.querySelectorAll
          </Text>
          <Text>
            influenced several HTML web standards, including canvas, video,
            input[type=datepicker] (Why we need an app browser by Ken Wheeler)
          </Text>
        </Slide>

        <Slide bgColor="white">
          <Heading size={4}>simplified apis</Heading>
          <Heading size={5}>CoffeeScript</Heading>
          <Text>
            influenced ES6, including arrow functions and for-of loops
            https://news.ycombinator.com/item?id=9266517
          </Text>
        </Slide>

        <Slide bgColor="white">
          <Heading size={4}>simplified apis</Heading>
          <Heading size={5}>Angular, Knockout, Ember (2009-2011)</Heading>
          <List>
            <ListItem>
              Simpler, declarative DOM Updates (via data binding) (Prior art -
              .NET WPF with XAML)<br />
              "Data binding makes the UI (a dynamic process) look more like a
              static program relative to your data model" - Pete Hunt
              (https://www.youtube.com/watch?v=-DX3vJiqxm4)
            </ListItem>
            <ListItem>AJAX APIs</ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>React (2013)</Heading>
          <Heading size={3}>A new library is born</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>new paradigms</Heading>
          <List>
            <ListItem>declarative data updates / virtual DOM</ListItem>
            <ListItem>
              functions instead of strings - functional programming (use
              JavaScript instead of passing strings back and forth between JS
              and HTML)
            </ListItem>
            <ListItem>unidirectional data flow</ListItem>
            <ListItem>component model</ListItem>
            <ListItem>minimalism</ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>declarative data updates / virtual DOM</Heading>
          <List>
            <ListItem>
              Tries to improve upon flaws and shortcomings in the DOM (seb
              markbage DOM as 2nd class citizen talk, ken wheeler DOM criticism
              tweets)
            </ListItem>
            <ListItem>
              declaratively define how your view should look instead of
              imperatively mutating DOM using JS APIs
            </ListItem>
            <ListItem>decouple renderer from DOM</ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>
            functions instead of strings - functional programming
          </Heading>
          <List>
            <ListItem>
              use JavaScript instead of passing strings back and forth between
              JS and HTML
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>unidirectional data flow</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>component model</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>minimalism</Heading>
          <List>
            <ListItem>
              "no abstraction is better than the wrong abstraction" - sebastian
              markbage
            </ListItem>
            <ListItem>
              "Instead of providing many framework features, React is trying to
              utilize patterns, paradigms and JavaScript language features to
              accomplish the same tasks that other frameworks have dedicated
              APIs for." - sebastian markbage
            </ListItem>
            <ListItem>
              "React is only the view layer - only a handful of APIs to remember
              and no need to google stuff all the time" dan abramov
              http://threedevsandamaybe.com/the-history-of-react-and-flux-with-dan-abramov/
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>who made it + is making it still</Heading>
          <Text>their involvement with web standards</Text>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>quick compare / contrast to web components</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>Standardization efforts</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>Influence</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>Future</Heading>
        </Slide>
      </Deck>
    );
  }
}
