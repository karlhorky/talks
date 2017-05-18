// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  // Fill,
  // Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
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
  craEjecting: require("../assets/cra-ejecting.png"),
  craPackages: require("../assets/cra-packages.png"),
  craWebpackConfig: require("../assets/cra-webpack-config.png"),
  danCRA: require("../assets/dan-cra.png"),
  danTweetTragedyOfTheCommons: require("../assets/dan-tweet-tragedy-of-the-commons.png"),
  eslintRulesBikeshedding: require("../assets/eslint-rules-bikeshedding.png"),
  georgeUnderDesk: require("../assets/george-under-desk.gif"),
  jerryExhausted: require("../assets/jerry-exhausted.gif"),
  jest: require("../assets/jest.png"),
  kramerHead: require("../assets/kramer-head.gif"),
  newmanDrinking: require("../assets/newman-drinking.gif"),
  prettier: require("../assets/prettier.png"),
  reactScriptsPackages: require("../assets/react-scripts-packages.png"),
  statueFight: require("../assets/statue-fight.gif"),
  thinking: require("../assets/thinking.png"),
  thinkingCat: require("../assets/thinking-cat.jpg"),
  tired: require("../assets/tired.jpg"),
  webpackIssues: require("../assets/webpack-issues.png"),
  webpackConfigSearch: require("../assets/webpack-config-search.png"),
  webpackSourceMapOptions: require("../assets/webpack-source-map-options.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#e9f0f5",
    secondary: "#2e3648",
    tertiary: "#ae3737",
    quartenary: "#cddaea"
  },
  {
    primary: "Montserrat",
    secondary: "Montserrat"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
        <Slide notes="<ul><li>greetings / about yourself</li><li>where to find the slides</li><li>to tell this story, let's make sure we're clear on definitions first</li></ul>">
          <Heading size={2} textColor="secondary" lineHeight={1.4}>
            The Rise of
          </Heading>
          <Heading size={2} textColor="secondary" lineHeight={1.4}>
            Low-Configuration Tooling
          </Heading>
          <br />
          <Text margin="10px 0 0" textColor="tertiary" textSize={40}>
            by @karlhorky
          </Text>
        </Slide>

        <Slide notes="For instance: what is configuration">
          <Heading size={2} textColor="secondary">
            What is configuration?
          </Heading>
          <br />
          <Image width="34%" src={images.thinkingCat} />
        </Slide>

        <Slide
          notes="To try to answer this, let's start with an example"
          align="center top"
        >
          <br />
          <Text textSize={50}>
            What is configuration?
          </Text>
          <Heading size={3} textColor="secondary">
            Example:<br />
            webpack Configuration
          </Heading>
        </Slide>

        <Slide
          notes="<ul><li>how can we define this? maybe we can generalize it somehow?</li><li>first of all, what is webpack? a code bundler</li><li>why is it being configured in this case? to adapt it to a specific web application</li></ul>"
          align="center top"
        >
          <Layout>
            <div
              style={{ width: "60%", marginLeft: "-10%", marginRight: "2%" }}
            >
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/webpack-config-1.example")}
              />
            </div>
            <div style={{ width: "60%", marginRight: "-10%" }}>
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/webpack-config-2.example")}
              />
            </div>
          </Layout>
        </Slide>

        <Slide
          notes="<ul><li>We're getting started on a definition.</li><li>But can we make it more general?</li></ul>"
          align="center top"
        >
          <br />
          <Text textSize={50}>
            What is configuration?
          </Text>
          <Heading size={3} textColor="secondary">
            Settings to adapt<br />
            <Code textSize={68} bgColor="#cddaea" textColor="secondary">
              a code bundler
            </Code><br />
            to<br />
            <Code textSize={68} bgColor="#cddaea" textColor="secondary">
              a specific web app
            </Code>
            <br /><br />
            <Image height="1.5em" src={images.thinking} />
          </Heading>
        </Slide>

        <Slide
          notes="<ul><li>How about this?</li><li>code bundler => generic tooling</li><li>your specific application => many use cases</li></ul>"
          align="center top"
        >
          <br />
          <Text textSize={50}>
            What is configuration?
          </Text>
          <Heading size={3} textColor="secondary">
            Settings to adapt<br />
            <Code textSize={68} bgColor="#cddaea" textColor="secondary">
              generic tooling
            </Code><br />
            to<br />
            <Code textSize={68} bgColor="#cddaea" textColor="secondary">
              multiple use cases
            </Code>
          </Heading>
        </Slide>

        <Slide notes="<ul><li>Sounds useful, right?</li><li>'...right?': To try to answer this question, let's examine a few industry phenomena</li></ul>">
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

        <Slide
          bgImage={images.jerryExhausted}
          bgDarken={0.4}
          align="center top"
          notes="<ul><li>Maybe you've heard of it.</li><li></li></ul>"
        >
          <br />
          <Text textSize={50} textColor="primary">
            Industry phenomenon #1
          </Text>
          <br />
          <Heading size={2} textColor="primary">
            JavaScript Fatigue
          </Heading>
        </Slide>

        <Slide
          notes="<ul><li>config. of existing tooling</li><li>knowing how to use and configure the constant barrage of new tooling</li></ul>"
          bgColor="tertiary"
        >
          <BlockQuote>
            <Quote>...every project required decisions to be made...</Quote>
            <Cite textColor="quartenary">
              Eric Clemmons, "JavaScript Fatigue"
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">
            Configuration contributes to programmer fatigue
          </Heading>
        </Slide>

        <Slide
          notes="prominent burnouts in JS community"
          bgImage={images.georgeUnderDesk}
          bgDarken={0.3}
          align="center top"
        >
          <br />
          <Text textSize={50} textColor="primary">
            Industry phenomenon #2
          </Text>
          <br />
          <Heading size={2} textColor="primary">
            Maintainer Burnout
          </Heading>
        </Slide>

        <Slide
          notes="<ul><li>Johannes, webpack maintainer</li><li>this is what he sees in the morning</li><li>if you scroll through this list, many are about incompatible configuration</li></ul>"
          bgColor="tertiary"
        >
          <Image width="100%" src={images.webpackIssues} />
        </Slide>

        <Slide notes="<ul><li>Dan Abramov: this situation -> Tragedy of the Commons</li><li>describes situation: many individuals competing for shared resource</li><li>ex. fishing of fish in the ocean)</li><li>describes in this case, maintainer effort</li></ul>">
          <Image width="80%" src={images.danTweetTragedyOfTheCommons} />
        </Slide>

        <Slide notes="<ul><li>Triaging, answering and investigating issues with configuration</li><li>Writing and maintaining tests and compatibility for every possible configuration</li></ul>">
          <Heading size={2} textColor="secondary">
            Configuration contributes to maintainer burnout
          </Heading>
        </Slide>

        <Slide bgImage={images.kramerHead} bgDarken={0.3} align="center top">
          <br />
          <Text textSize={50} textColor="primary">
            Industry phenomenon #3
          </Text>
          <br />
          <Heading size={2} textColor="primary">
            High mental burden on teams
          </Heading>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Which project was that with that latest change to that webpack config?
          </Heading>
          <br />
          <Image src={images.webpackConfigSearch} />
        </Slide>

        <Slide
          bgColor="quaternary"
          notes="<ul><li>Or, what was the source map option that works in webpack?</li><li>A lot of these configuration options don't work fully and would be good candidates for removal.</li></ul>"
        >
          <Image width="80%" src={images.webpackSourceMapOptions} />
        </Slide>

        <Slide notes="Every team member who works with the tool needs to understand it and its configuration options.">
          <Heading size={2} textColor="secondary">
            Configuration contributes to burden on teams
          </Heading>
        </Slide>

        <Slide bgImage={images.statueFight} bgDarken={0.3} align="center top">
          <br />
          <Text textSize={50} textColor="primary">
            Industry phenomenon #4
          </Text>
          <br />
          <Heading size={2} textColor="primary">
            Endless bikeshedding about configuration
          </Heading>
        </Slide>

        <Slide notes="<ul><li>discussion in Airbnb's JavaScript rules repo about alternate configurations</li><li>this one is a well-reasoned thread, and it still has over 75 comments</li><li>this happens often in companies, leading to... (next) reduced team efficiency</li></ul>">
          <Image src={images.eslintRulesBikeshedding} width="100%" />
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">
            Configuration contributes to reduced team efficiency
          </Heading>
        </Slide>

        <Slide notes="So what can we do?">
          <Heading size={2} textColor="secondary">
            So what’s the answer?
            <br />
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              How can we reduce problems caused by modern build configuration?
            </Heading>
          </Appear>
        </Slide>

        <Slide
          notes="Let's go back to our definition of configuration"
          align="center top"
        >
          <br />
          <Text textSize={50}>
            What is configuration?
          </Text>
          <Heading size={3} textColor="secondary">
            Settings to adapt<br />
            <Code textSize={68} bgColor="#cddaea" textColor="secondary">
              generic tooling
            </Code><br />
            to<br />
            <Code textSize={68} bgColor="#cddaea" textColor="secondary">
              multiple use cases
            </Code>
          </Heading>
        </Slide>

        <Slide notes="probably not - we still have new requirements for new projects...">
          <Heading size={2} textColor="secondary">
            Can we avoid multiple use cases?
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              Probably not - our new projects will still have new requirements...
            </Heading>
          </Appear>
        </Slide>

        <Slide notes="...but, if we choose intelligent defaults, can we reduce the configurability of our tools, simplifying them? hm...">
          <Heading size={2} textColor="secondary">
            Can we decide on intelligent defaults to simplify our tools?
          </Heading>
        </Slide>

        <Slide
          bgImage={images.newmanDrinking}
          bgDarken={0.6}
          align="center top"
          notes="<ul><li>a trend lately: tooling with less options</li><li>the level of configurability is a spectrum</li></ul>"
        >
          <br />
          <Text textSize={50} textColor="primary">
            Industry phenomenon #5
          </Text>
          <br />
          <Heading size={2} textColor="primary">
            The rise of low configuration tooling
          </Heading>
        </Slide>

        <Slide align="center top" notes="For instance, Jest">
          <Text textSize={50} textColor="secondary">
            facebook/jest
            <br />
          </Text>
          <br />
          <Image width="100%" src={images.jest} />
        </Slide>

        <Slide
          bgColor="tertiary"
          notes="<ul><li>As Christoph mentioned</li><li>this means: it covers most use cases out of the box, but may need to be configured to reproduce complex webpack configs</li></ul>"
        >
          <BlockQuote>
            <Quote>
              One of Jest’s philosophies is to provide an integrated “zero-configuration” experience.
            </Quote>
            <Cite textColor="quartenary">
              Jest Docs
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide
          align="center top"
          notes="prettier by James Long keeps options to a minimum as well"
        >
          <Text textSize={50} textColor="secondary">
            prettier/prettier
          </Text>
          <br />
          <Image
            width="120%"
            style={{ marginLeft: "-10%" }}
            src={images.prettier}
          />
        </Slide>

        <Slide
          bgColor="tertiary"
          notes="how does it achieve this? <ul><li>Prettier approaches code style from the perspective of a formatter instead of a configurable linter</li><li>dramatically reduced bikeshedding!</li></ul>"
        >
          <BlockQuote>
            <Quote>
              Unlike ESLint, there aren’t a million configuration options and rules.
            </Quote>
            <Cite textColor="quartenary">
              James Long, "A Prettier JavaScript Formatter"
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide
          notes="<ul><li>create-react-app goes further with zero configuration</li><li>One of Dan Abramov's first projects after joining Facebook: a scaffolder for React apps to abstract away configuration and dependencies...</li></ul>"
          align="center top"
        >
          <Text textSize={50} textColor="secondary">
            facebookincubator/create-react-app
            <br />
          </Text>
          <Image width="80%" src={images.danCRA} />
        </Slide>

        <Slide
          notes="...in order to make it easier to get started with React"
          bgColor="tertiary"
        >
          <BlockQuote>
            <Quote>Create React apps with no build configuration.</Quote>
            <Cite textColor="quartenary">create-react-app</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          notes="So ?<ul><li>packages</li><li>react-scripts</li></ul>"
          align="center top"
        >
          <Text textSize={50}>
            create-react-app
          </Text>
          <Image
            style={{ width: "30%", verticalAlign: "top" }}
            src={images.craPackages}
          />
          <Image
            style={{ width: "40%", marginLeft: "4%" }}
            src={images.reactScriptsPackages}
          />
        </Slide>

        <Slide
          notes="webpack config<ul><li>they sort out the difficult things for you</li><li>babel issue 7539 example</li></ul>"
          align="center top"
        >
          <Text textSize={50}>
            create-react-app
          </Text>
          <Image width="80%" src={images.craWebpackConfig} />
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">
            📚 A tip for library authors...
          </Heading>
        </Slide>

        <Slide notes="<ul><li>taking a more opinionated stance with sensible default behavior</li><li>reduces your effort and the combined effort of users</li><li>sensible defaults for 90% of use cases instead of trying to cover every possible configuration</li></ul>">
          <Heading size={2} textColor="secondary">
            Resist adding configuration
          </Heading>
          <Heading size={4} textColor="secondary">
            Sensible defaults instead of unlimited flexibility
          </Heading>
        </Slide>

        <Slide align="center top">
          <br />
          <Heading size={3} textColor="secondary">
            Takeaways:
          </Heading>
          <List style={{ marginLeft: "-8%", marginRight: "-8%" }}>
            <Appear>
              <ListItem>Config contributes to programmer fatigue</ListItem>
            </Appear>
            <Appear>
              <ListItem>Config contributes to maintainer burnout</ListItem>
            </Appear>
            <Appear>
              <ListItem>Config contributes to mental burden on teams</ListItem>
            </Appear>
            <Appear>
              <ListItem>Config contributes to reduced team efficiency</ListItem>
            </Appear>
            <Appear>
              <ListItem>New low-configuration tooling can help</ListItem>
            </Appear>
            <Appear>
              <ListItem>Resist adding configuration in new tools</ListItem>
            </Appear>
          </List>
          <Appear>
            <Heading size={3} textColor="secondary">
              Thanks!
            </Heading>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
