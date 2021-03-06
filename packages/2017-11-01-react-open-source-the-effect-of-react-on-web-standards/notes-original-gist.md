# The effect of React on web standards

React and its community and contributors have had a marked effect on the standardization and adoption of web technologies.

- TC39 Proposals
  - trailing function commas https://github.com/tc39/proposal-trailing-function-commas
  - object spread
  - public class fields (static properties, instance properties - use in React classes) https://github.com/tc39/proposal-class-public-fields
  - immutable data structures (dead 2015 proposal) https://github.com/sebmarkbage/ecmascript-immutable-data-structures
  - failed JSX standards proposal
  - other proposals like macros (not proposed yet): https://twitter.com/left_pad/status/883412096834301952
- React's different direction than web components
- community's tendency towards re-invention, wanting more lower-level control than current web APIs give them
  - CSS in JS, react-native-web
  - Fiber: reimplementation of the stack
- web assembly https://github.com/sebmarkbage/ocamlrun-wasm
- functional programming style (popularization of this)
- immutability
- React Core meeting notes https://twitter.com/search?q=react%20core%20meeting%20notes&src=typd
- TC39 meeting notes
- ES Modules (?)

## Inventions
- JSX
  - Future of JSX: https://github.com/facebook/jsx/issues/65
- React component model
- unidirectional data flow
- Virtual DOM

## Efforts for Integration and Cooperation with the Status Quo
- Dominic's work on using more standards within React, making React smaller
- using server-side rendering and above-the-fold rendering to optimize apps for how browsers perform best
- using web components with React
- embracing of css syntax with styled-components, etc
- glam using standards for dynamic css

## Libraries, Documentation
- mostly using new syntax and language features (often before they are completely standardized)
- examples of libraries using new web tech

## Contributors
- Sebastian Markbage
- James Kyle
- Jeff Mo (? outside react team?)
- Dan Abramov (? outside react team?)
- Andrew Clark (? outside react team?)
- Airbnb engineers
- everyone from Dan's list https://medium.com/@dan_abramov/my-react-list-862227952a8c

