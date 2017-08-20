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
