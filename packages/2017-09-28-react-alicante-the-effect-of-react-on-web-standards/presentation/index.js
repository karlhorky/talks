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
import { theme } from "../themes/react-alicante/";

// Require CSS
require("normalize.css");

const images = {
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
  logoYahoo: require("../assets/logo-yahoo.svg")
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
        contentWidth={1200}
        contentHeight={900}
      >
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={4}>The Effect of React on Web Standards</Heading>
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
              <ListItem>Standards: What, Who, How, Discontent</ListItem>
              <ListItem>Simplified APIs</ListItem>
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
          <Heading size={1} textColor="#fff7de">
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
            textSize={32}
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
            textSize={32}
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
            textSize={18}
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
            textSize={32}
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
            textSize={19}
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
            <div style={{ marginLeft: -20, marginRight: -20 }}>
              <Image
                src={images.logoW3C}
                style={{ height: 76, borderRadius: 5, marginTop: 64 }}
              />
              <Image
                src={images.logoGoogle}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoMozilla}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoMicrosoft}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoApple}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoAdobe}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoFacebook}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoIntel}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoOpera}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoEbay}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoYahoo}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoSamsung}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoPaypal}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoAirbnb}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoJquery}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
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
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoMozilla}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoMicrosoft}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoApple}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
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
          <Heading size={1} textColor="#fff7de" fit>
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
              <ListItem>
                excessive boilerplate: standard APIs require lots of typing and
                ceremony to do simple things
              </ListItem>
              <ListItem>
                incompatibility: missing / non-standard implementations
              </ListItem>
              <ListItem>
                insufficient components: some devs (such as Ken Wheeler)
                critical: not enough common widgets available everywhere on the
                platform (eg. autocomplete, time picker, better date picker)
              </ListItem>
              <ListItem>
                confusing / non-memorable syntax: substr vs substring, ajax
              </ListItem>
              <ListItem>
                imperative, stateful approach: relevant to talk topic, the react
                community promotes declarative APIs to improve ability to
                reasoning about code rather than trying to keep the state of the
                program in your head
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
            textSize={40}
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
            textSize={27}
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
            textSize={27}
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
            textSize={40}
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
            textSize={27}
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
            textSize={20}
          />
          <br />
          <CodePane
            lang="handlebars"
            source={require("raw-loader!../assets/ember-hbs.example")}
            textSize={20}
          />
          <Notes>
            Data binding was a declarative way of describing UI and how your
            data model gets applied to that UI.
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            React
          </Heading>
          <Heading size={2} textColor="#fff7de">
            New and Improved Paradigms
          </Heading>
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
            reusable, composable, testable: React components can be easily
            reused, composed and tested due to their functional nature<br />
            decoupled: because the component model is decoupled from the this
            allows for the component model to be used for other targets, like
            native apps,
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
              <ListItem>embraces language features when possible</ListItem>
            </Appear>
            <Appear>
              <ListItem>using React feels like using JavaScript</ListItem>
            </Appear>
          </List>
          <Notes>
            kept deliberately minimal: the "expense" of React is kept low by
            limiting API surface area<br />
            embraces language features: React attempts to avoid adding
            proprietary APIs for things that the language can do<br />
            using React feels like using JavaScript: not many things to
            remember. Many problems can be solved using standard JavaScript
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            React
          </Heading>
          <Heading size={2} textColor="#fff7de">
            Embracing Web Standards
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>React: Embracing Standards</Heading>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            React
          </Heading>
          <Heading size={2} textColor="#fff7de">
            Discontent with Standards
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>React: Discontent with Standards</Heading>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de" fit>
            Web Components
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Web Components</Heading>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            Web Standards Proposals
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity, Boilerplate Reduction</Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Functional Programming</Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Immutability, Performance</Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Tooling Improvements</Heading>
          <Notes>TODO: Remove me?</Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            Why hasn&rsquo;t there been more progress?
          </Heading>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            React: Other influence
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>React: Other influence</Heading>
          <Heading size={5}>
            Angular, Ember, Polymer, Vue, Web Components
          </Heading>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            Future
          </Heading>
          <Heading size={2} textColor="#fff7de">
            Integration efforts
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Future: Integration efforts</Heading>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            Future
          </Heading>
          <Heading size={2} textColor="#fff7de">
            Alternatives to the DOM
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Future: Alternatives to the DOM</Heading>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            Future
          </Heading>
          <Heading size={2} textColor="#fff7de">
            New languages
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Future: New Languages</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>Summary / Conclusion</Heading>
          something like: just like everyone, I cannot prophesize the future,
          but we see some interesting trends here...
        </Slide>
      </Deck>
    );
  }
}