## Resources
- Sebastian's minimal API Surface talk (using web standards instead of creating a large framework, from here http://2014.jsconf.eu/speakers/sebastian-markbage-minimal-api-surface-area-learning-patterns-instead-of-frameworks.html):
https://www.youtube.com/watch?v=4anAwXYqLG8
- Andrew's Fiber talk: "What's Next for React — ReactNext 2016"
https://www.youtube.com/watch?v=aV1271hd9ew
- Lin's Fiber Talk: "A Cartoon Intro to Fiber - React Conf"
https://www.youtube.com/watch?v=ZCuYPiUIONs
- Sebastian Markbage on The React Core Team, React Fiber and Web Assembly (from https://medium.com/this-dot/react-react-fiber-react-gamekit-serverless-architecture-and-react-loadable-3fee712a55c1)
https://www.youtube.com/watch?v=qYFEbDc5-JI
- Sebastian Markbage on DOM as a 2nd-class citizen within React https://www.youtube.com/watch?v=Zemce4Y1Y-A
- James Kyle Talks React, React Loadable, and the Open Source Community
https://www.youtube.com/watch?v=615O4etSkE4
- Douglas Crockford - Upgrading the web ("DOM is the worst API ever invented", "JavaScript is a hot mess") https://www.youtube.com/watch?v=6UTWAEJlhww
- Why we Need an App Browser by Ken Wheeler ("open source") https://www.youtube.com/watch?v=WEQx3wz8QeY
- Ken Wheeler's "App Browser" conversation on Twitter https://convopage.com/c/854699025928531968 (full twitter feed: https://twitter.com/ken_wheeler/status/854699025928531968)
- This.JavaScript 08/10 (pronunciation of Markbåge) https://www.youtube.com/watch?v=R4vjqnYHlmY
- Pete Hunt - The Secrets of React's Virtual DOM (FutureJS 2014) https://www.youtube.com/watch?v=-DX3vJiqxm4
- W3C working groups http://www.onsman.com/w3c-working-groups-future-web/
- A brief history of JavaScript https://auth0.com/blog/a-brief-history-of-javascript/
- Data binding compared in JavaScript frameworks http://engineering.paiza.io/entry/2015/03/12/145216
- Angular - The modern HTML5 Answer to Silverlight's MVVM https://csharperimage.jeremylikness.com/2014/03/angular-modern-html5-answer-to.html
- ECMAScript "Harmony" https://mail.mozilla.org/pipermail/es-discuss/2008-August/003400.html
- "Dissecting Web Components FUD - @csuwildcat" (discussion with Dan Abramov about downsides of web components) https://twitter.com/csuwildcat/status/769282628608401408
- Sebastian McKenzie - Improving Your Workflow With Code Transformation at react-europe 2015 (new syntax Jeff Morison's ECMAScript proposal ~ 20 minutes) https://www.youtube.com/watch?v=OFuDvqZmUrE
- Your tweet to Addy https://twitter.com/karlhorky/status/908670835937902592
- Extensible Web Manifesto https://github.com/extensibleweb/manifesto
- From Ember to React https://medium.com/@eluciano11/from-ember-to-react-5c2faa0e8d10
- Ember 2.0 Best Practices: Data Down, Actions Up https://dockyard.com/blog/2015/10/14/best-practices-data-down-actions-up
- Cheng Lou - Taming the Meta Language - React Conf 2017 https://www.youtube.com/watch?v=_0T5OSSzxms
- What's in a language? - Cheng Lou, React London 2017 https://www.youtube.com/watch?v=24S5u_4gx7w
- Imperfection - Cheng Lou aka @_chenglou at @ReactEurope 2017 https://www.youtube.com/watch?v=tCVXp6gFD8o
- Cheng Lou - On the Spectrum of Abstraction at react-europe 2016 https://www.youtube.com/watch?v=mVVNJKv9esE
- stage-0 to stage-4 ECMAscript proposals https://github.com/hemanth/es-next
- "React: RESTful UI Rendering" by Pete Hunt https://www.youtube.com/watch?v=IVvHPPcl2TM
- Broken promises of Web Components https://dmitriid.com/blog/2017/03/the-broken-promise-of-web-components/
- Regarding the broken promise of Web Components https://robdodson.me/regarding-the-broken-promise-of-web-components/
- React / Angular meeting Day  https://docs.google.com/document/d/1QZxArgMwidgCrAbuSikcB2iBxkffH6w0YB0C1qCsuH0/edit
- jQuery vs Vanilla https://gist.github.com/liamcurry/2597326
- Building the web platform by Anne van Kesteren https://fronteers.nl/congres/2012/sessions/building-the-web-platform-anne-van-kesteren
- React through the ages slides https://speakerdeck.com/zpao/react-through-the-ages
- Sex, Houdini and the Extensible Web https://dev.opera.com/articles/houdini/
- Web Standards https://en.wikipedia.org/wiki/Web_standards
- Web Standards Project Mission https://www.webstandards.org/about/mission/
- Rules for Standards makers http://scripting.com/2017/05/09/rulesForStandardsmakers.html
- look at your "Talks to watch"

- HTML Module imports (and React's aversion): https://github.com/w3c/webcomponents/issues/645
- Unity component specification https://github.com/TheLarkInn/unity-component-specification/issues/2 https://twitter.com/_developit/status/899412282136039424 https://twitter.com/TheLarkInn/status/899388245057785856 https://github.com/TheLarkInn/unity-component-specification
- TC39 July 2017 meeting notes https://twitter.com/left_pad/status/891020320630595586?s=03

- References for jQuery influencing web standards:

https://books.google.at/books?id=Wlu8DAAAQBAJ&pg=SA8-PA58&lpg=SA8-PA58&dq=queryselector+queryselectorall+influence+jquery&source=bl&ots=bR-sn2HaYv&sig=qqkCLQxzMjTZlvx_FMdPbQX8Y-o&hl=en&sa=X&ved=0ahUKEwim34Ts4-vVAhUEYVAKHdIWCpw4ChDoAQhFMAQ#v=onepage&q=queryselector%20queryselectorall%20influence%20jquery&f=false

https://books.google.at/books?id=t-VrBgAAQBAJ&pg=PA174&lpg=PA174&dq=jquery+influence+web+standards&source=bl&ots=8i05lxQOLf&sig=-Y7CVE11SfpImWNv3zAfo55ih04&hl=en&sa=X&ved=0ahUKEwinuNy35OvVAhUEU1AKHaJVCYQQ6AEIZzAJ#v=onepage&q=jquery%20influence%20web%20standards&f=false

- Custom Elements Everywhere from Rob https://twitter.com/rob_dodson/status/900020457075822594

- "There's an *awful lot* of JavaScript that exists solely because the developer didn't know CSS well enough." - @chriseppstein https://twitter.com/chriseppstein/status/908332267394580481

## Project ideas
- Do one or more blog posts on the topic
- Create a platform to show involvement in TC39 (who represents which company eg. Facebook)
- Create a platform to track innovations driven by React (? maybe difficult)

## Feedback
- cpojer "React's direct effect on "web standards" directly is not significant - only object spread"
  - retitle talk to "web ecosystem" or something?
  - focus on the long tail (indirect effects, community effects, influence on industry)
- trueadm "lots of movement in the space"
  - Dominic's work on using more standards within React, making React smaller
  - failed JSX standards proposal
  - send abstract for further feedback
  - Twitter chat notes
  - Sebastian can offer further feedback
- svensauleau "Facebook is pushing a lot functional paradigms, types and AOT compilation"
  - FP and types don't work so well in JS (flow, immutable.JS, redux, ...) They now push reasonml for this reason
  - And Ahead Of Time compilation with prepack is also the future. Do less at runtime and more at compile time
