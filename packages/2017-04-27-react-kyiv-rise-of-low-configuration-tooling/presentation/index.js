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
  buzzfeedCra: require("../assets/buzzfeed-cra.png"),
  craForking: require("../assets/cra-forking.png"),
  craEjecting: require("../assets/cra-ejecting.png"),
  craPackages: require("../assets/cra-packages.png"),
  craWebpackConfig: require("../assets/cra-webpack-config.png"),
  createUniversalReactApp: require("../assets/create-universal-react-app.png"),
  danCRA: require("../assets/dan-cra.png"),
  danTweetTragedyOfTheCommons: require("../assets/dan-tweet-tragedy-of-the-commons.png"),
  georgeUnderDesk: require("../assets/george-under-desk.gif"),
  jerryExhausted: require("../assets/jerry-exhausted.gif"),
  kramerHead: require("../assets/kramer-head.gif"),
  moduleSpecificWebpackConfig: require("../assets/module-specific-webpack-config.png"),
  newmanDrinking: require("../assets/newman-drinking.gif"),
  prettier: require("../assets/prettier.png"),
  reactScriptsPackages: require("../assets/react-scripts-packages.png"),
  reactServerIntegration: require("../assets/react-server-integration.png"),
  reactServerRc: require("../assets/reactserverrc.png"),
  thinking: require("../assets/thinking.png"),
  thinkingCat: require("../assets/thinking-cat.jpg"),
  tired: require("../assets/tired.jpg"),
  webpackIssues: require("../assets/webpack-issues.png"),
  webpackConfigSearch: require("../assets/webpack-config-search.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#fff8eb",
    secondary: "#482e2e",
    tertiary: "#ae4737",
    quartenary: "#ffdb99"
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
        <Slide notes="<ul><li>greetings</li><li>about yourself</li><li>where to find the slides</li><li>to tell this story, let's make sure we're clear on definitions first</li></ul>">
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
          notes="<ul><li>how can we generalize this?</li><li>first of all, what is webpack? a code bundler</li><li>why is it being configured in this case? to adapt it for a specific web application</li></ul>"
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
          notes="<ul><li>We're getting started on a definition.</li><li>But can we make it more generic?</li></ul>"
          align="center top"
        >
          <br />
          <Text textSize={50}>
            What is configuration?
          </Text>
          <Heading size={3} textColor="secondary">
            Settings to adapt<br />
            <Code textSize={68} bgColor="#fff3c7" textColor="secondary">
              a code bundler
            </Code><br />
            for<br />
            <Code textSize={68} bgColor="#fff3c7" textColor="secondary">
              a specific web app.
            </Code>
            <br /><br />
            <Image height="1.5em" src={images.thinking} />
          </Heading>
        </Slide>

        <Slide
          notes="<ul><li>code bundler => something generic</li><li>your specific application => many use cases</li></ul>"
          align="center top"
        >
          <br />
          <Text textSize={50}>
            What is configuration?
          </Text>
          <Heading size={3} textColor="secondary">
            Settings to adapt<br />
            <Code textSize={68} bgColor="#fff3c7" textColor="secondary">
              something generic
            </Code><br />
            for<br />
            <Code textSize={68} bgColor="#fff3c7" textColor="secondary">
              multiple use cases
            </Code>
          </Heading>
        </Slide>

        <Slide notes="<ul><li>Sounds great, right?</li><li>'...right?': To try to answer this question, let's examine a few industry phenomena</li></ul>">
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

        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>...every project required decisions to be made...</Quote>
            <Appear>
              <Cite textColor="quartenary">
                Eric Clemmons, "JavaScript Fatigue"
              </Cite>
            </Appear>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">
            Configuration represents author decisions
          </Heading>
        </Slide>

        <Slide
          notes="JS community has seen prominent maintainers burning out"
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
          notes="<ul><li>just small selection of webpack issues</li><li>if you scroll through this list, many are about incompatible configuration</li></ul>"
          bgColor="tertiary"
        >
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
            <Appear>
              <ListItem>Maintenance of every configuration</ListItem>
            </Appear>
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
          <Heading size={2} textColor="secondary">
            So what's the answer?
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
          <br />
          <Heading size={3} textColor="secondary">
            Settings to adapt something generic to multiple use cases
          </Heading>
        </Slide>

        <Slide notes="probably not - we still have new requirements for new projects...">
          <Heading size={2} textColor="secondary">
            Can we avoid multiple use cases?
          </Heading>
        </Slide>

        <Slide notes="...but, can we standardize the settings in our tools? hm...">
          <Heading size={2} textColor="secondary">
            Can we standardize the settings in our tools?
          </Heading>
        </Slide>

        <Slide
          bgImage={images.newmanDrinking}
          bgDarken={0.6}
          align="center top"
        >
          <br />
          <Text textSize={50} textColor="primary">
            Industry phenomenon #4
          </Text>
          <br />
          <Heading size={2} textColor="primary">
            The rise of zero configuration tooling
          </Heading>
        </Slide>

        <Slide align="center top">
          <Text textSize={50}>
            jlongster/prettier
            <br />
          </Text>
          <Image width="100%" src={images.prettier} />
        </Slide>

        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>
              Unlike eslint, there aren't a million configuration options and rules.
            </Quote>
            <Appear>
              <Cite textColor="quartenary">
                James Long, "A Prettier JavaScript Formatter"
              </Cite>
            </Appear>
          </BlockQuote>
        </Slide>

        <Slide
          notes="One of Dan Abramov's first projects after joining Facebook: a scaffolder for React apps to:<ul><li>abstract away configuration and dependencies</li><li>...in order to make it easier to get started with React</li></ul>"
          align="center top"
        >
          <Text textSize={50}>
            facebookincubator/create-react-app
            <br />
          </Text>
          <Image width="80%" src={images.danCRA} />
        </Slide>

        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote>Create React apps with no build configuration.</Quote>
            <Cite textColor="quartenary">create-react-app</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          notes="So what's in the box?<ul><li>packages</li><li>react-scripts</li></ul>"
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
            style={{ width: "50%", marginLeft: "4%" }}
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

        <Slide align="center top">
          <Text textSize={50}>
            create-react-app
          </Text>
          <List>
            <ListItem>Babel configuration</ListItem>
            <Appear><ListItem>ESLint configuration</ListItem></Appear>
            <Appear><ListItem>webpack configuration</ListItem></Appear>
          </List>
        </Slide>

        <Slide
          notes="so what's clear here is that the build tools still need to be configured, but that is just being abstracted away from the author by the react-scripts dependency"
          align="center top"
        >
          <Text textSize={50}>
            create-react-app
          </Text>
          <Heading size={2} textColor="secondary">
            Making tools<br />zero-config since 2016.
          </Heading>
        </Slide>

        <Slide
          notes="Not having to bikeshed or yak-shave configuration is becoming popular in some teams"
          align="center top"
        >
          <Text textSize={50}>
            create-react-app
          </Text>
          <Image src={images.buzzfeedCra} width="60%" />
        </Slide>

        <Slide
          notes="I first tried out create-react-app for a side project. When I first tried out create-react-app, first instinct was to eject. I was a power user! And I wanted full control! This was my developer instinct to want to configure."
          align="center top"
        >
          <Text textSize={50}>
            create-react-app
          </Text>
          <Image
            src={images.craEjecting}
            width="120%"
            style={{ marginLeft: "-10%", marginRight: "-10%" }}
          />
        </Slide>

        <Slide
          notes="Unfortunately, there are some significant downsides of ejecting."
          align="center top"
        >
          <Text textSize={50} style={{ marginLeft: "-8%", marginRight: "-8%" }}>
            create-react-app
          </Text>
          <Heading size={3} textColor="secondary">
            Downsides of Ejecting
          </Heading>
          <br />
          <List style={{ margin: "0 -4%" }}>
            <Appear>
              <ListItem>All configuration is scoped to the project</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                All configuration is your responsibility again
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Applying updates is a manual task</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide notes="When building tooling:<ul><li>taking a more opinionated stance with sensible default behavior</li><li>resist your developer instinct to configure and add configuration</li></ul>To<ul><li>reduce your effort (so that you as a maintainer don't burn out)</li><li>the effort of others in your team or the community (if you're writing open source tooling)</li></ul>">
          <Heading size={2} textColor="secondary">
            Resist adding configuration as much as possible in your own tools!
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            Is this overengineered? 🤓
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            It can be, if:
          </Heading>
          <List>
            <Appear><ListItem>You have a small team</ListItem></Appear>
            <Appear>
              <ListItem>You have a low amount of config</ListItem>
            </Appear>
            <Appear>
              <ListItem>You have a low number of projects</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">
            Otherwise, try it out and decide for yourself! 🖖
          </Heading>
        </Slide>

        <Slide
          notes="<ul><li>JS fatigue - among other things</li></ul>"
          align="center top"
        >
          <br />
          <Heading size={3} textColor="secondary">
            Takeaways:
          </Heading>
          <List style={{ marginLeft: "-8%", marginRight: "-8%" }}>
            <Appear>
              <ListItem>Config contributes to JavaScript fatigue</ListItem>
            </Appear>
            <Appear>
              <ListItem>Config contributes to maintainer burnout</ListItem>
            </Appear>
            <Appear>
              <ListItem>Config contributes to high team mental load</ListItem>
            </Appear>
            <Appear>
              <ListItem>New zero-configuration tooling can help</ListItem>
            </Appear>
            <Appear><ListItem>You may need an escape hatch</ListItem></Appear>
            <Appear>
              <ListItem>Resist configuration in your own tools</ListItem>
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
