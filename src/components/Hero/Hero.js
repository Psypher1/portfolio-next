import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, Salut, Привет <br />
        I'm James
      </SectionTitle>
      <SectionText>
        I love languages, love code and making cool things with the knowledge I
        acquire each day
      </SectionText>
      <Button onClick={() => (window.location = "mailto:jamesmidzi@gmail.com")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
