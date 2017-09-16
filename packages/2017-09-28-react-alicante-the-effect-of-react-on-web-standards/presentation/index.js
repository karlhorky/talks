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
            <ListItem>dissatisfaction with web standards APIs</ListItem>
            <ListItem>react: new paradigms</ListItem>
            <ListItem>react: embracing standards</ListItem>
            <ListItem>react: dissatisfaction with standards</ListItem>
            <ListItem>react: standards proposals</ListItem>
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
            what: examples of web standards that you will come back to
          </Heading>
          <Text>TODO: Make sure this isnt too boring</Text>
          <List>
            <ListItem>DOM manipulation</ListItem>
            <ListItem>this</ListItem>
            <ListItem>Custom Elements</ListItem>
            <ListItem>AJAX</ListItem>
            <ListItem>Video Tag</ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>web standards</Heading>
          <Heading size={4}>
            who: small selection of current and historical representation on
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
            <ListItem>adobe</ListItem>
            <ListItem>facebook</ListItem>
            <ListItem>opera</ListItem>
            <ListItem>yahoo</ListItem>
            <ListItem>samsung</ListItem>
            <ListItem>
              smaller companies like Airbnb, Fastly, Odd Concepts, etc
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>web standards</Heading>
          <Heading size={4}>who: implementers (browser vendors)</Heading>
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
          <Heading size={4}>how: consensus-based</Heading>
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
              Simpler, declarative DOM Updates (Ember / Knockout via "Key-value
              observation" data binding, Angular via "dirty checking" data
              binding) (Prior art - .NET WPF with XAML)<br />
              "Data binding makes the UI (a dynamic process) look more like a
              static program relative to your data model" - Pete Hunt
              (https://www.youtube.com/watch?v=-DX3vJiqxm4)<br />
              "Data binding is a polyfill for reactive JavaScript/DOM" - Pete
              Hunt (https://www.youtube.com/watch?v=-DX3vJiqxm4)
            </ListItem>
            <ListItem>AJAX APIs</ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>React (2013)</Heading>
          <Heading size={3}>A new library is born</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>React: new / improved paradigms</Heading>
          <List>
            <ListItem>
              declarative data updates via data-binding with virtual DOM
            </ListItem>
            <ListItem>
              functions instead of strings - functional programming (use
              JavaScript instead of passing strings back and forth between JS
              and HTML)
            </ListItem>
            <ListItem>
              use JavaScript more instead of domain-specific languages (JSX)
            </ListItem>
            <ListItem>unidirectional data flow</ListItem>
            <ListItem>component model</ListItem>
            <ListItem>minimalism</ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>React: new / improved paradigms</Heading>
          <Heading size={3}>declarative data updates / virtual DOM</Heading>
          <br />
          "Virtual DOM - a less leaky polyfill for reactive JavaScript / DOM" -
          Pete Hunt (https://www.youtube.com/watch?v=-DX3vJiqxm4)<br />
          Re-render everything to virtual DOM, compute the differences and then
          do the minimum change to the real DOM<br />
          Makes imperative DOM updates able to be done declaratively<br />
          Allows much simpler declaration of reactive views through less
          worrying about the implementation details of data-binding<br />
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
          <Heading size={3}>React: new / improved paradigms</Heading>
          <Heading size={3}>
            JSX: functions instead of templates with strings - functional
            programming
          </Heading>
          <List>
            <ListItem>
              use full power of JavaScript instead of deliberately underpowered
              languages...
            </ListItem>
            <ListItem>...but also with familiarity to HTML / CSS</ListItem>
            <ListItem>
              use JavaScript instead of passing strings back and forth between
              JS and HTML
            </ListItem>
            <ListItem>auto-escaping for defense against XSS</ListItem>
            <ListItem>
              use JavaScript more instead of domain-specific languages (JSX)
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>React: new / improved paradigms</Heading>
          <Heading size={3}>unidirectional data flow</Heading>
          TODO: Research
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>React: new / improved paradigms</Heading>
          <Heading size={3}>component model</Heading>
          <List>
            <ListItem>
              The React Component: a highly cohesive building block for UIs
              loosely coupled with other components. They are:<br />
              - Reusable<br />
              - Composable<br />
              - Unit Testable<br />
              (Pete Hunt React - Rethinking Best Practices
              https://www.youtube.com/watch?v=DgVS-zXgMTk)
            </ListItem>
            <ListItem>
              The React Component: an idempotent functions describing your UI at
              any point in time (Pete Hunt React - Rethinking Best Practices
              https://www.youtube.com/watch?v=DgVS-zXgMTk)
            </ListItem>
            <ListItem>
              "React is a component model for abstractions" Reacts component
              model can be used to target abstractions at different levels (DOM,
              Native)
              https://photos.google.com/share/AF1QipPzfT9hEIGsZT9MZqN7847Ia74oTcQh0FvVZAjNyxwmCxp-h3_xjmQYkoSLUKFNWA?key=WHhKQUxvRXhpZ1drNFlXX1VWZEtvSzNJZnpkM1V3
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>React: new / improved paradigms</Heading>
          <Heading size={3}>minimalism</Heading>
          <List>
            <ListItem>
              "Instead of providing many framework features, React is trying to
              utilize patterns, paradigms and JavaScript language features to
              accomplish the same tasks that other frameworks have dedicated
              APIs for." - sebastian markbage
              https://2014.jsconf.eu/speakers/sebastian-markbage-minimal-api-surface-area-learning-patterns-instead-of-frameworks.html
            </ListItem>
            <ListItem>
              "The expense of your library depends on its total API surface
              area. React tries to limit this surface area so that you can work
              with standard JavaScript" - sebastian markbage
              https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>React: embracing existing standards + APIs</Heading>
          <Text>TODO: Overview slide</Text>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>React: embracing existing standards + APIs</Heading>
          <List>
            <ListItem>
              "`One JavaScript` - build on the ubiquity of JavaScript instead of
              inventing too many new abstractions" - sebastian markbage
              https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
            <ListItem>
              "react already has a small surface area, but we're actively
              removing proprietary features from the framework" - sebastian
              markbage https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
            <ListItem>
              "Standard JavaScript syntax represents an intermediate format that
              can be shared across libraries" - sebastian markbage
              https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
            <ListItem>
              "the next thing I want to work on is basically just formalizing
              this step in the process - how do we remove existing features from
              the existing language? they will never be removed from the web
              because you can't remove things from the web. but it can be
              removed from our industry's mental surface area ('Rethink the
              stack and purge')" - sebastian markbage
              https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
            <ListItem>
              "It's much easier to recover from no abstraction than the wrong
              abstraction" - sebastian markbage
              https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
            <ListItem>
              "Abstraction comes with significant costs and significant risks" -
              sebastian markbage https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
            <ListItem>
              "Make abstractions worth their weight - some things are worth
              abstracting, some not" - sebastian markbage
              https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
            <ListItem>
              "React is only the view layer - only a handful of APIs to remember
              and no need to google stuff all the time" dan abramov
              http://threedevsandamaybe.com/the-history-of-react-and-flux-with-dan-abramov/
            </ListItem>
            <ListItem>
              "strategy to make a better library: listen to slow moving
              standards committees (use polyfills to write standards-based JS
              instead of libraries)" - sebastian markbage
              https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
            <ListItem>
              "We're not trying to diverge from standards like web components
              with this, we just think that the functional approach taken by
              React means that we can drop so much more of the surface area" -
              sebastian markbage https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
            <ListItem>
              React can take advatage of things in the web components
              specifications like Shadow DOM<br />
              (Pete Hunt: React - Rethinking Best Practices
              https://www.youtube.com/watch?v=DgVS-zXgMTk)
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>React: dissatisfaction with standards</Heading>
          <Text>
            TODO: Overview<br />
            <Heading size={4}>Philosophy of reinvention</Heading>
            https://twitter.com/cowboy/status/339858717451362304?lang=en
          </Text>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>React: dissatisfaction with standards</Heading>
          <List>
            <ListItem>
              "well, the DOM kind of sucks - the DOM is an imperative API, DOM
              diffing is a necessary hack. the problem is, the DOM is a terrible
              target for functional programming. we've done the best we can with
              what we have and we've created this diffing algorithm and these
              other cool abstractions like the virtual DOM and all this stuff
              right? but if we didn't have to use the DOM as our target, we
              wouldn't" - sebastian markbage
              https://www.youtube.com/watch?v=Zemce4Y1Y-A
            </ListItem>
            <ListItem>
              DOM Attributes and properties are a strange API (sebastian
              markbage https://www.youtube.com/watch?v=Zemce4Y1Y-A)
            </ListItem>
            <ListItem>
              Not all DOM properties have a declarative form - video.play() &
              video.pause() (sebastian markbage
              https://www.youtube.com/watch?v=Zemce4Y1Y-A)
            </ListItem>
            <ListItem>
              The DOM should be smart enough to figure out what needs to be
              efficiently updated instead when everything is replaced instead of
              needing Reacts diffing algorithm (sebastian markbage
              https://www.youtube.com/watch?v=Zemce4Y1Y-A)
            </ListItem>
            <ListItem>
              HTML / CSS Model tightly coupled to the DOM<br />
              (sebastian markbage https://www.youtube.com/watch?v=Zemce4Y1Y-A)
            </ListItem>
            <ListItem>
              "I dont really like html and css all that much anyway - so many
              workarounds and hacks are needed because basic functionality is
              lacking" - sebastian markbage
              https://www.youtube.com/watch?v=Zemce4Y1Y-A
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>who made it + is making it still</Heading>
          <Text>their involvement with web standards</Text>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>compare / contrast to web components</Heading>
          <List>
            <ListItem>
              "Web components was going to save us from everything in the DOM
              world - unfortunately [it doesn't achieve this]"<br />
              - does nothing to enforce declarative APIs<br />
              - impossible to automatically map arbitrary Web component to
              react-like declarative API<br />
              - most web components assume an imperative API (different
              programming model)<br />
              - complex model for children<br />
              - all of the problems that we have with the DOM are there with web
              components<br />
              (sebastian markbage https://www.youtube.com/watch?v=Zemce4Y1Y-A)
            </ListItem>
            <ListItem>
              web components doesnt focus on composability (data flow between
              parent component and child component)<br />
              web components fully embraces the DOM and adds new APIs. React
              hates the DOM and only interacts with it through message passing,
              allowing things like server-side rendering which is not possible
              with Web Components<br />
              (Pete Hunt: React - Rethinking Best Practices
              https://www.youtube.com/watch?v=DgVS-zXgMTk)
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>Standardization efforts</Heading>
          Since React focuses on a minimal API surface, relying often on
          JavaScript language features within JSX, a lot of the standards
          proposals focus on improving JavaScript instead of shoehorning React
          proprietary features into the language.
          <List>
            <ListItem>
              "I represent facebook on the TC39 standards committee, but don't
              worry, the bad parts are not mine, they're somone else's" -
              sebastian markbage https://www.youtube.com/watch?v=4anAwXYqLG8
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          @sebmarkbage (Facebook) - Immutable JS<br />
          ECMAScript Immutable Data structures (functional programming)
          https://github.com/sebmarkbage/ecmascript-immutable-data-structures
        </Slide>

        <Slide bgColor="white">
          @sebmarkbage (Facebook) - Realm Snapshot for ECMAScript<br />
          https://github.com/sebmarkbage/ecmascript-realm-snapshot
        </Slide>

        <Slide bgColor="white">
          @ljharb (Airbnb) - Promise.prototype.finally<br />
          Way to register a callback for when the promise has been either
          resolved or rejected<br />
          "The essential use case here is cleanup - I want to hide the 'loading'
          spinner on my AJAX request"
          https://github.com/tc39/proposal-promise-finally/
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>Why hasnt there been more progress?</Heading>
          (2015) browser implementers are not ready for simpler alternative to
          the existing DOM<br />
          "unfortunately, I think this might be too radical. at least, right now
          (2015) browser implementers are not willing to take on these types of
          tasks. If they were to implement the virtual DOM, they would build it
          on top of the existing imperative API" - sebastian markbage
          https://www.youtube.com/watch?v=Zemce4Y1Y-A
        </Slide>

        <Slide bgColor="white">
          <Heading size={3}>Why hasnt there been more progress?</Heading>
          however, the extensible web manifesto is cool - it allows lower-level
          access to the things already available, and the browser vendors dont
          need to embrace a completely new model like React - sebastian markbage
          https://www.youtube.com/watch?v=Zemce4Y1Y-A
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>React: Other Influence</Heading>
          TODO: Fill this in<br />
          - angular: single-direction data flow<br />
          - vue: API similarities incl. single-file components, provide/inject
          (similar to Reacts context) 2.2.0, higher-order component improvements
          2.4.0<br />
          - polymer: imports
        </Slide>

        <Slide bgColor="white">
          <Heading size={2}>Future</Heading>
          TODO: Research / fill this in
        </Slide>
      </Deck>
    );
  }
}
