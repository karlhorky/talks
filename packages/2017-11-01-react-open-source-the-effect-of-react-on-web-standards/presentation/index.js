// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  // Layout,
  // Link,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import { theme } from "../themes/react-open-source/";

// Require CSS
require("normalize.css");

const images = {
  jeffMorrison: require("../assets/jeffMorrison.jpg"),
  jordanHarband: require("../assets/jordanHarband.jpg"),
  logoAdobe: require("../assets/logo-adobe.svg"),
  logoAirbnb: require("../assets/logo-airbnb.svg"),
  logoApple: require("../assets/logo-apple.svg"),
  logoEbay: require("../assets/logo-ebay.svg"),
  logoFacebook: require("../assets/logo-facebook.svg"),
  logoGoogle: require("../assets/logo-google.svg"),
  logoIntel: require("../assets/logo-intel.svg"),
  logoJquery: require("../assets/logo-jquery.svg"),
  logoMozilla: require("../assets/logo-mozilla.svg"),
  logoMicrosoft: require("../assets/logo-microsoft.svg"),
  logoOpera: require("../assets/logo-opera.svg"),
  logoPaypal: require("../assets/logo-paypal.svg"),
  logoSamsung: require("../assets/logo-samsung.svg"),
  logoW3C: require("../assets/logo-w3c.svg"),
  logoYahoo: require("../assets/logo-yahoo.svg"),
  sebastianMarkbage: require("../assets/sebastianMarkbage.jpg"),
  sebastianMarkbage2: require("../assets/sebastianMarkbage-2.jpg"),
  twitterTranspilation: require("../assets/twitter-transpilation.png")
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
        controls={false}
        contentWidth={1024}
        contentHeight={768}
      >
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
          <Notes>
            Personal intro
            <List>
              <ListItem>CAN / AUT Freelance JS Engineer</ListItem>
              <ListItem>twitter handle top right</ListItem>
            </List>
            about talk
            <List>
              <ListItem>
                45 minute talk (at alicante) in 30 minutes - may skip some
                things that will be available on YouTube when they publish
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>
            The Effect of React on<br />Web Standards
          </Heading>
          <List>
            <Appear>
              <ListItem>Web Standards</ListItem>
            </Appear>
            <Appear>
              <ListItem>Discontent, New Approaches</ListItem>
            </Appear>
            <Appear>
              <ListItem>React</ListItem>
            </Appear>
            <Appear>
              <ListItem>Web Standards Proposals</ListItem>
            </Appear>
            <Appear>
              <ListItem>Future</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>Standards: What, Who, How</ListItem>
              <ListItem>
                Discontent with web standards and new approaches with Simplified
                APIs
              </ListItem>
              <ListItem>
                React: Paradigms, Embracing standards, discontent with
                standards, comparison to web components, who is involved, other
                influences
              </ListItem>
              <ListItem>Web Standards Proposals</ListItem>
              <ListItem>
                Future: Integration efforts, specs, alternatives to the DOM, new
                languages
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1}>React</Heading>
          <Heading size={2}>Not just a library</Heading>
          <List style={{ marginLeft: 65 }}>
            <Appear>
              <ListItem textSize={70}>A Paradigm</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={70}>An Ecosystem</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={70}>A Philosophy</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                paradigm: declaratively describe web UIs, native app, VR, even
                command line interfaces or music
              </ListItem>
              <ListItem>
                ecosystem: rich community, including members of standards
                committees
              </ListItem>
              <ListItem>philosophy: minimalism, fp, immutability</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            Web Standards
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What?</Heading>
          <Heading size={5}>DOM Manipulation</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-dom.example")}
            textSize={27}
          />
          <Notes>DOM Manipulation</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What?</Heading>
          <Heading size={5}>this keyword</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-this.example")}
            textSize={28}
          />
          <Notes>this</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What?</Heading>
          <Heading size={5}>&lt;video&gt; tag</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-video.example")}
            textSize={15}
          />
          <Notes>Video Tag</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What?</Heading>
          <Heading size={5}>XMLHttpRequest</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-xhr.example")}
            textSize={28}
          />
          <Notes>XmlHttpRequest(AJAX)</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What?</Heading>
          <Heading size={5}>Custom Elements</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-custom-elements.example")}
            textSize={16}
          />
          <Notes>Custom Elements (web components)</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: Who?</Heading>
          <Heading size={5}>Relevant Spec Groups</Heading>
          <List>
            <ListItem>W3C TAG</ListItem>
            <ListItem>TC39</ListItem>
            <ListItem>CSSWG</ListItem>
            <ListItem>CSS Houdini task force</ListItem>
            <ListItem>WHATWG</ListItem>
            <ListItem>WICG</ListItem>
          </List>
          <Notes>
            Which organizations make the standards?
            <List>
              <ListItem>W3C TAG</ListItem>
              <ListItem>TC39</ListItem>
              <ListItem>CSSWG</ListItem>
              <ListItem>CSS Houdini task force</ListItem>
              <ListItem>WHATWG</ListItem>
              <ListItem>WICG</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: Who?</Heading>
          <Heading size={5}>Who is on the spec groups?</Heading>
          <Appear>
            <div style={{ marginLeft: -10, marginRight: -10 }}>
              <Image
                src={images.logoW3C}
                style={{ height: 56, borderRadius: 5, marginTop: 30 }}
              />
              <Image
                src={images.logoGoogle}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoMozilla}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoMicrosoft}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoApple}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoAdobe}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoFacebook}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoIntel}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoOpera}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoEbay}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoYahoo}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoSamsung}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoPaypal}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoAirbnb}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoJquery}
                style={{
                  height: 56,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
            </div>
          </Appear>
          <Notes>
            Who are these specifications developed by? Well, mostly large
            companies and a few invited experts. With organizations like the
            TC39 you need to pay a fee to be a member.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: Who?</Heading>
          <Heading size={5}>Implementers</Heading>
          <Appear>
            <div style={{ marginLeft: -20, marginRight: -20 }}>
              <Image
                src={images.logoGoogle}
                style={{
                  height: 50,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoMozilla}
                style={{
                  height: 50,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoMicrosoft}
                style={{
                  height: 50,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
              <Image
                src={images.logoApple}
                style={{
                  height: 50,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 30
                }}
              />
            </div>
          </Appear>
          <Notes>
            But who has the final word on if, when and how the standards get
            published to developers? Only a handful of large companies.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: How?</Heading>
          <Heading size={5}>Consensus-Based</Heading>
          <List>
            <Appear>
              <ListItem textSize={60}>multiple stakeholders</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={60}>recommendations can be ignored</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={60}>non-standard paths</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={60}>vendors blocking standards</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                multiple stakeholders: changes need to be agreed upon by
                multiple stakeholders
              </ListItem>
              <ListItem>recommendations can be ignored</ListItem>
              <ListItem>
                non-standard paths: browser vendors can choose non standard
                paths, for example: IE's JScript & AJAX, Chrome's default
                passive touch listeners & SPDY)
              </ListItem>
              <ListItem>
                vendors blocking standards: example: Microsoft blocking ES4
                (recurring theme: "I think it was polarized as a consequence of
                the ES4 team refusing to consider any other opinions" - Douglas
                Crockford)
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              We&rsquo;re instituting strong guidelines on new features that
              emphasize standards, interoperability, and transparency.
            </Quote>
            <Cite textColor="primary">
              Chrome Team, "Chromium Developer FAQ"
            </Cite>
          </BlockQuote>
          <Notes>
            However, this is improving, with browser vendors pledging to support
            a more standards-based model of development
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: Fundamentally different</Heading>
          <br />
          <Text lineHeight={1.4} textSize={60}>
            The web standards process is fundamentally different than library
            API development with a single owner and monoculture
          </Text>
          <Notes>
            <List>
              <ListItem>
                fundamentally different than library API development with single
                owner and monoculture
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138" fit>
            Discontent &<br /> New Approaches
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Discontent with Web Standards</Heading>
          <List>
            <Appear>
              <ListItem textSize={50}>
                excessive boilerplate (verbose APIs)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={50}>
                incompatibile or missing implementations
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={50}>insufficient components</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={50}>
                confusing or non-memorable syntax
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={50}>imperative, stateful approach</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem textSize={20}>
                excessive boilerplate: standard APIs: lots of typing and
                ceremony for simple things
              </ListItem>
              <ListItem textSize={20}>missing / non-standard impl.s</ListItem>
              <ListItem textSize={20}>
                some devs (ex Ken Wheeler) critical: not enough std common
                widgets (eg. autocomplete, time picker, better date picker)
              </ListItem>
              <ListItem textSize={20}>substr vs substring, ajax</ListItem>
              <ListItem textSize={20}>
                relevant to talk topic, react community promotes decl. APIs to
                improve ability to reason about code vs. keeping the state of
                the program in your head
              </ListItem>
            </List>
            TODO: Make this into 5 slides with examples instead?
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>Prototype, jQuery, Dojo, MooTools (2005-6)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/jquery-post.example")}
            textSize={33}
          />
          <Notes>
            So some people took it into their own hands to try to solve some of
            these problems. For instance, jQuerys take on AJAX.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>Prototype, jQuery, Dojo, MooTools (2005-6)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/dojo-dom.example")}
            textSize={22}
          />
          <Notes>Or MooToolss approach to adding an element to the DOM</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>Prototype, jQuery, Dojo, MooTools (2005-6)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/jquery-querySelectorAll.example")}
            textSize={29}
          />
          <Notes>
            These libraries inspired improvements in the DOM, like
            jQuery&rsquo;s inspiration of document.querySelectorAll and friends<br />
            Source:
            https://github.com/whatwg/html/issues/2791#issuecomment-311365657
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>CoffeeScript (2009)</Heading>
          <br />
          <CodePane
            lang="coffeescript"
            source={require("raw-loader!../assets/coffeescript.example")}
            textSize={32}
          />
          <Notes>
            CoffeeScript was a new compile-to-JS language created to make
            JavaScript easier and nicer to use, while also adding new features
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>CoffeeScript (2009)</Heading>
          <br />
          <CodePane
            lang="coffeescript"
            source={require("raw-loader!../assets/coffeescript-arrow-functions.example")}
            textSize={27}
          />
          <Notes>
            Some new features such as the arrow function also influenced
            standards https://news.ycombinator.com/item?id=9266517
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>Angular, Knockout, Ember (2009-11)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/angular.example")}
            textSize={22}
          />
          <Notes>
            Come 2009, a wave of frameworks started to appear. These frameworks
            would promote a new approach to DOM manipulation called data
            binding, prior seen in the .NET Windows Presentation Foundation
            (XAML).
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>Angular, Knockout, Ember (2009-11)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/ember-js.example")}
            textSize={18}
          />
          <br />
          <CodePane
            lang="handlebars"
            source={require("raw-loader!../assets/ember-hbs.example")}
            textSize={18}
          />
          <Notes>
            Data binding was a declarative way of describing UI and how your
            data model gets applied to that UI.
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            React (2013)
          </Heading>
          <Heading size={2} textColor="#2e3138">
            New and Improved Paradigms
          </Heading>
          <Notes>
            React came on the scene in 2013 to improve on the ideas presented by
            these frameworks and introduced new paradigms of its own.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Data binding</Heading>
          <Text lineHeight={1.4} textSize={60}>
            Forget about the implementation details of data binding
          </Text>
          <Notes>
            React&rsquo;s data binding is much more like regular JavaScript.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              There&rsquo;s not a single data binding artifact here ...
              you&rsquo;re just writing JavaScript.
            </Quote>
            <Cite textColor="primary">
              Pete Hunt, "The Secrets of React's Virtual DOM"
            </Cite>
          </BlockQuote>
          <Notes>
            because the data binding is just done with JavaScript functions
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Virtual DOM</Heading>
          <Text lineHeight={1.4} textSize={60}>
            Re-render everything without the performance hit
          </Text>
          <Notes>
            How is this improved data binding achieved? Through a concept called
            the Virtual DOM.<br />
            <br />
            With the Virtual DOM, you just declare how you want your UI to
            appear at any point in time and the actual minimal imperative DOM
            updates are done for you by React.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>JSX</Heading>
          <List>
            <Appear>
              <ListItem textSize={44}>
                JavaScript instead of a domain-specific language
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={44}>functions instead of strings</ListItem>
            </Appear>
          </List>
          <Notes>
            How does one declare what should go into the Virtual DOM to be
            updated? React proposes JSX, which is a declarative, familiar
            HTML-like syntax sugar over {"function"} calls.<br />
            JS instead of DSL: This allows use of the full power of JavaScript
            instead of a domain-specific language...<br />
            functions instead of strings: ...since components are built using
            functions and not strings.<br />
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Functional Programming</Heading>
          <List>
            <Appear>
              <ListItem textSize={44}>roots in functional programming</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={44}>pragmatic functional approach</ListItem>
            </Appear>
          </List>
          <Notes>
            The functional approach is promoted in ways other than JSX.<br />
            roots: from React&rsquo;s roots having early prototypes built in
            StandardML...<br />
            pragmatic functional approach: To the pragmatic functional approach
            taken today<br />
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              While it is influenced by ... functional programming, staying
              accessible to ... developers with different skills and experience
              levels is an explicit goal of the project.
            </Quote>
            <Cite textColor="primary">React Docs</Cite>
          </BlockQuote>
          <Notes>
            The docs highlight this, emphasizing the pragmatism of staying
            accessible instead of idealism of a purely functional style
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Immutability, Unidirectional Data Flow</Heading>
          <Text lineHeight={1.4} textSize={60}>
            Less power over data interactions is easier to reason about
          </Text>
          <Notes>
            less potential interactions with your data results in an app
            that&rsquo;s easier to reason about
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Component Model</Heading>
          <List>
            <Appear>
              <ListItem>reusable, composable, testable</ListItem>
            </Appear>
            <Appear>
              <ListItem>decoupled from output target like the DOM</ListItem>
            </Appear>
          </List>
          <Notes>
            reusable, composable, testable: because of their functional nature,
            React components can be easily reused, composed and tested<br />
            decoupled: because the component model is decoupled from the this
            allows for the component model to be used for other targets as
            mentioned before, like strings for SSR, native apps, command line
            applications
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Minimalism</Heading>
          <List>
            <Appear>
              <ListItem>deliberately low API surface area</ListItem>
            </Appear>
            <Appear>
              <ListItem>proprietary features being actively removed</ListItem>
            </Appear>
            <Appear>
              <ListItem>using React feels like using JavaScript</ListItem>
            </Appear>
          </List>
          <Notes>
            kept deliberately minimal: the "expense" of React is kept low by
            limiting API surface area<br />
            proprietary features being actively removed: React&rsquo;s
            proprietary features are being actively removed, for instance to
            instead use features available standards<br />
            using React feels like using JavaScript: not many things to
            remember. Many problems can be solved using standard JavaScript
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            React
          </Heading>
          <Heading size={2} textColor="#2e3138">
            Embracing Web Standards
          </Heading>
          <Notes>
            React has thus embraced standards, promoting web APIs whenever
            possible
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Embracing Standards</Heading>
          <List>
            <Appear>
              <ListItem>built on the ubiquity of JavaScript</ListItem>
            </Appear>
            <Appear>
              <ListItem>use polyfills to write standards-based JS</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                {"JavaScript"}: an intermediate format for sharing across
                libraries
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                built on the ubiquity of JavaScript: Built on the ubiquity of
                JavaScript instead of inventing many new abstractions
              </ListItem>
              <ListItem>
                use polyfills to write standards-based JS: instead of creating
                proprietary APIs, use existing standards-based JS and new
                proposals cross-browser with polyfills
              </ListItem>
              <ListItem>
                {"JavaScript"}: an intermediate format for sharing across
                libraries: The React team calls JavaScript syntax their chosen
                intermediate format for sharing across libraries.
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              Strategy to make a better library: listen to slow moving standards
              committees
            </Quote>
            <Cite textColor="primary">
              Sebastian Markbåge, "Minimal API Surface Area"
            </Cite>
          </BlockQuote>
          <Notes>
            Listening to standards committees is part of React&rsquo;s
            philosophy, as noted by Sebastian Markbåge (Markboge), one of the
            core React contributors at Facebook
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            React
          </Heading>
          <Heading size={2} textColor="#2e3138">
            Curating Web Standards
          </Heading>
          <Notes>
            However, React doesn&rsquo;t blindly promote all web APIs.
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              How do we remove existing features from the existing language?
              ...you can&rsquo;t remove things from the web. But they can be
              removed from our industry&rsquo;s mental surface area
            </Quote>
            <Cite textColor="primary">
              Sebastian Markbåge, "Minimal API Surface Area"
            </Cite>
          </BlockQuote>
          <Notes>
            by curating which standards React promotes, the mental surface area
            required to program in JavaScript can be reduced
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            React
          </Heading>
          <Heading size={2} textColor="#2e3138">
            Discontent with Standards
          </Heading>
          <Notes>
            There are some standards that React cannot avoid, such as the DOM.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Discontent with Standards</Heading>
          <List>
            <Appear>
              <ListItem>imperative, verbose APIs</ListItem>
            </Appear>
            <Appear>
              <ListItem>no declarative DOM updates</ListItem>
            </Appear>
            <Appear>
              <ListItem>tight coupling</ListItem>
            </Appear>
            <Appear>
              <ListItem>foundational quirks</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                imperative, verbose APIs: modifying the DOM is an imperative,
                verbose, stateful affair
              </ListItem>
              <ListItem>
                no declarative DOM updates: nothing like a diffing algorithm
                available for efficient, simple declarative updates
              </ListItem>
              <ListItem>
                tight coupling: HTML and CSS are tightly coupled to the DOM,
                making it difficult to optimize the DOM
              </ListItem>
              <ListItem>
                foundational quirks: workarounds and hacks are needed to
                abstract over quirks in the foundation and provide a uniform
                interface
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138" fit>
            Web Components
          </Heading>
          <Notes>
            Web components held the promise of a way to declare custom
            components using web standards.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Components</Heading>
          <Heading size={5}>Specifications</Heading>
          <List>
            <ListItem>custom elements</ListItem>
            <ListItem>templates</ListItem>
            <ListItem>shadow DOM</ListItem>
            <ListItem>HTML Imports</ListItem>
          </List>
          <Notes>
            Web components, as a refresher, is a set of 4 specifications:
            <List>
              <ListItem>
                custom elements: define new custom DOM elements and their
                behavior and styling
              </ListItem>
              <ListItem>
                shadow DOM: allows for encapsulated DOM subtrees to be attached
                to elements, preventing leaking of styling into or out of the
                component
              </ListItem>
              <ListItem>
                templates: define templates that will not be evaluated by the
                browser until use
              </ListItem>
              <ListItem>
                HTML Imports: declare template dependencies in HTML
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Components</Heading>
          <Heading size={5}>Advantages</Heading>
          <List>
            <Appear>
              <ListItem>shadow DOM encapsulation</ListItem>
            </Appear>
            <Appear>
              <ListItem>could become interoperable standard</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                shadow DOM encapsulation: the shadow DOM provides strong
                encapsulation previously unavailable using existing standards
              </ListItem>
              <ListItem>
                could become interoperable standard: with enough adoption and
                easy integration, Web Components could provide an interoperable
                standard to be used across frameworks
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Components</Heading>
          <Heading size={5}>Discontent</Heading>
          <List>
            <Appear>
              <ListItem>no enforcement of declarative APIs</ListItem>
            </Appear>
            <Appear>
              <ListItem>most web components assume imperative API</ListItem>
            </Appear>
            <Appear>
              <ListItem>no focus on composability</ListItem>
            </Appear>
            <Appear>
              <ListItem>Web Components embraces the DOM</ListItem>
            </Appear>
            <Appear>
              <ListItem>no alternative render targets</ListItem>
            </Appear>
          </List>
          <Notes>
            From React&rsquo;s perspective, Web Components do not live up to
            their promises
            <List>
              <ListItem>
                no enforcement of declarative APIs: Web Components do nothing to
                simplify the model of interacting with the DOM with enforcing
                declarative APIs
              </ListItem>
              <ListItem>
                most web components assume imperative API: They instead are
                build using imperative APIs and are stateful, making them harder
                to reason about
              </ListItem>
              <ListItem>
                no focus on composability: web components don&rsq uo;t focus on
                data flow between parent and child components
              </ListItem>
              <ListItem>
                Web Components embraces the DOM: all of the problems that are
                there with the DOM are also there with Web Components
              </ListItem>
              <ListItem>
                no alternative render targets: because Web Components depend on
                the DOM, there is no easy way to render to alternative targets
                like SSR or alternative app platforms like native
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            Web Standards Proposals
          </Heading>
          <Notes>
            There are, however initiatives to change and add to web standards to
            better support React&rsquo;s paradigms.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards Proposals</Heading>
          <Heading size={5}>
            React ecosystem representation in the spec groups
          </Heading>
          <div style={{ marginLeft: -20, marginRight: -20 }}>
            <Image
              src={images.sebastianMarkbage}
              style={{
                height: 240,
                borderRadius: 5,
                marginTop: 64
              }}
            />
            <Image
              src={images.jeffMorrison}
              style={{
                height: 240,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 64
              }}
            />
            <Image
              src={images.jordanHarband}
              style={{
                height: 240,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 64
              }}
            />
          </div>
          <Notes>
            Many of the proposals we&rsquo;ll be reviewing today came from
            members of React&rsquo;s community like Facebook&rsquo;s Sebastian
            Markbåge (Markboge) and Jeff Morrison and Jordan Harband. They are
            part of the TC39, the standards committee that specifies ECMAScript,
            the spec which defines which features become a part of JavaScript.<br />
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards Proposals</Heading>
          <Heading size={5}>Specification process</Heading>
          <List>
            <Appear>
              <ListItem>Stage 0 (strawman): request input</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Stage 1 (proposal): challenges, polyfill, etc.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Stage 2 (draft): formal, precise language</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Stage 3 (candidate): signed-off spec text, needs implementations
                and user feedback
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Stage 4 (finished): two compatible implementations shipped,
                ready for inclusion in spec
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Inclusion in specification</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                0: floating the idea: allowing early input and discussion
              </ListItem>
              <ListItem>
                1: provide more information: make case for addition, describe
                shape of solution and identify potential challenges,
                prerequisites are a "champion", informal doc describing problem
                + solution + examples + api + algorithms + abstractions +
                challenges. means that time will be devoted to the problem /
                solution.
              </ListItem>
              <ListItem>
                2: make it formal: precise desc of syntax + semantics,
                prerequisite is formal spec text. means that the feature is
                expected to be developed + included in standard.
              </ListItem>
              <ListItem>
                3: internal work complete - needs implmentation and external
                feedback. prerequisites are complete spec text with reviewer and
                ES editor signoff.
              </ListItem>
              <ListItem>
                4: done + ready for inclusion in spec. prerequisites are
                acceptance tests, 2 compatible implementations
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>React Goals</Heading>
          <List>
            <Appear>
              <ListItem>lower React paradigms into the language</ListItem>
            </Appear>
            <Appear>
              <ListItem>add new low-level APIs to allow optimization</ListItem>
            </Appear>
            <Appear>
              <ListItem>improve developer experience</ListItem>
            </Appear>
            <Appear>
              <ListItem>make React obsolete</ListItem>
            </Appear>
          </List>
          <Notes>
            I posit that React contributors working in standards are aiming to
            achieve the following goals.
            <List>
              <ListItem>
                lower React paradigms into the language: paradigms like
                functional programming, immutability, declarative APIs
              </ListItem>
              <ListItem>
                add new low-level APIs to allow optimization: allow for
                optimization through exposing low-level browser functionality
              </ListItem>
              <ListItem>
                improve developer experience: boilerplate reduction, tooling
                improvements
              </ListItem>
              <ListItem>
                longer term - make React obsolete: a longer-term and more
                ambitious goal is to introduce new standards in order to make
                React obsolete. For instance, reactive updates with diffing in
                the browser.
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              One day when React isn&rsquo;t needed anymore, in a few years or
              so...
            </Quote>
            <Cite textColor="primary">
              Cheng Lou, "Taming the Meta Language"
            </Cite>
          </BlockQuote>
          <Notes>
            Cheng Lou philosophized about such a future at React Conf 2017
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Object Rest/Spread Properties (Stage 3)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-rest-spread-properties.example")}
            textSize={22}
          />
          <Notes>
            So a first example of declarativity, a React paradigm, being
            promoted in the proposals is Sebastian Markbåge&rsquo;s
            (Markboge&rsquo;s) Object Rest/Spread Properties<br />
            <br />
            (explain the dot syntax)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-rest-spread-properties-react-redux.example")}
            textSize={21}
          />
          <Notes>
            Here it&rsquo;s being used in the React docs to spread properties
            over a component and for extending the previous state in Redux
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Silent Property Access on null/undefined
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-silent-property-access-undefined.example")}
            textSize={22}
          />
          <Notes>
            Sebastian also wrote a rough specification in 2016 in order for
            JavaScript to return undefined and not throw an error when an
            property is accessed on undefined or null<br />
            (explain syntax)<br />
            This allows for a less complicated syntax when accessing data,
            especially in declarative APIs
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Claude Pache, Gabriel Isenberg - Optional Chaining (Stage 1)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-optional-chaining.example")}
            textSize={24}
          />
          <Notes>
            However, it has not been proposed yet, and in the meantime another
            similar specification called Optional Chaining has been proposed by
            Claude Pache and Gabriel Isenberg and has gained some support,
            moving to Stage 1.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Claude Pache, Gabriel Isenberg - Optional Chaining (Stage 1)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-optional-chaining-2.example")}
            textSize={19}
          />
          <Notes>
            Optional chaining also defines semantics for how function and method
            calls should be treated
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Daniel Ehrenberg, Jeff Morrison - Class Fields (Stage 3)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-class-fields.example")}
            textSize={25}
          />
          <Notes>
            Facebook&rsquo;s Jeff Morrison and Daniel Ehrenberg from Igalia are
            collaborating on a joint Class Fields proposal, containing the
            public class fields and private class fields proposals by Jeff and
            Daniel respectively.<br />
            (explain syntax)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Daniel Ehrenberg, Jeff Morrison - Class Fields (Stage 3)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-class-fields-react.example")}
            textSize={22}
          />
          <Notes>This also made it into the React documentation</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Scoped Constructor Arguments (unproposed)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-scoped-constructor-arguments.example")}
            textSize={22}
          />
          <Notes>
            Sebastian builds on the class fields proposal in his scoped
            constructor arguments spec, which allows for more declarative
            initialization of properties from constructor arguments, instead of
            having to mutate ad-hoc in various places.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Scoped Constructor Arguments (unproposed)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-scoped-constructor-arguments-2.example")}
            textSize={22}
          />
          <Notes>
            It also allows for captured arguments, which refer to a private slot
            on `this`
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Functional Programming</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Brian Terlson, Sebastian Markbåge - Pattern Matching (Stage 0)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-pattern-matching.example")}
            textSize={22}
          />
          <Notes>
            Brian Terlson and Sebastian Markbåge propose the functional pattern
            matching paradigm, drawing inspiration from Rust and F#.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Functional Programming</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Dave Herman - Do Expressions (Stage 1)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-do-expressions.example")}
            textSize={22}
          />
          <Notes>
            Dave Herman proposes functional programming&rsquo;s do expressions
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Functional Programming</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Dave Herman - Do Expressions (Stage 1)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-do-expressions-react.example")}
            textSize={22}
          />
          <Notes>
            Do expressions can be useful to conditionally return components in
            templating languages like JSX
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Functional Programming</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Jordan Harband - Object.values / Object.entries (ES2017)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-object-values-entries.example")}
            textSize={22}
          />
          <Notes>
            Object.values and Object.entries by Jordan Hardband of Airbnb allow
            iterating over the values or the entries (both the keys and the
            values) similar to Object.keys() that can be helpful in functional
            programming
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Immutability, Performance</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Immutable Data Structures (presented in 2015)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-immutable-js.example")}
            textSize={22}
          />
          <Notes>
            Sebastian Markbåge presented ideas for immutable data structures to
            the TC39 in 2015. However the value of having it in the engine was
            unproven and due to the large implementation effort of doubling the
            data structures, it was not pursued any further.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Immutability, Performance</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Shallow Equality Test (Stage 0)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-shallow-object-equality.example")}
            textSize={27}
          />
          <Notes>
            To further enable use of immutable data structures, Sebastian also
            proposed a shallow equality test for objects, useful in memoization
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Immutability, Performance</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Jordan Harband - Object.getOwnPropertyDescriptors (ES2017)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-getOwnPropertyDescriptors.example")}
            textSize={22}
          />
          <Notes>
            Jordan Harband of Airbnb proposes a way to get all properties of an
            object to facilitate proper copying of objects. This has made it
            into the standard in ES2017.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Developer Experience</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Jeff Morrison - Trailing commas in functions (ES2017)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-trailing-commas.example")}
            textSize={22}
          />
          <Notes>
            On the developer experience front, Jeff Morrison proposed grammar to
            allow trailing commas in function declarations and calls, allowing
            for less changed lines in version control when adding new parameters<br />
            <br />
            For example, this example shows that two lines have been modified
            for each addition (such as param2 and param3 in the declaration or
            bar and baz in the call) have been
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Developer Experience</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Jeff Morrison - Trailing commas in functions (ES2017)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/proposal-trailing-commas-2.example")}
            textSize={22}
          />
          <Notes>
            The proposal allows for trailing commas on the last parameter or
            argument, mitigating this problem.
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            Why hasn&rsquo;t there been more progress?
          </Heading>
          <Notes>
            So why don&rsquo;t we see proposals for bigger changes, like a full
            declarative component API?
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              Unfortunately, I think this might be too radical. ... [browser
              vendors] would probably build [the virtual DOM] on top of the
              existing imperative API.
            </Quote>
            <Cite textColor="primary">
              Sebastian Markbåge, "DOM as a Second-class citizen (2015)"
            </Cite>
          </BlockQuote>
          <Notes>
            Sebastian Markbåge&rsquo;s idea back in 2015 was that such a large
            change would be built on top of the existing DOM, bringing all its
            problems with it.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Why hasn&rsquo;t there been more progress?</Heading>
          <List>
            <Appear>
              <ListItem>
                can&rsquo;t remove anything from the web (don&rsquo;t break the
                web)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                deliberately slow process to wait for maturity
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>a way forward: expose more browser APIs</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                can&rsquo;t remove anything from the web: once features are
                shipped on the web, they cannot be removed again, due to the
                tenet of the web "don&rsquo;t break the web"
              </ListItem>
              <ListItem>
                deliberately slow process to wait for maturity: because nothing
                can be removed from the web again, ideas are tested over time
                and very carefully considered and weighed against alternatives
              </ListItem>
              <ListItem>
                a way forward: expose more browser APIs: expose more APIs that
                browsers already implement
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              Expose more APIs [that browsers already implement]. That&rsquo;s
              what the extensible web manifesto is all about. And that&rsquo;s
              really good.
            </Quote>
            <Cite textColor="primary">
              Sebastian Markbåge, "DOM as a Second-class Citizen"
            </Cite>
          </BlockQuote>
          <Notes>
            Thats what the extensible web manifesto proposes: to expose more
            APIs that are already there, including low level features.
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            React: Other influence
          </Heading>
          <Notes>
            Outside of web standards proposals, React paradigms have also had an
            effect on many frameworks and libraries.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Other influence</Heading>
          <List>
            <Appear>
              <ListItem>Angular.js</ListItem>
            </Appear>
            <Appear>
              <ListItem>Ember</ListItem>
            </Appear>
            <Appear>
              <ListItem>Polymer</ListItem>
            </Appear>
            <Appear>
              <ListItem>Vue</ListItem>
            </Appear>
            <Appear>
              <ListItem>Web Components</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                Angular: after the outburst in popularity of React, Angular
                provided a method for doing single-direction data flow
              </ListItem>
              <ListItem>
                Ember: also unidirectional data flow, component-first view
              </ListItem>
              <ListItem>
                Polymer: at the last polymer summit in 2017, announcement about
                move from HTML imports to es6 modules, which React strongly
                pushes
              </ListItem>
              <ListItem>
                Vue: API similarities, single-file components, other borrowed
                ideas like higher order component improvements
              </ListItem>
              <ListItem>
                Web Components: React drives discussion among web components
                folks
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              React is awesome and drives a ton of discussion among folks who
              work on Web Components.
            </Quote>
            <Cite textColor="primary">
              Rob Dodson, "Regarding the broken promise of Web Components"
            </Cite>
          </BlockQuote>
          <Notes>
            Rob mentions that here, how people are watching what React is
            proposing
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            Future
          </Heading>
          <Heading size={2} textColor="#2e3138">
            Integration / Interop
          </Heading>
          <Notes>
            There have been proposals of integration of web components with
            React
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              The golden use case for WCs would be as primitive leaf components
            </Quote>
            <Cite textColor="primary">
              André Staltz, "React Could Love Web Components"
            </Cite>
          </BlockQuote>
          <Notes>
            Such as the suggestion by André Staltz to use web components as leaf
            nodes (so that they can be used within React)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Future: Integration / Interop</Heading>
          <Heading size={5}>Libraries</Heading>
          <List>
            <Appear>
              <ListItem>Reactive Elements</ListItem>
            </Appear>
            <Appear>
              <ListItem>SkateJS</ListItem>
            </Appear>
          </List>
          <Notes>
            Some alternative approaches to mixing React and Web Components can
            be seen with Reactive Elements and SkateJS
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Future: Integration / Interop</Heading>
          <Image
            src={images.twitterTranspilation}
            style={{ width: 750, borderRadius: 5, marginTop: 30 }}
          />
          <Notes>
            Jason Miller also apparently has a project in the works that will
            convert between, allowing for easy transition between frameworks,
            possibly also targeting standards as an input or output format.
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            Future
          </Heading>
          <Heading size={2} textColor="#2e3138">
            Alternative Specifications
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Future: Alternative Specifications</Heading>
          <List>
            <Appear>
              <ListItem>
                Sean Larkin&rsquo;s Unity Component Specification
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                (kind of like what we saw with Jason Miller's project...)<br />
                In August Sean Larkin proposed a specification to codify how
                single-file components look for component interoperability
                between frameworks. It borrows ideas from React, Vue and web
                components.
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            Future
          </Heading>
          <Heading size={2} textColor="#2e3138">
            Alternatives to the DOM
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Future: Alternatives to the DOM</Heading>
          <List>
            <Appear>
              <ListItem>
                Douglas Crockford&rsquo;s "Helper App" ("Upgrading the Web" at
                AngularU 2015)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Ken Wheeler&rsquo;s "App Browser" ("Why We Need An App Browser"
                at Chain React 2017)
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                Douglas Crockford&rsquo;s "Helper App": in 2015 Douglas
                Crockford described a technique of upgrading the web that would
                allow for discarding the old model of the DOM in favor of
                something more robust.
              </ListItem>
              <ListItem>
                Ken Wheeler&rsquo;s "App Browser": Ken Wheeler described an App
                Browser, a program similar to a web browser that would allow
                users to navigate to native apps. This would also enable an
                alternative model to the DOM.
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#2e3138">
            Future
          </Heading>
          <Heading size={2} textColor="#2e3138">
            New languages
          </Heading>
          <Notes>
            New languages offer the capability to explore new features and
            paradigms without having to wait for the standards process
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Future: New Languages</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40}>
            ReasonML
          </Text>
          <br />
          <CodePane
            lang="ocaml"
            source={require("raw-loader!../assets/reason.example")}
            textSize={17}
          />
          <Notes>
            ...Such as ReasonML, Facebooks new syntax on top of Ocaml
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1}>Takeaways</Heading>
          <List>
            <Appear>
              <ListItem>standards move slowly, need consensus</ListItem>
            </Appear>
            <Appear>
              <ListItem>React: embracing sound standards</ListItem>
            </Appear>
            <Appear>
              <ListItem>we need a better model than the DOM</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                lowering React paradigms into the language helps
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                New low-level APIs enable alternative approaches
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                DOM alternatives, new languages may offer better models in the
                future
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>standards move slowly, need consensus</ListItem>
              <ListItem>React: embracing sound standards</ListItem>
              <ListItem>we need a better model than the DOM</ListItem>
              <ListItem>
                lowering React paradigms into the language helps
              </ListItem>
              <ListItem>
                New low-level APIs enable alternative approaches
              </ListItem>
              <ListItem>
                DOM alternatives, new languages may offer better models in the
                future
              </ListItem>
            </List>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
