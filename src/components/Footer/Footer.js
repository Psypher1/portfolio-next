import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:263774755572">+263 77 475 5572</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jamesmidzi@gmail.com">
            jamesmidzi@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> À Petits Pas J'irai Très Loin</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/psypher1" target="_blank">
            <AiFillGithub size="2.7rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/psypher1" target="_blank">
            <AiFillTwitterCircle size="2.7rem" />
          </SocialIcons>
          <SocialIcons
            href="https://linkedin.com/in/jamesmidzi"
            target="_blank"
          >
            <AiFillLinkedin size="2.7rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
