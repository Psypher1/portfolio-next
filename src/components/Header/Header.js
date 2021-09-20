import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { BiNetworkChart } from "react-icons/bi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1 style={{ paddingLeft: "10px" }}>
      <Link href="#">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <BiNetworkChart size="2.5rem" /> <Span>James Midzi</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://github.com/psypher1"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillGithub size="2.5rem" />
      </SocialIcons>
      <SocialIcons
        href="https://twitter.com/psypher1"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillTwitterCircle size="2.5rem" />
      </SocialIcons>
      <SocialIcons
        href="https://linkedin.com/in/jamesmidzi"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillLinkedin size="2.5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
