// Import React
import React from 'react';

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
  Text,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const secondaryColor = '#f5fbff';
const tertiaryColor = '#baccde';

const theme = createTheme(
  {
    primary: '#2e3648',
    secondary: secondaryColor,
    tertiary: tertiaryColor,
    quartenary: '#772e2e',
  },
  {
    primary: 'Montserrat',
    secondary: 'Montserrat',
  }
);
// console.log(theme.screen);
theme.screen.components.codePane.fontSize = '0.7rem';
theme.screen.components.heading.h2.color = tertiaryColor;
theme.screen.components.heading.h3.color = tertiaryColor;
theme.screen.components.heading.h4.color = tertiaryColor;
theme.screen.components.heading.h5.color = tertiaryColor;
theme.screen.components.heading.h6.color = tertiaryColor;
theme.screen.components.image.display = 'inline';
theme.screen.components.quote.fontSize = '3.9rem';
theme.screen.components.text.color = secondaryColor;

// Fix line height
theme.screen.components.listItem.lineHeight = 1.28;
theme.screen.components.quote.lineHeight = 1.28;
theme.screen.components.text.lineHeight = 1.28;

// Require CSS
require('normalize.css');

const images = {
  jeffMorrison: require('../assets/jeffMorrison.jpg'),
  jordanHarband: require('../assets/jordanHarband.jpg'),
  llvmBackend: require('../assets/llvm-backend.png'),
  logoAdobe: require('../assets/logo-adobe.svg'),
  logoAirbnb: require('../assets/logo-airbnb.svg'),
  logoApple: require('../assets/logo-apple.svg'),
  logoEbay: require('../assets/logo-ebay.svg'),
  logoFacebook: require('../assets/logo-facebook.svg'),
  logoGoogle: require('../assets/logo-google.svg'),
  logoIntel: require('../assets/logo-intel.svg'),
  logoJquery: require('../assets/logo-jquery.svg'),
  logoMozilla: require('../assets/logo-mozilla.svg'),
  logoMicrosoft: require('../assets/logo-microsoft.svg'),
  logoOpera: require('../assets/logo-opera.svg'),
  logoPaypal: require('../assets/logo-paypal.svg'),
  logoSamsung: require('../assets/logo-samsung.svg'),
  logoW3C: require('../assets/logo-w3c.svg'),
  logoYahoo: require('../assets/logo-yahoo.svg'),
  reactVirtualDom: require('../assets/react-virtual-dom.svg'),
  sebastianMarkbage: require('../assets/sebastianMarkbage.jpg'),
  sebastianMarkbage2: require('../assets/sebastianMarkbage-2.jpg'),
  twitterTranspilation: require('../assets/twitter-transpilation.png'),
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="none"
        theme={theme}
        transition={['fade', ]}
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
              <ListItem>Canadian / Austrian JavaScript Engineer</ListItem>
              <ListItem>Twitter handle top right</ListItem>
            </List>
            Talk
            <List>
              <ListItem>Canadian / Austrian JavaScript Engineer</ListItem>
              <ListItem>slides top left</ListItem>
              <ListItem>Twitter handle top right</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>
            The Effect of React on
            <br />
            Web Standards
          </Heading>
          <List>
            <ListItem>Web Standards: Definitions</ListItem>
            <ListItem>Discontent, New Approaches</ListItem>
            <ListItem>React: Principles, Opinions</ListItem>
            <ListItem>Web Standards Proposals</ListItem>
            <ListItem>Future: Convergence</ListItem>
          </List>
          <Notes>
            <List>
              <ListItem>Standards: What, Who, How</ListItem>
              <ListItem>
                Discontent with web standards and new approaches with simplified
                APIs
              </ListItem>
              <ListItem>
                React: Principles, Embracing standards, discontent with
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
          <List style={{ marginLeft: 65, }}>
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
                paradigm: declaratively describing UIs (ex. JSX). can be
                extended to: native app, VR, command line interfaces, music
              </ListItem>
              <ListItem>
                ecosystem: rich community, including members of standards
                committees
              </ListItem>
              <ListItem>
                philosophy: incl. minimalism, functional programming,
                immutability
              </ListItem>
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
            lang="javascript"
            source={require('raw-loader!../assets/web-standards-dom.example')}
            textSize={27}
            theme="external"
          />
          <Notes>
            <List>
              <ListItem>one of most basic things to want w. JS</ListItem>
              <ListItem>verbosity</ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide>
          <Heading size={4}>Web Standards: What?</Heading>
          <Heading size={5}>this keyword</Heading>
          <br />
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/web-standards-this.example')}
            textSize={28}
            theme="external"
          />
          <Notes>this</Notes>
        </Slide> */}
        <Slide>
          <Heading size={4}>Web Standards: What?</Heading>
          <Heading size={5}>&lt;video&gt; tag</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/web-standards-video.example')}
            textSize={15}
            theme="external"
          />
        </Slide>
        {/* <Slide>
          <Heading size={4}>Web Standards: What?</Heading>
          <Heading size={5}>XMLHttpRequest</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/web-standards-xhr.example')}
            textSize={28}
            theme="external"
          />
          <Notes>XmlHttpRequest(AJAX)</Notes>
        </Slide> */}
        <Slide>
          <Heading size={4}>Web Standards: What?</Heading>
          <Heading size={5}>Web Components</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/web-standards-custom-elements.example')}
            textSize={16}
            theme="external"
          />
          <Notes>custom elements spec</Notes>
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
        <Slide bgColor="secondary">
          <Heading size={4} textColor="primary">
            Web Standards: Who?
          </Heading>
          <Heading size={5} textColor="primary">
            Who is on the spec groups?
          </Heading>
          <div style={{ marginLeft: -30, marginRight: -30, }}>
            <Image
              src={images.logoW3C}
              style={{ height: 56, borderRadius: 5, marginTop: 30, }}
            />
            <Image
              src={images.logoGoogle}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoMozilla}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoMicrosoft}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoApple}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
                filter: 'drop-shadow( 0 0 10px #444 )',
              }}
            />
            <Image
              src={images.logoAdobe}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoFacebook}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoIntel}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoOpera}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoEbay}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoYahoo}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoSamsung}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoPaypal}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoAirbnb}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoJquery}
              style={{
                height: 56,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
          </div>
          <Notes>
            <List>
              <ListItem>
                mostly large companies + a few invited experts
              </ListItem>
              <ListItem>
                orgs such as the TC39 require a fee to be paid to be a member
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} textColor="primary">
            Web Standards: Who?
          </Heading>
          <Heading size={5} textColor="primary">
            Implementers
          </Heading>
          <div style={{ marginLeft: -40, marginRight: -40, }}>
            <Image
              src={images.logoGoogle}
              style={{
                height: 50,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoMozilla}
              style={{
                height: 50,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoMicrosoft}
              style={{
                height: 50,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
              }}
            />
            <Image
              src={images.logoApple}
              style={{
                height: 50,
                borderRadius: 5,
                marginLeft: 54,
                marginTop: 30,
                filter: 'drop-shadow(0 0 10px #444)',
              }}
            />
          </div>
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
              <ListItem textSize={50}>multiple stakeholders</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={50}>
                ignored recommendations or proprietary APIs
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={50}>
                vendors blocking standards{' '}
                <small style={{ opacity: 0.5, }}>⏎</small>
              </ListItem>
            </Appear>
          </List>
          <Notes>
            3 bullets
            <List>
              <ListItem>
                changes need to be agreed upon by multiple stakeholders
              </ListItem>
              <ListItem>
                dominant market share => potential to ignore recommendations or
                create non-standard APIs: IE's JScript & AJAX, Chrome's default
                passive touch listeners)
              </ListItem>
              <ListItem>
                Microsoft blocking ES4 because ES4 team didn't want to consider
                any other options
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
          <Heading size={4}>Web Standards</Heading>
          <Heading size={5}>Different than userland</Heading>
          <br />
          <Text lineHeight={1.4} textSize={60}>
            The web standards process is fundamentally different than
            single-owner library API development
          </Text>
          <Notes>
            all of this goes to show process is very diff. than userland library
            development where you may have monoculture
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
                missing, incompatible or inadequate implementations
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={50}>
                confusing or non-memorable syntax
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={50}>
                imperative, stateful approach{' '}
                <small style={{ opacity: 0.5, }}>⏎</small>
              </ListItem>
            </Appear>
          </List>
          <Notes>
            4 bullets
            <List>
              <ListItem textSize={20}>
                verbose standard APIs w. lots of ceremony
              </ListItem>
              <ListItem textSize={20}>
                features missing from or incompatible with 1 or more browsers,
                or features that just aren't good enough (ex. dialog element)
              </ListItem>
              <ListItem textSize={20}>substr vs substring, ajax</ListItem>
              <ListItem textSize={20}>vs. declarative, immutable APIs</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>Prototype, jQuery, Dojo, MooTools (2005-6)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/jquery-post.example')}
            textSize={33}
            theme="external"
          />
          <Notes>
            <List>
              <ListItem>some people took things into own hands</ListItem>
              <ListItem>ex. jQuery's take on AJAX</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>Prototype, jQuery, Dojo, MooTools (2005-6)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/dojo-dom.example')}
            textSize={22}
            theme="external"
          />
          <Notes>Ex. Dojo's take on DOM manipulation</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches: Inspiration</Heading>
          <Heading size={5}>Prototype, jQuery, Dojo, MooTools (2005-6)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/jquery-querySelectorAll.example')}
            textSize={29}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/tE2SLC
          </Text>
          <Notes>
            <List>
              <ListItem>libs inspired improvements to web standards</ListItem>
              <ListItem>
                ex. jQuery inspr. of document.querySelectorAll
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>CoffeeScript (2009)</Heading>
          <br />
          <CodePane
            lang="coffeescript"
            source={require('raw-loader!../assets/coffeescript.example')}
            textSize={32}
            theme="external"
          />
          <Notes>
            <List>
              <ListItem>CoffeeScript: new compile-to-JS language</ListItem>
              <ListItem>easier, nicer JS; added new features</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={5}>CoffeeScript (2009)</Heading>
          <br />
          <CodePane
            lang="coffeescript"
            source={require('raw-loader!../assets/coffeescript-arrow-functions.example')}
            textSize={27}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/txbD6C
          </Text>
          <Notes>arrow func inflnc. on standards</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={6}>Angular, Knockout, Ember (2009-11)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/angular.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Prior art: .NET Windows Presentation Foundation (XAML)
          </Text>
          <Notes>
            <List>
              <ListItem>2009: new wave of frameworks</ListItem>
              <ListItem>data binding: new approach to DOM manip</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>New Approaches</Heading>
          <Heading size={6}>Angular, Knockout, Ember (2009-11)</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/ember-js.example')}
            textSize={18}
            theme="external"
          />
          <br />
          <CodePane
            lang="handlebars"
            source={require('raw-loader!../assets/ember-hbs.example')}
            textSize={18}
            theme="external"
          />
          <Notes>data binding in ember</Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            React (2013)
          </Heading>
          <Heading size={2} textColor="#fff7de">
            New and Improved Paradigms
          </Heading>
          <Notes>
            <List>
              <ListItem>improvements on existing ideas</ListItem>
              <ListItem>introductions of new paradigms</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={6}>Simpler one-way data binding via JSX</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/react-data-binding-jsx.example')}
            textSize={22}
            theme="external"
          />
          <Notes>
            <List>
              <ListItem>more like regular JS fns</ListItem>
              <ListItem>
                almost no impl. details of data binding from library
              </ListItem>
              <ListItem>no DSL allows full power of JS</ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide bgColor="tertiary">
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
        </Slide> */}
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Data binding: Virtual DOM</Heading>
          <br />
          <Image
            src={images.reactVirtualDom}
            style={{
              // height: 56,
              borderRadius: 5,
              // marginLeft: 54,
              // marginTop: 30,
              border: 'solid #fff',
              borderWidth: '20px 60px 20px 0',
              background: '#fff',
            }}
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Credit: goo.gl/g8fWvi
          </Text>
          <Notes>
            <List>
              <ListItem>
                React calculates diff + makes minimal DOM updates
              </ListItem>
              <ListItem>
                user writes declarative components + doesn't need to touch
                imperative DOM
              </ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide>
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
            HTML-like syntax sugar over {'function'} calls.
            <br />
            JS instead of DSL: This allows use of the full power of JavaScript
            instead of a domain-specific language...
            <br />
            functions instead of strings: ...since components are built using
            functions and not strings.
            <br />
          </Notes>
        </Slide> */}
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Functional Programming</Heading>
          <List>
            <Appear>
              <ListItem textSize={46}>roots in functional programming</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={46}>
                immutability easier to reason about{' '}
                <small style={{ opacity: 0.5, }}>⏎</small>
              </ListItem>
            </Appear>
          </List>
          <Notes>
            The functional approach is promoted in ways other than JSX.
            <List>
              <ListItem>early prototypes of React built in StandardML</ListItem>
              <ListItem>
                immutability: less potential interactions with data
              </ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              While it is influenced by ... functional programming, staying
              accessible to ... developers with different skills and experience
              levels is an explicit goal of the project.
            </Quote>
            <Cite textColor="primary">React Docs</Cite>
          </BlockQuote>
          <Notes>
            <List>
              <ListItem>quote from React docs</ListItem>
              <ListItem>pragmatism over idealism</ListItem>
            </List>
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
        </Slide> */}
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Component Model</Heading>
          <List>
            <Appear>
              <ListItem textSize={53}>
                simple, consistent composability
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={53}>
                decoupled from output target (ex. DOM){' '}
                <small style={{ opacity: 0.5, }}>⏎</small>
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                standardized model for how to write + what to be able to expect
                from React components
              </ListItem>
              <ListItem>allows other usages ex. native, SSR, etc.</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React: Paradigms</Heading>
          <Heading size={5}>Minimalism</Heading>
          <Text lineHeight={1.4} textSize={60}>
            React's API surface area is limited, with features actively being
            removed.
          </Text>
          <Notes>amount of things to learn+remember kept low</Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            React
          </Heading>
          <Heading size={2} textColor="#fff7de">
            Web Standards
          </Heading>
          <Notes>
            <List>
              <ListItem>
                approach of embracing and curating standards when possible
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React</Heading>
          <Heading size={4}>Embracing Standards</Heading>
          <Text lineHeight={1.4} textSize={60}>
            React builds on a curated set of JavaScript features, by polyfilling
            proposals
          </Text>
          <Notes>
            don't invent propreitary abstractions, use standards-based JS +
            polyfill where necessary
          </Notes>
        </Slide>
        {/* <Slide bgColor="tertiary">
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
        </Slide> */}
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote textSize={56}>
              How do we remove existing features from the existing language?
              ...you can&rsquo;t remove things from the web. But they can be
              removed from our industry&rsquo;s mental surface area
            </Quote>
            <Cite textColor="primary">
              Sebastian Markbåge, "Minimal API Surface Area" goo.gl/QCULgG
            </Cite>
          </BlockQuote>
          <Notes>
            by curating which standards React promotes, the mental surface area
            required to program in JavaScript can be reduced
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React</Heading>
          <Heading size={5}>Discontent with Standards</Heading>
          <List>
            <Appear>
              <ListItem>verbose, imperative APIs such as the DOM</ListItem>
            </Appear>
            <Appear>
              <ListItem>tight coupling</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                foundational quirks <small style={{ opacity: 0.5, }}>⏎</small>
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                as seen in first examples, verbosity. also imperative vs
                declarative
              </ListItem>
              <ListItem>
                tight coupling between layers (ex. HTML + CSS coupled to DOM)
              </ListItem>
              <ListItem>
                workarounds + hacks needed to abstract over quirks (ex.
                properties vs attributes)
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React</Heading>
          <Heading size={5}>Web Components Pros</Heading>
          <List>
            <ListItem>shadow DOM encapsulation</ListItem>
            <ListItem>could become interoperable standard</ListItem>
          </List>
          <Notes>
            <List>
              <ListItem>
                strong encapsulation imposs. w. existing standards
              </ListItem>
              <ListItem>
                with enough adoption and easy integration, Web Components could
                provide an interoperable standard to be used across frameworks
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>React</Heading>
          <Heading size={5}>Web Components Cons</Heading>
          <List>
            <ListItem>no enforcement of declarative APIs</ListItem>
            <ListItem>most web components imperative</ListItem>
            <ListItem>no focus on composability</ListItem>
            <ListItem>Web Components embrace the DOM</ListItem>
          </List>
          <Notes>
            From React&rsquo;s perspective, Web Components do not live up to
            their promises
            <List>
              <ListItem>no enforcement simpler declarative models</ListItem>
              <ListItem>
                assumption of stateful, imperative API: harder to reason about
              </ListItem>
              <ListItem>no focus on data flow between parent + child</ListItem>
              <ListItem>all problems of DOM come with WCs</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            Web Standards Proposals
          </Heading>
          <Notes>from the community or following same React paradigms</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards Proposals</Heading>
          <Heading size={5}>Specification process</Heading>
          <List>
            <ListItem>Stage 0 (strawman): request input</ListItem>
            <ListItem>Stage 1 (proposal): challenges, polyfill, etc.</ListItem>
            <ListItem>Stage 2 (draft): formal, precise language</ListItem>
            <ListItem>
              Stage 3 (candidate): signed-off spec text, needs implementations
              and user feedback
            </ListItem>
            <ListItem>
              Stage 4 (finished): two compatible implementations shipped, ready
              for inclusion in spec
            </ListItem>
          </List>
          <Notes>
            <List>
              <ListItem>0: early input + discussion</ListItem>
              <ListItem>
                1: describe case, shape of solution, potential challenges
                <br />> prereqs: "champion", informal doc
              </ListItem>
              <ListItem>
                2: make it formal: precise desc of syntax + semantics <br />>
                prereq: formal spec text
                <br />
                --> feature is expected to be developed + included in standard
              </ListItem>
              <ListItem>
                3: internal work complete, needs implm'n + external feedback
                <br />> prereqs: complete spec text w. signoff
              </ListItem>
              <ListItem>
                4: done + ready for inclusion in spec.
                <br />> prereqs: acceptance tests, 2 compatible implm'ns
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>React Goals</Heading>
          <List>
            <Appear>
              <ListItem textSize={48}>lower React paradigms into JS</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={48}>
                new low-level APIs for optimization
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={48}>
                make React obsolete <small style={{ opacity: 0.5, }}> ⏎</small>
              </ListItem>
            </Appear>
          </List>
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/o8pjF2
          </Text>
          <Notes>
            <List>
              <ListItem>fp, immutability, declarative APIs</ListItem>
              <ListItem>expose low-level browser functionality</ListItem>
              <ListItem>longer term: obsolescence</ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide bgColor="tertiary">
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
        </Slide> */}
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Object Rest/Spread Properties (ES2018)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-rest-spread-properties.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/YTq1xM
          </Text>
          <Notes>
            <List>
              <ListItem>improved declarativity</ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity</Heading>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-rest-spread-properties-react-redux.example')}
            textSize={21}
            theme="external"
          />
          <Notes>
            Here it&rsquo;s being used in the React docs to spread properties
            over a component and for extending the previous state in Redux
          </Notes>
        </Slide> */}
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Silent Property Access on null/undefined
            <br />
            (unproposed)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-silent-property-access-undefined.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/stLEKU
          </Text>
          <Notes>less complicated syntax when accessing data</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Claude Pache, Gabriel Isenberg - Optional Chaining (Stage 1)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-optional-chaining.example')}
            textSize={38}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/2vpyK5
          </Text>
          <Notes>similar proposal further in spec process (stg 1)</Notes>
        </Slide>
        {/* <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Claude Pache, Gabriel Isenberg - Optional Chaining (Stage 1)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-optional-chaining-2.example')}
            textSize={19}
            theme="external"
          />
          <Notes>
            Optional chaining also defines semantics for how function and method
            calls should be treated
          </Notes>
        </Slide> */}
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Daniel Ehrenberg, Jeff Morrison - Class Fields (Stage 3)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-class-fields.example')}
            textSize={25}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/LgvhbJ
          </Text>
          <Notes>
            <List>
              <ListItem>
                simpler, declarative way to init properties on classes
              </ListItem>
              <ListItem>fewer state transitions for instances</ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Daniel Ehrenberg, Jeff Morrison - Class Fields (Stage 3)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-class-fields-react.example')}
            textSize={22}
            theme="external"
          />
          <Notes>This also made it into the React documentation</Notes>
        </Slide> */}
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Scoped Constructor Arguments (unproposed)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-scoped-constructor-arguments.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/nttJoD
          </Text>
          <Notes>
            <List>
              <ListItem>builds on class fields</ListItem>
              <ListItem>
                declarative init of props from constructor arg's
              </ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Declarativity</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Scoped Constructor Arguments (unproposed)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-scoped-constructor-arguments-2.example')}
            textSize={22}
            theme="external"
          />
          <Notes>
            It also allows for captured arguments, which refer to a private slot
            on `this`
          </Notes>
        </Slide> */}
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Functional Programming</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Brian Terlson, Sebastian Markbåge, Kat Marchán - Pattern Matching
            (Stage 1)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-pattern-matching.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/BFFuxw
          </Text>
          <Notes>
            <List>
              <ListItem>pattern matching paradigm from fp</ListItem>
              <ListItem>inspiration from Rust and F#.</ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Functional Programming</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Dave Herman - Do Expressions (Stage 1)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-do-expressions.example')}
            textSize={22}
            theme="external"
          />
          <Notes>evaluating the last expression</Notes>
        </Slide> */}
        {/* <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Functional Programming</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Dave Herman - Do Expressions (Stage 1)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-do-expressions-react.example')}
            textSize={22}
            theme="external"
          />
          <Notes>
            Do expressions can be useful to conditionally return components in
            templating languages like JSX
          </Notes>
        </Slide> */}
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
            source={require('raw-loader!../assets/proposal-object-values-entries.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/LgvhbJ
          </Text>
          <Notes>can be helpful in functional programming</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Immutability</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Immutable Data Structures (presented in 2015)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-immutable-js.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/jYQSEg
          </Text>
          <Notes>
            <List>
              <ListItem>presented in 2015</ListItem>
              <ListItem>unproven value</ListItem>
              <ListItem>large impl'n effort</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Immutability</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Sebastian Markbåge - Shallow Equality Test (Stage 0)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-shallow-object-equality.example')}
            textSize={27}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/6AFh3j
          </Text>
          <Notes>
            <List>
              <ListItem>
                further enables use of immutable data structures
              </ListItem>
              <ListItem>proposed, received a lot of concerns</ListItem>
            </List>
          </Notes>
        </Slide>
        {/* <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Immutability, Performance</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Jordan Harband - Object.getOwnPropertyDescriptors (ES2017)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-getOwnPropertyDescriptors.example')}
            textSize={22}
            theme="external"
          />
          <Notes>
            Jordan Harband of Airbnb proposes a way to get all properties of an
            object to facilitate proper copying of objects. This has made it
            into the standard in ES2017.
          </Notes>
        </Slide> */}
        {/* <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Developer Experience</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Jeff Morrison - Trailing commas in functions (ES2017)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-trailing-commas.example')}
            textSize={22}
            theme="external"
          />
          <Notes>
            On the developer experience front, Jeff Morrison proposed grammar to
            allow trailing commas in function declarations and calls, allowing
            for less changed lines in version control when adding new parameters
            <br />
            <br />
            For example, this example shows that two lines have been modified
            for each addition (such as param2 and param3 in the declaration or
            bar and baz in the call) have been
          </Notes>
        </Slide> */}
        {/* <Slide>
          <Heading size={4}>Standards Proposals</Heading>
          <Heading size={5}>Developer Experience</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Jeff Morrison - Trailing commas in functions (ES2017)
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/proposal-trailing-commas-2.example')}
            textSize={22}
            theme="external"
          />
          <Notes>
            The proposal allows for trailing commas on the last parameter or
            argument, mitigating this problem.
          </Notes>
        </Slide> */}
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            Why hasn&rsquo;t there been more progress?
          </Heading>
          <br />
          <Text lineHeight={1.4} textSize={60}>
            Sebastian and Jake weigh in
          </Text>
          <Notes>
            why not bigger proposals? (ex. full declarative component API)
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
              goo.gl/K5UtvR
            </Cite>
          </BlockQuote>
          <Notes>big changes often too big + get rejected</Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              This is why the web platform must be really cautious about
              throwing trends into specs.
            </Quote>
            <Cite textColor="primary">
              Jake Archibald, Twitter goo.gl/q7wCLY
            </Cite>
          </BlockQuote>
          <Notes>
            <List>
              <ListItem>ex. Object.observe</ListItem>
              <ListItem>
                trends become obsolete, (eg. what is after React?)
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Why hasn&rsquo;t there been more progress?</Heading>
          <List>
            <ListItem>
              can&rsquo;t remove anything from the web (don&rsquo;t break the
              web)
            </ListItem>
            <ListItem>deliberately slow process for maturity</ListItem>
            <ListItem>a way forward: expose more browser APIs</ListItem>
          </List>
          <Notes>
            <List>
              <ListItem>
                tenet "don't break the web" - once shipped, features cannot be
                removed again
              </ListItem>
              <ListItem>ideas tested over time, carefully considered</ListItem>
              <ListItem>
                expose more APIs that browsers already implement
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
              Sebastian Markbåge, "DOM as a Second-class Citizen" goo.gl/K5UtvR
            </Cite>
          </BlockQuote>
          <Notes>expose more existing APIs, including low level</Notes>
        </Slide>
        {/* <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            React: Other influence
          </Heading>
          <Notes>
            Outside of web standards proposals, React paradigms have also had an
            effect on many frameworks and libraries.
          </Notes>
        </Slide> */}
        {/* <Slide>
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
        </Slide> */}
        <Slide bgColor="quartenary">
          <Heading size={1} textColor="#fff7de">
            Future
          </Heading>
          <Notes>what does the future hold?</Notes>
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
          <Heading size={4}>Future</Heading>
          <Heading size={5}>Integration / Interop</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            Reactive Elements: Convert React.js components into Web Components
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/reactive-elements.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/3oztFs
          </Text>
        </Slide>
        <Slide>
          <Heading size={4}>Future</Heading>
          <Heading size={5}>Integration / Interop</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40} fit>
            SkateJS: Effortless custom elements for modern view libraries
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/skatejs.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/zxdBS4
          </Text>
          <Notes>
            Some alternative approaches to mixing React and Web Components can
            be seen with Reactive Elements and SkateJS
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Future</Heading>
          <Heading size={5}>Integration / Interop</Heading>
          <Image
            src={images.twitterTranspilation}
            style={{ width: 750, borderRadius: 5, marginTop: 30, }}
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/YRzcaU
          </Text>
          <Notes>Jason Miller project to transpile between f/works</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Future</Heading>
          <Heading size={5}>Alternative Specifications</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40}>
            Sean Larkin&rsquo;s Unity Component Specification
          </Text>
          <br />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/unity-component-spec.example')}
            textSize={22}
            theme="external"
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/LgvhbJ
          </Text>
          <Notes>
            specification to standardize single-file components for interop
            between f/works
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Future</Heading>
          <Heading size={5}>Alternatives to the DOM</Heading>
          <List>
            <ListItem>
              Douglas Crockford&rsquo;s "Helper App" ("Upgrading the Web" at
              AngularU 2015) goo.gl/A8mKxv
            </ListItem>
            <ListItem>
              Ken Wheeler&rsquo;s "App Browser" ("Why We Need An App Browser" at
              Chain React 2017) goo.gl/6YsnQb
            </ListItem>
          </List>
          <Notes>
            <List>
              <ListItem>
                2015 Douglas Crockford's idea to discarding the old model of the
                DOM for something more robust
              </ListItem>
              <ListItem>
                program for navigating to native apps (also alternative model to
                the DOM)
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Future</Heading>
          <Heading size={5}>New Languages</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40}>
            ReasonML
          </Text>
          <br />
          <CodePane
            lang="ocaml"
            source={require('raw-loader!../assets/reason.example')}
            textSize={17}
            theme="external"
          />
          <Notes>
            ...Such as ReasonML, Facebooks new syntax on top of Ocaml
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Future</Heading>
          <Heading size={5}>New Languages</Heading>
          <br />
          <Text lineHeight={1.6} textSize={40}>
            Sebastian Markbåge&rsquo;s Prepack LLVM Backend
          </Text>
          <br />
          <Image
            src={images.llvmBackend}
            style={{
              borderRadius: 5,
            }}
          />
          <br />
          <Text lineHeight={1.6} textSize={30}>
            Source: goo.gl/UohQJt
            <small style={{ opacity: 0.5, }}> ⏎</small>
          </Text>
          <Notes>compile code to native machine code or web assembly</Notes>
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
