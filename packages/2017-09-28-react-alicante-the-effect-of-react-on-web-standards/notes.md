# The Effect of React on Web Standards

## Differences between component models in React and web standards

### React

- doesn't use templates, which: <sup>1</sup>
  - allows full use of JavaScript
  - avoids manual string concatenation
- colocates markup and view logic
- avoids imperative DOM mutations through reconciliation of virtual dom <sup>1</sup> <sup>2</sup> <sup>3</sup> <sup>4</sup> <sup>5</sup>

### Web Standards (web components)

**References:**

1. https://facebook.github.io/react/blog/2013/06/05/why-react.html
2. https://softwareengineering.stackexchange.com/a/237762/91530
3. https://www.youtube.com/watch?v=e7A6EUe3XGM
4. https://facebook.github.io/react/docs/reconciliation.html
5. https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e

## Presentation Narrative

Ideas to keep it entertaining:
- do it like a 90s high school TV show (with the record screech)
- do it like a murder mystery
- memes
- other ideas to keep the audience laughing the whole time

### Intro, whetting the appetite

Clickbaity teaser
- *Images (+ record screeching sound like in 90s tv shows?)* So how did we get here??
- to try to answer this, let's take a couple of steps back

### Section 0: History of web standards, with focus on web components

Could do this cinematically, like a murder mystery:
- "The year was 1992, and Mozilla had just started work on a new standard"

### Section 1: Setting the stage

Discussion of:
- dissatisfaction with web standards
- projects like jQuery
- other precursor frameworks

### Section 2: A new library is born

React.
- When did it show up
- Why & how was it made
  - Its technical requirements and wanting to push boundaries
  - Functional paradigms
- How did it appear
- Who made it?
  - How they are involved in web standards
- Quick comparison to web components contrast (maybe throughout this section)
- Influences on other libraries
  - polymer 3 (html imports -> ES Modules, bower -> npm, yarn)
    - https://react-etc.net/entry/polymer-3-0-moves-to-npm-and-es6-modules-with-templates-in-javascript?ref=webdesignernews.com
    - https://www.youtube.com/watch?v=JH6jEcLxJEI
  - https://react-etc.net/entry/lit-html-javascript-templating-from-polymer-team-google
  - https://github.com/PolymerLabs/lit-html

### Section 3: The Standardization efforts

// TODO: Split into high-level and low-level?

- Philosophy of Reinvention
- Specs and proposals by the React team (+ how React uses them)
  - JSX (failed)
  - immutable data structures (failed)
  - trailing commas
  - object spread (+ React props spreading)
  - class field declarations
  - binary AST
  - quick mention of Unity Component Spec (expanded upon more in Future)

### Section 4: Present and Future

- Efforts for interop and convergence
  - using web components in React
  - SSR for optimizing for how browsers work best (?)
  - embracing CSS syntax with CSS in JS (glam using standards)
  - Unity Component Spec

### Section X: Compare and contrast

Do we need this deep dive at the end? Seems like it's kind of boring...

FIXME: this is too slow, we need to get into interesting stuff more quickly. Start with examples. Compare and contrast.

What is React?
- declarative view library
- no really, what is react? (deeper dive)
  - when was it created and for what purpose
  - how was the JS / framework climate when was it created?
  - what kind of component model does it have
  - what philosophies
- there's more than that, isn't there? yes:
  - community
  - contributors

What are web standards?
- the standards behind web tech
- no really, what are web Standards (deeper dive)
  - who creates them, how are they decided upon, who implements them
  - what kind of component model does web standards have?
