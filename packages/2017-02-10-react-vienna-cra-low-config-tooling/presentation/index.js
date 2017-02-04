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
  tired: require("../assets/tired.jpg"),
  webpackIssues: require("../assets/webpack-issues.png")
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
          <Heading size={2} color="secondary">
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

        <Slide notes="<ul><li>Sounds great, right?</li><li>'right': To try to answer this question, let's examine a phenomenon in our industry...</li></ul>">
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

        <Slide bgImage={images.tired} bgDarken={0.4}>
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

        <Slide notes="Decisions being part of JavaScript Fatigue">
          <Heading size={2} textColor="secondary">
            Configuration represents author decisions
          </Heading>
        </Slide>

        <Slide>
          <Image width="100%" src={images.webpackIssues} />
        </Slide>

        <Slide notes="<ul><li>Triaging, answering and investigating issues with configuration</li><li>Writing and maintaining tests for every possible configuration</li></ul>">
          <Heading size={2} textColor="secondary">
            Configuration represents maintainer effort
          </Heading>
          <List>
            <Appear><ListItem>Issues with configuration</ListItem></Appear>
            <Appear><ListItem>Maintaining tests for every configuration</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Image width="80%" src={images.danTweetTragedyOfTheCommons} />
        </Slide>

        <Slide notes="Every team member who works with the tool needs to understand it and its configuration options.">
          <Heading size={2} textColor="secondary">
            Configuration represents team responsibility
          </Heading>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>

        {null /* MarkdownSlides`
          ## Slide One Title
          Slide Content
          ---
          ## Slide Two Title
          Slide Content
        `*/}
      </Deck>
    );
  }
}
