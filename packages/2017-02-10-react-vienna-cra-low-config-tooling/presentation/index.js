// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  Deck,
  // Fill,
  // Fit,
  Heading,
  Image,
  // Layout,
  ListItem,
  List,
  // MarkdownSlides,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  danTweetTragedyOfTheCommons: require("../assets/dan-tweet-tragedy-of-the-commons.png"),
  jerryExhausted: require("../assets/jerry-exhausted.gif"),
  georgeUnderDesk: require("../assets/george-under-desk.gif"),
  webpackIssues: require("../assets/webpack-issues.png"),
  kramerHead: require("../assets/kramer-head.gif"),
  webpackConfigSearch: require("../assets/webpack-config-search.png")
};

preloader(images);

const theme = createTheme({
  primary: "#fff8eb",
  secondary: "#482e2e",
  tertiary: "#ae4737",
  quartenary: "#ffdb99"
}, {
  primary: "Montserrat",
  secondary: "Montserrat"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} progress="none">
        <Slide>
          <Text textSize={50} lineHeight={1.4}>
            How <Code textSize={55} bgColor="#fff3c7" textColor="secondary">create-react-app</Code> inspired low-configuration tooling at kununu
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" textSize={40}>
            by @karlhorky
          </Text>
        </Slide>


        <Slide>
          <Heading size={2} textColor="secondary">
            What is configuration?
          </Heading>
        </Slide>

        <Slide align="center top">
          <br />
          <Text textSize={50}>
            What is configuration?
          </Text>
          <br />
          <Heading size={3} textColor="secondary">
            Settings to adapt something generic to multiple use cases
          </Heading>
        </Slide>

        <Slide align="center top">
          <br />
          <Text textSize={50}>
            What is configuration?
          </Text>
          <Heading size={3} textColor="secondary">
            Example:<br />
            Adapting a code bundler to multiple use cases.
          </Heading>
        </Slide>

        <Slide notes="<ul><li>Sounds great, right?</li><li>'...right?': To try to answer this question, let's examine 3 phenomena in our industry...</li></ul>">
          <Heading size={3} textColor="secondary">
            Everyone gets what they want and everyone is happy! 🎉
          </Heading>
          <br />
          <Appear>
            <Heading size={3} textColor="secondary">
              ... right? 🤔
            </Heading>
          </Appear>
        </Slide>


        <Slide bgImage={images.jerryExhausted} bgDarken={0.4} align="center top">
          <br />
          <Text textSize={50} textColor="primary">
            Industry phenomenon #1
          </Text>
          <br />
          <Heading size={2} textColor="primary">
            JavaScript Fatigue
          </Heading>
        </Slide>

        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>...every project required decisions to be made...</Quote>
            <Appear>
              <Cite textColor="quartenary">Eric Clemmons, "JavaScript Fatigue"</Cite>
            </Appear>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">
            Configuration represents author decisions
          </Heading>
        </Slide>


        <Slide notes="JS community has seen prominent maintainers burning out" bgImage={images.georgeUnderDesk} bgDarken={0.3} align="center top">
          <br />
          <Text textSize={50} textColor="primary">
            Industry phenomenon #2
          </Text>
          <br />
          <Heading size={2} textColor="primary">
            Maintainer Burnout
          </Heading>
        </Slide>

        <Slide notes="<ul><li>just small selection of webpack issues</li><li>if you scroll through this list, many are about incompatible configuration</li></ul>" bgColor="tertiary">
          <Image width="100%" src={images.webpackIssues} />
        </Slide>

        <Slide notes="<ul><li>Dan Abramov: this situation -> Tragedy of the Commons</li><li>describes situation: many individuals competing for shared resource</li><li>in this case, maintainer effort</li></ul>">
          <Image width="80%" src={images.danTweetTragedyOfTheCommons} />
        </Slide>

        <Slide notes="<ul><li>Triaging, answering and investigating issues with configuration</li><li>Writing and maintaining tests and functionality for every possible configuration</li></ul>">
          <Heading size={2} textColor="secondary">
            Configuration represents maintainer effort
          </Heading>
          <List>
            <Appear><ListItem>Issues with configuration</ListItem></Appear>
            <Appear><ListItem>Maintenance of every configuration</ListItem></Appear>
          </List>
        </Slide>


        <Slide bgImage={images.kramerHead} bgDarken={0.3} align="center top">
          <br />
          <Text textSize={50} textColor="primary">
            Industry phenomenon #3
          </Text>
          <br />
          <Heading size={2} textColor="primary">
            High mental load in teams
          </Heading>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Which project was that with that latest change to that webpack config?
          </Heading>
          <br />
          <Image src={images.webpackConfigSearch} />
        </Slide>

        <Slide notes="Every team member who works with the tool needs to understand it and its configuration options.">
          <Heading size={2} textColor="secondary">
            Configuration represents team responsibility
          </Heading>
        </Slide>

        <Slide>
          So what's the answer?  **OR** The zero-config movement
        </Slide>

        <Slide>
          Zero=config movement: Dan joining facebook to work on a secret project which turned out to be create-react-app
        </Slide>

        <Slide>
          Zero=config movement: prettier
        </Slide>

        <Slide>
          Zero=config movement: u
        </Slide>

        <Slide>
          What's the answer? I'll answer that with a story...
        </Slide>


        <Slide>
          When I first tried out create-react-app
        </Slide>

{null /*
        <Slide>
          At kununu we weren't even trying to solve this problem at first.<br />
          We just wanted to experiment with Dan's new `create-react-app` tool to see if it would help us.
        </Slide>

        <Slide>
          This happened at the same time as we were coming up with the concept for a new modular, scalable architecture.
        </Slide>

        <Slide>

        </Slide>
*/}

        <Slide>
          <Heading size={3} textColor="secondary">
            Is this overengineered? 🤓
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            Can be, if:
          </Heading>
          <List>
            <Appear><ListItem>You have a small team</ListItem></Appear>
            <Appear><ListItem>You have a low amount of config</ListItem></Appear>
            <Appear><ListItem>You have a low number of projects</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            Otherwise, try it out and decide for yourself! 🖖
          </Heading>
        </Slide>

        <Slide align="center top">
          <Heading size={3} textColor="secondary">
            Recap:
          </Heading>
          <List>
            <Appear><ListItem>Config is ...</ListItem></Appear>
            <Appear><ListItem>Resist configuration ...</ListItem></Appear>
            <Appear><ListItem>create-react-app paradigm can help</ListItem></Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
