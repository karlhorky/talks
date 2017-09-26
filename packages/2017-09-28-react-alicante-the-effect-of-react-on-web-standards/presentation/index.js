// Import React
import React from "react";

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
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import { theme } from "../themes/react-alicante/";

// Require CSS
require("normalize.css");

const images = {
  logoAdobe: require("../assets/logo-adobe.svg"),
  logoAirbnb: require("../assets/logo-airbnb.svg"),
  logoApple: require("../assets/logo-apple.svg"),
  logoEbay: require("../assets/logo-ebay.svg"),
  logoFacebook: require("../assets/logo-facebook.svg"),
  logoGoogle: require("../assets/logo-google.svg"),
  logoIntel: require("../assets/logo-intel.svg"),
  logoJquery: require("../assets/logo-jquery.svg"),
  logoMozilla: require("../assets/logo-mozilla.svg"),
  logoMicrosoft: require("../assets/logo-microsoft.svg"),
  logoOpera: require("../assets/logo-opera.svg"),
  logoPaypal: require("../assets/logo-paypal.svg"),
  logoSamsung: require("../assets/logo-samsung.svg"),
  logoW3C: require("../assets/logo-w3c.svg"),
  logoYahoo: require("../assets/logo-yahoo.svg")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={0}
        controls={false}
        contentWidth={1200}
        contentHeight={900}
      >
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={4}>The Effect of React on Web Standards</Heading>
          <List>
            <ListItem>Web Standards</ListItem>
            <ListItem>Simplified APIs</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Web Standards Proposals</ListItem>
            <ListItem>Future</ListItem>
          </List>
          <Notes>
            <List>
              <ListItem>Standards: What, Who, How, Discontent</ListItem>
              <ListItem>Simplified APIs</ListItem>
              <ListItem>
                React: Paradigms, Embracing standards, discontent with
                standards, comparison to web components, who is involved, other
                influences
              </ListItem>
              <ListItem>Web Standards Proposals</ListItem>
              <ListItem>
                Future: Integration efforts, specs, DOM alternatives, new
                languages
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1}>React</Heading>
          <Heading size={2}>Not just a library</Heading>
          <List style={{ marginLeft: 65 }}>
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
                paradigm: declaratively describe web UIs, native app, VR, even
                command line interfaces or music
              </ListItem>
              <ListItem>
                ecosystem: rich community, including members of standards
                committees
              </ListItem>
              <ListItem>philosophy: minimalism, fp, immutability</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1}>Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What</Heading>
          <Heading size={5}>DOM Manipulation</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-dom.example")}
            textSize={32}
          />
          <Notes>DOM Manipulation</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What</Heading>
          <Heading size={5}>this keyword</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-this.example")}
            textSize={32}
          />
          <Notes>this</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What</Heading>
          <Heading size={5}>&lt;video&gt; tag</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-video.example")}
            textSize={18}
          />
          <Notes>Video Tag</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What</Heading>
          <Heading size={5}>XMLHttpRequest</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-xhr.example")}
            textSize={32}
          />
          <Notes>XmlHttpRequest(AJAX)</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: What</Heading>
          <Heading size={5}>Custom Elements</Heading>
          <br />
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/web-standards-custom-elements.example")}
            textSize={19}
          />
          <Notes>Custom Elements (web components)</Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: Who</Heading>
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
        <Slide>
          <Heading size={4}>Web Standards: Who</Heading>
          <Heading size={5}>Who is on the spec groups?</Heading>
          <Appear>
            <div style={{ marginLeft: -20, marginRight: -20 }}>
              <Image
                src={images.logoW3C}
                style={{ height: 76, borderRadius: 5, marginTop: 64 }}
              />
              <Image
                src={images.logoGoogle}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoMozilla}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoMicrosoft}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoApple}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoAdobe}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoFacebook}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoIntel}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoOpera}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoEbay}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoYahoo}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoSamsung}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoPaypal}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoAirbnb}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoJquery}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
            </div>
          </Appear>
          <Notes>
            Who are these specifications developed by? Well, mostly large
            companies. And some invited experts...
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: Who</Heading>
          <Heading size={5}>Implementers</Heading>
          <Appear>
            <div style={{ marginLeft: -20, marginRight: -20 }}>
              <Image
                src={images.logoGoogle}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoMozilla}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoMicrosoft}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
              <Image
                src={images.logoApple}
                style={{
                  height: 76,
                  borderRadius: 5,
                  marginLeft: 54,
                  marginTop: 64
                }}
              />
            </div>
          </Appear>
          <Notes>
            But who has the final word on if, when and how the standards get
            published to developers? Only a handful of large companies.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>Web Standards: How</Heading>
          <Heading size={5}>Consensus-Based</Heading>
          <List>
            <Appear>
              <ListItem textSize={60}>multiple stakeholders</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={60}>recommendations can be ignored</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={60}>non-standard paths</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={60}>vendors blocking standards</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>
                multiple stakeholders: changes need to be agreed upon by
                multiple stakeholders
              </ListItem>
              <ListItem>recommendations can be ignored</ListItem>
              <ListItem>
                non-standard paths: browser vendors can choose non standard
                paths, for example: IE's JScript & AJAX, Chrome's default
                passive touch listeners & SPDY)
              </ListItem>
              <ListItem>
                vendors blocking standards: example: Microsoft blocking ES4
                (recurring theme: "I think it was polarized as a consequence of
                the ES4 team refusing to consider any other opinions" - Douglas
                Crockford)
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
          <Heading size={4}>Web Standards: Fundamentally different</Heading>
          <br />
          <Text lineHeight={1.4} textSize={60}>
            The web standards process is fundamentally different than library
            API development with a single owner and monoculture
          </Text>
          <Notes>
            <List>
              <ListItem>
                fundamentally different than library API development with single
                owner and monoculture
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>The Effect of React on Web Standards</Heading>
        </Slide>
      </Deck>
    );
  }
}
