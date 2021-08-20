import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { GrLanguage } from "react-icons/gr";
import { FaLanguage } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle main>Skills</SectionTitle>
    <SectionText>
      I can converse in a wide range of languages. From Python, Javascript and
      C++; to English, French and Russian.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            HTML5 | CSS3 | Javascript
            <br />
            Reactjs | Nextjs <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend-end</ListTitle>
          <ListParagraph>
            Python | Django <br />
            Sql <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaLanguage size="3rem" />
        <ListContainer>
          <ListTitle>Spoken Languages</ListTitle>
          <ListParagraph>
            English
            <br />
            French <br />
            Russian <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
