// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  Image,
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
  danTweetTragedyOfTheCommons: require("../assets/dan-tweet-tragedy-of-the-commons.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Montserrat"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} progress="none">
        <Slide bgColor="primary">
          <Text textSize={50} lineHeight={1.4} textColor="secondary">
            How <Code textSize={55}>create-react-app</Code> inspired low-configuration tooling at kununu
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            by @karlhorky
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">
            What is configuration?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            Settings to apply something generic to multiple use cases
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            Example:<br />
            Applying a code bundler to multiple use cases.
          </Heading>
        </Slide>

        <Slide notes="Sounds great, right?">
          <Heading size={3} textColor="secondary">
            Everyone gets what they want and everyone is happy... right?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">
            JavaScript Fatigue
          </Heading>
        </Slide>

        <Slide notes="Decisions being part of JavaScript Fatigue">
          <Heading size={2} textColor="secondary">
            Configuration represents decisions
          </Heading>
        </Slide>

        <Slide notes="<ul><li>Triaging, answering and investigating issues about configuration</li><li>Writing and maintaining tests for every possible configuration</li></ul>">
          <Heading size={2} textColor="secondary">
            Configuration represents maintainer effort
          </Heading>
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
