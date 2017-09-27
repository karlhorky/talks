import React from "react";
import {
  // BlockQuote,
  // Cite,
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

export default (
  <div>
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
        standards bodies (for example: W3C TAG, TC39, CSSWG, CSS Houdini task
        force, WHATWG, WICG, etc)
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
        <ListItem>intel</ListItem>
        <ListItem>opera</ListItem>
        <ListItem>ebay</ListItem>
        <ListItem>yahoo</ListItem>
        <ListItem>samsung</ListItem>
        <ListItem>paypal</ListItem>
        <ListItem>
          smaller companies like Airbnb, Fastly, Odd Concepts, Bocoup, jQuery
          Foundation, etc
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
          browser vendors can choose to forge their own paths (IE's JScript &
          AJAX, Chrome's default passive touch listeners & SPDY)
        </ListItem>
        <ListItem>
          This is getting better, with browser vendors pledging to support more
          standards-based development ("our policy on thoughtfully augmenting
          the platform" - Chrome)
          https://www.chromium.org/blink/developer-faq#TOC-What-s-stopping-Chrome-from-shipping-proprietary-features-
        </ListItem>
        <ListItem>
          TODO: Make this recurring theme more of a main point example of
          conflict: Microsoft blocking ES4 (recurring theme: "I think it was
          polarized as a consequence of the ES4 team refusing to consider any
          other opinions" - Douglas Crockford)
        </ListItem>
        <ListItem>
          fundamentally different than library API development with single owner
          and monoculture
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
          insufficient component primitives (Why we Need an App Browser by Ken
          Wheeler)
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
      <Heading size={5}>Prototype, jQuery, Dojo, MooTools (2005-2006)</Heading>
      <Text>
        tools to simplify programming instead of using overcomplicated,
        fragmented DOM APIs (Why we need an app browser by Ken Wheeler)
      </Text>
      <Text>
        provided UI widgets which are not part of the web platform (Why we need
        an app browser by Ken Wheeler)
      </Text>
      <Text>
        influenced several JS web standards, including document.querySelector &
        document.querySelectorAll
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
          observation" data binding, Angular via "dirty checking" data binding)
          (Prior art - .NET WPF with XAML)<br />
          "Data binding makes the UI (a dynamic process) look more like a static
          program relative to your data model" - Pete Hunt
          (https://www.youtube.com/watch?v=-DX3vJiqxm4)<br />
          "Data binding is a polyfill for reactive JavaScript/DOM" - Pete Hunt
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
      <Heading size={3}>React: new / improved paradigms</Heading>
      <List>
        <ListItem>
          declarative data updates via data binding with virtual DOM
        </ListItem>
        <ListItem>
          functions instead of strings - functional programming (use JavaScript
          instead of passing strings back and forth between JS and HTML)
        </ListItem>
        <ListItem>
          use JavaScript more instead of domain-specific languages (JSX)
        </ListItem>
        <ListItem>immutability / unidirectional data flow</ListItem>
        <ListItem>component model</ListItem>
        <ListItem>minimalism</ListItem>
      </List>
    </Slide>

    <Slide bgColor="white">
      <Heading size={3}>React: new / improved paradigms</Heading>
      <Heading size={3}>declarative data updates / virtual DOM</Heading>
      <br />
      "Virtual DOM - a less leaky polyfill for reactive JavaScript / DOM" - Pete
      Hunt (https://www.youtube.com/watch?v=-DX3vJiqxm4)<br />
      Re-render everything to virtual DOM, compute the differences and then do
      the minimum change to the real DOM<br />
      Makes imperative DOM updates able to be done declaratively<br />
      Allows much simpler declaration of reactive views through less worrying
      about the implementation details of data-binding<br />
      <List>
        <ListItem>
          Tries to improve upon flaws and shortcomings in the DOM (seb markbage
          DOM as 2nd class citizen talk, ken wheeler DOM criticism tweets)
        </ListItem>
        <ListItem>
          declaratively define how your view should look instead of imperatively
          mutating DOM using JS APIs
        </ListItem>
        <ListItem>decouple renderer from DOM</ListItem>
        <ListItem>"RESTful" approach to UI components</ListItem>
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
          use JavaScript instead of passing strings back and forth between JS
          and HTML
        </ListItem>
        <ListItem>auto-escaping for defense against XSS</ListItem>
        <ListItem>
          use JavaScript more instead of domain-specific languages (JSX)
        </ListItem>
        <ListItem>
          What if I built (something) where everything would be a string - a
          function would be a string, a number would be a string? What do we
          lose here? If you try to use a linter, if you try to use a static
          analyser, they will all fail, because everything is a string now. The
          struggle is, which level of uniformity do you want? (Cheng Lou 13:00
          https://www.youtube.com/watch?v=mVVNJKv9esE)
        </ListItem>
        <ListItem>
          On Grunt vs Gulp: Declarative DSLs work really well when your domain
          is well-defined and because on the level of abstraction they are very
          tightly constrained things - theyre almost near their leaf nodes. So
          when your build system does what you want, it works well. Build
          systems are not well-defined problems in computer science. Build
          system is a moving target. When the requirements are constantly
          changing, do you want a declarative DSL or do you want functions that
          dont change over time? You want functions. Flexible enough to
          accomodate future use cases you havent thought of yet. (Cheng Lou
          17:42 https://www.youtube.com/watch?v=mVVNJKv9esE)
        </ListItem>
        <ListItem>
          On React vs Templates: What are templates? Templates are data. Even if
          they have if statements in them, they are ad-hoc if statements. Data
          is very nice. It is much lower in the level of abstraction, so it is
          what you want. But, the web has changed. We are no longer writing just
          interactive forms anymore. We are writing Turing-complete complex
          applications. So maybe we should step up a level of abstraction.
          (Cheng Lou 21:12 https://www.youtube.com/watch?v=mVVNJKv9esE)
        </ListItem>
      </List>
    </Slide>

    <Slide bgColor="white">
      <Heading size={3}>React: new / improved paradigms</Heading>
      <Heading size={3}>immutability / unidirectional data flow</Heading>
      <List>
        <ListItem>
          "In our React community the answer has been immutability,
          unidirectional data flow - this is very easy to reason about. ... It's
          like in a typed language ... where you don't feel like you're fumbling
          in the dark." - Cheng Lou 29:23
          https://www.youtube.com/watch?v=24S5u_4gx7w
        </ListItem>
        <ListItem>
          Unidirection data flow - it takes engineering maturity to understand
          that even though sometimes data actually does flow in both directions,
          in most circumstances unidirectional data flow is enough. Some things
          are not meant to be optimized. (Cheng Lou 8:33
          https://www.youtube.com/watch?v=tCVXp6gFD8o)
        </ListItem>
        <ListItem>
          On Mutability vs Immutability: Why would I choose something less
          powerful? Its not about how much power you have, its about the
          potential properties that you gain by doing less. (Cheng Lou 25:45
          https://www.youtube.com/watch?v=mVVNJKv9esE)
        </ListItem>
      </List>
    </Slide>

    <Slide bgColor="white">
      <Heading size={3}>React: new / improved paradigms</Heading>
      <Heading size={3}>component model</Heading>
      <List>
        <ListItem>
          The React Component: a highly cohesive building block for UIs loosely
          coupled with other components. They are:<br />
          - Reusable<br />
          - Composable<br />
          - Unit Testable<br />
          (Pete Hunt React - Rethinking Best Practices
          https://www.youtube.com/watch?v=DgVS-zXgMTk)
        </ListItem>
        <ListItem>
          The React Component: an idempotent functions describing your UI at any
          point in time (Pete Hunt React - Rethinking Best Practices
          https://www.youtube.com/watch?v=DgVS-zXgMTk)
        </ListItem>
        <ListItem>
          Even though UI is actually a graph (sibling communication, popups,
          etc), 80% or more realistically 95% of the time Reacts tree format is
          enough and ok (Cheng Lou 8:33
          https://www.youtube.com/watch?v=tCVXp6gFD8o)
        </ListItem>
        <ListItem>
          "React is a component model for abstractions" Reacts component model
          can be used to target abstractions at different levels (DOM, Native)
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
          accomplish the same tasks that other frameworks have dedicated APIs
          for." - sebastian markbage
          https://2014.jsconf.eu/speakers/sebastian-markbage-minimal-api-surface-area-learning-patterns-instead-of-frameworks.html
        </ListItem>
        <ListItem>
          "The expense of your library depends on its total API surface area.
          React tries to limit this surface area so that you can work with
          standard JavaScript" - sebastian markbage
          https://www.youtube.com/watch?v=4anAwXYqLG8
        </ListItem>
        <ListItem>
          "When they're using React, it feels like they're just using
          JavaScript" - Cheng Lou 11:11
          https://www.youtube.com/watch?v=_0T5OSSzxms
        </ListItem>
        <ListItem>
          "Feature bloat ironically is caused by folks who don't grasp the sweet
          spot but want to still contribute." - Cheng Lou 29:23
          https://www.youtube.com/watch?v=24S5u_4gx7w
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
          "react already has a small surface area, but we're actively removing
          proprietary features from the framework" - sebastian markbage
          https://www.youtube.com/watch?v=4anAwXYqLG8
        </ListItem>
        <ListItem>
          "Standard JavaScript syntax represents an intermediate format that can
          be shared across libraries" - sebastian markbage
          https://www.youtube.com/watch?v=4anAwXYqLG8
        </ListItem>
        <ListItem>
          "The tragic reality of the JavaScript ecosystem is: I consider myself
          relatively decent in JavaScript but that doesn't mean that I can be
          productive with a codebase built with hundreds of little libraries. I
          can speak JavaScript, I can write JavaScript, but it still takes me as
          much time as an intermediate or newcomer for mastering a library and
          becoming productive in a library" - Cheng Lou 22:16
          https://www.youtube.com/watch?v=_0T5OSSzxms
        </ListItem>
        <ListItem>
          "the next thing I want to work on is basically just formalizing this
          step in the process - how do we remove existing features from the
          existing language? they will never be removed from the web because you
          can't remove things from the web. but it can be removed from our
          industry's mental surface area ('Rethink the stack and purge')" -
          sebastian markbage https://www.youtube.com/watch?v=4anAwXYqLG8
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
          "React is only the view layer - only a handful of APIs to remember and
          no need to google stuff all the time" dan abramov
          http://threedevsandamaybe.com/the-history-of-react-and-flux-with-dan-abramov/
        </ListItem>
        <ListItem>
          "strategy to make a better library: listen to slow moving standards
          committees (use polyfills to write standards-based JS instead of
          libraries)" - sebastian markbage
          https://www.youtube.com/watch?v=4anAwXYqLG8
        </ListItem>
        <ListItem>
          "We're not trying to diverge from standards like web components with
          this, we just think that the functional approach taken by React means
          that we can drop so much more of the surface area" - sebastian
          markbage https://www.youtube.com/watch?v=4anAwXYqLG8
        </ListItem>
        <ListItem>
          "That's the theme of this talk - dragging things down - dragging
          things down into the language" - Cheng Lou 18:15
          https://www.youtube.com/watch?v=_0T5OSSzxms
        </ListItem>
        <ListItem>
          React can take advatage of things in the web components specifications
          like Shadow DOM<br />
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
          what we have and we've created this diffing algorithm and these other
          cool abstractions like the virtual DOM and all this stuff right? but
          if we didn't have to use the DOM as our target, we wouldn't" -
          sebastian markbage https://www.youtube.com/watch?v=Zemce4Y1Y-A
        </ListItem>
        <ListItem>
          DOM Attributes and properties are a strange API (sebastian markbage
          https://www.youtube.com/watch?v=Zemce4Y1Y-A)
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
          "Web components was going to save us from everything in the DOM world
          - unfortunately [it doesn't achieve this]"<br />
          - does nothing to enforce declarative APIs<br />
          - impossible to automatically map arbitrary Web component to
          react-like declarative API<br />
          - most web components assume an imperative API (different programming
          model)<br />
          - complex model for children<br />
          - all of the problems that we have with the DOM are there with web
          components<br />
          (sebastian markbage https://www.youtube.com/watch?v=Zemce4Y1Y-A)
        </ListItem>
        <ListItem>
          web components doesnt focus on composability (data flow between parent
          component and child component)<br />
          web components fully embraces the DOM and adds new APIs. React hates
          the DOM and only interacts with it through message passing, allowing
          things like server-side rendering which is not possible with Web
          Components<br />
          (Pete Hunt: React - Rethinking Best Practices
          https://www.youtube.com/watch?v=DgVS-zXgMTk)
        </ListItem>
      </List>
    </Slide>

    <Slide bgColor="white">
      <Heading size={2}>Standardization efforts</Heading>
      Proposals to standardize features:<br />
      - by React contributors and users<br />
      - to lower paradigms promoted by React into the language<br />
      <br />
      Since React focuses on a minimal API surface, relying often on JavaScript
      language features within JSX, a lot of the standards proposals focus on
      improving JavaScript instead of shoehorning React proprietary features
      into the language.<br />
      Also a bit hand-wavey because not everyone in the React ecosystem is part
      of Facebook or even motivated by React with their proposal.
      <List>
        <ListItem>
          "One day when React isn't needed anymore, in a few years or so..." -
          cheng lou 11:21 https://www.youtube.com/watch?v=_0T5OSSzxms
        </ListItem>
        <ListItem>
          "I represent facebook on the TC39 standards committee, but don't
          worry, the bad parts are not mine, they're somone else's" - sebastian
          markbage https://www.youtube.com/watch?v=4anAwXYqLG8
        </ListItem>
      </List>
    </Slide>

    <Slide bgColor="white">
      Standardization efforts: Declarativity / Boilerplate reduction
    </Slide>

    <Slide bgColor="white">
      @sebmarkbage (Facebook) - Rest / Spread properties (stage 3)<br />
      Rest / Spread properties<br />
      Significance: Declarativity / language-level boilerplate reduction<br />
      {`
    // From React Docs https://facebook.github.io/react/docs/jsx-in-depth.html#spread-attributes
    function App2() {
      const props = {firstName: 'Ben', lastName: 'Hector'};
      return <Greeting {...props} />;
    }
    // From Redux Docs
    function todoApp(state = initialState, action) {
      switch (action.type) {
        case SET_VISIBILITY_FILTER:
          return { ...state, visibilityFilter: action.filter }
        default:
          return state
      }
    }
    `}
      <br />
      https://github.com/tc39/proposal-object-rest-spread
    </Slide>

    <Slide bgColor="white">
      @sebmarkbage (Facebook) - Silent Property Access on null/undefined for
      ECMAScript (not yet proposed)<br />
      Significance: Declarativity / language-level boilerplate reduction<br />
      Alternative approach to optional chaining operator here:
      https://github.com/tc39/proposal-optional-chaining<br />
      https://github.com/sebmarkbage/ecmascript-undefined-propagation
    </Slide>

    <Slide bgColor="white">
      @littledan (Igalia), @jeffmo (Facebook) - Class fields (stage 3)<br />
      Significance: Declarativity / language-level boilerplate reduction<br />
      Today ES classes are currently limited to declarative specification of
      methods, but declarative specification of fields is left to ad-hoc expando
      mutations on class instances in various places. This proposal aims to
      provide a declarative mechanism for specifying fields intended to be
      placed on classes. Such a mechanism is useful for both developers and
      tooling alike as it provides a place to specify the intended properties.<br />
      {`
      // From React docs https://facebook.github.io/react/docs/handling-events.html
      class LoggingButton extends React.Component {
        handleClick = () => console.log('this is:', this);
        render() {
          return <button onClick={this.handleClick}>Click me</button>;
        }
      }
    `}
      https://github.com/tc39/proposal-class-fields
    </Slide>

    <Slide bgColor="white">
      @sebmarkbage (Facebook) - Scoped Constructor Arguments for ECMAScript (not
      yet a concrete proposal)<br />
      Significance: Declarativity / Boilerplate reduction<br />
      The proposed Class Instance Fields leaves one question open: How do you
      create constant fields with access to constructor arguments?<br />
      https://github.com/sebmarkbage/ecmascript-scoped-constructor-arguments
    </Slide>

    <Slide bgColor="white">
      Standardization efforts: Functional programming
    </Slide>

    <Slide bgColor="white">
      @sebmarkbage (Facebook) & @bterlson (Microsoft) - Pattern Matching Syntax
      (stage 0)<br />
      Significance: Pattern matching (functional programming)<br />
      https://github.com/tc39/proposal-pattern-matching
    </Slide>

    <Slide bgColor="white">
      @dherman (Mozilla) - Do Expressions (stage 0)<br />
      Significance: Do expressions (functional programming)<br />
      {`
    return (
      <nav>
        <Home />
        {
          do {
            if (loggedIn) {
              <LogoutButton />
            } else {
              <LoginButton />
            }
          }
        }
      </nav>
    )
    `}
      <br />
      https://github.com/tc39/proposal-do-expressions
    </Slide>

    <Slide bgColor="white">
      Standardization efforts: Immutability / Performance
    </Slide>

    <Slide bgColor="white">
      @sebmarkbage (Facebook) - Immutable JS (presented in 2015, no further
      progress)<br />
      ECMAScript Immutable Data structures (immutability)<br />
      Significance: Immutability / performance<br />
      Immutability and referential transparency has many known benefits and
      ability for optimization. Several modern JavaScript libraries take
      advantage of this, and many more functional compile-to-JS languages.<br />
      https://github.com/sebmarkbage/ecmascript-immutable-data-structures
    </Slide>

    <Slide bgColor="white">
      @sebmarkbage (Facebook) - Shallow Object Equality Test for ECMAScript
      (stage 0)<br />
      Significance: immutability / performance<br />
      Programming paradigms that rely on immutable data structures use
      memoization as an optimization technique of pure functions. Libraries like
      React and others currently rely heavily on doing object comparisons to
      know if a calculation can bail out. A memoized result can then be reused.<br />
      To avoid this problem, libraries implement shallow comparisons of object
      by comparing the values one level deep:<br />
      You can create an optimized path for specific known object signatures if
      you know them upfront but these generic variants are not optimized by VMs
      and requires lots of introspection into the internal hidden class
      representations to look up the keys in the respective class.<br />
      Meanwhile, on native architectures the equivalent operation can be as
      little as a few CPU instructions depending on architecture and
      optimizations.<br />
      https://github.com/sebmarkbage/ecmascript-shallow-equal
    </Slide>

    <Slide bgColor="white">
      TODO: dont include? @sebmarkbage (Facebook) - Realm Snapshot for
      ECMAScript (not yet presented)<br />
      Significance: Performance<br />
      An API that allows an ECMAScript program to have its heap and parsed
      functions serialized into an opaque VM specific format. This can then be
      stored in caches, transferred between workers and restored for fast
      start-up times.<br />
      https://github.com/sebmarkbage/ecmascript-realm-snapshot
    </Slide>

    <Slide bgColor="white">
      @ljharb (Airbnb) - Promise.prototype.finally<br />
      Way to register a callback for when the promise has been either resolved
      or rejected<br />
      "The essential use case here is cleanup - I want to hide the 'loading'
      spinner on my AJAX request"
      https://github.com/tc39/proposal-promise-finally/
    </Slide>

    <Slide bgColor="white">
      @ljharb (Airbnb) - Object.values / Object.entries (ES2017)<br />
      Many libraries have a “values” function: lodash/underscore, jQuery,
      Backbone, etc.<br />
      https://github.com/tc39/proposal-object-values-entries
    </Slide>

    <Slide bgColor="white">
      @ljharb (Airbnb) - Object.getOwnPropertyDescriptors (ES2017)<br />
      In these days more than ever, where functional programming and immutable
      objects are essential parts of complex applications, every framework or
      library is implementing its own boilerplate in order to properly copy
      properties between composed objects or prototypes.<br />
      https://github.com/tc39/proposal-object-getownpropertydescriptors
    </Slide>

    <Slide bgColor="white">Tooling improvements</Slide>

    <Slide bgColor="white">
      @jeffmo (Facebook) - Trailing commas in functions (ES2017)<br />
      Significance: Tooling improvements (version control)<br />
      Not having two lines changed in diffs when function parameters or
      arguments are split across multiple lines<br />
      https://github.com/tc39/proposal-trailing-function-commas
    </Slide>

    <Slide bgColor="white">
      <Heading size={3}>Why hasnt there been more progress?</Heading>
      (2015) browser implementers are not ready for simpler alternative to the
      existing DOM<br />
      "unfortunately, I think this might be too radical. at least, right now
      (2015) browser implementers are not willing to take on these types of
      tasks. If they were to implement the virtual DOM, they would build it on
      top of the existing imperative API" - sebastian markbage
      https://www.youtube.com/watch?v=Zemce4Y1Y-A
    </Slide>

    <Slide bgColor="white">
      <Heading size={3}>Why hasnt there been more progress?</Heading>
      however, the extensible web manifesto is cool - it allows lower-level
      access to the things already available, and the browser vendors dont need
      to embrace a completely new model like React - sebastian markbage
      https://www.youtube.com/watch?v=Zemce4Y1Y-A
    </Slide>

    <Slide bgColor="white">
      <Heading size={2}>React: Other Influence</Heading>
      A bit hand-wavey as well, because its not easy to prove influence<br />
      - angular: single-direction data flow<br />
      - ember: "In recent years React influenced many JavaScript frameworks,
      Ember was not the exception. Ember 2.0 adopted a component first view, a
      very similar life-cycle, an actions up, data down system and others."
      https://medium.com/@eluciano11/from-ember-to-react-5c2faa0e8d10<br />
      Ember 2.0 React inspirations: virtual DOM (although now different approach
      with Glimmer), unidirectional data flow
      https://github.com/emberjs/rfcs/pull/15<br />
      - polymer: imports<br />
      - vue: API similarities incl. single-file components, provide/inject
      (similar to Reacts context) 2.2.0, higher-order component improvements
      2.4.0<br />
      - Web components: "React is awesome and drives a ton of discussion among
      folks who work on Web Components."
      https://robdodson.me/regarding-the-broken-promise-of-web-components/<br />
    </Slide>

    <Slide bgColor="white">
      <Heading size={2}>Future</Heading>
      <List>
        <ListItem>
          Using web components with React:<br />
          - "The golden use case for WCs would be as primitive leaf components,
          like third party UI component libraries such as Material UI or
          Elemental UI." https://staltz.com/react-could-love-web-components.html<br />
          - Addy Osmani Also:
          https://addyosmani.com/blog/component-interop-with-react-and-custom-elements/<br />
          - Also mentioned in the React docs: Web Components provide strong
          encapsulation for reusable components, while React provides a
          declarative library that keeps the DOM in sync with your data. The two
          goals are complementary. As a developer, you are free to use React in
          your Web Components, or to use Web Components in React, or both.
          https://facebook.github.io/react/docs/web-components.html<br />
          - Lib: Reactive Elements
          http://pixelscommander.com/polygon/reactive-elements/example/<br />
          - Lib: SkateJS https://github.com/skatejs/skatejs - Lib: Stencil
          https://stenciljs.com/
        </ListItem>
        <ListItem>
          Unity component Spec<br />
        </ListItem>
        <ListItem>
          ReasonML - "No need to draft a spec, read Sebastian's spec, agree with
          it, disagree with it" - Cheng Lou 17:05
          https://www.youtube.com/watch?v=_0T5OSSzxms<br />
          - React features being inspired by OCaml / ReasonML
          https://github.com/facebook/react/issues/10581
        </ListItem>
      </List>
    </Slide>

    <Slide bgColor="white">
      <Heading size={2}>Future: Re-spec of the DOM or alternate model</Heading>
      <List>
        <ListItem>
          Douglas Crockfords "helper app" 23:39
          https://www.youtube.com/watch?v=6UTWAEJlhww&feature=youtu.be&t=23m39s<br />
        </ListItem>
        <ListItem>
          Ken Wheelers "App Browser"<br />
        </ListItem>
      </List>
    </Slide>

    <Slide bgColor="white">
      <Heading size={2}>Future: Conclusion</Heading>
      Conclusion: Just like everyone, I cannot prophesize the future.<br />
      TODO: More
    </Slide>
  </div>
);
