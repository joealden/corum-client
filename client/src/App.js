import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import corumLogo from "./logo.svg";
import loadingSpinner from "./loading.svg";

const App = () => (
  <GridLayout>
    <Logo>
      <a href="/">
        <img style={{ width: 120 }} src={corumLogo} alt="corum" />
      </a>
    </Logo>
    <Header>
      <Button href="signup">Sign-Up</Button>
      <Button href="login">Login</Button>
    </Header>
    <Nav>Navigation</Nav>
    <MainContent>
      <img src={loadingSpinner} alt="loading" />
    </MainContent>
    <FooterLeft>
      <SocialMediaCircle />
      <SocialMediaCircle />
      <SocialMediaCircle />
    </FooterLeft>
    <FooterRight>
      <p>
        Made by <a href="https://github.com/joealden">joealden</a>
      </p>
    </FooterRight>
  </GridLayout>
);

const GridLayout = styled.div`
  margin: 0 auto;
  display: grid;
  height: 100vh;
  width: 100vw;
  text-align: center;
  grid-template-rows: 80px auto 80px;
  grid-template-columns: 330px auto;
  grid-template-areas: "logo header" "nav main" "footer-left footer-right";

  > header {
    font-size: 25px;
  }
  > footer {
    font-size: 19px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: header;
  background-color: #c0c0c0;
  border-bottom: 2px solid black;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: logo;
  background-color: #c0c0c0;
  border-bottom: 2px solid black;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: nav;
  background-color: #dbdbdb;
  border-right: 2px solid black;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: main;
  background-color: #ededed;
`;

const FooterLeft = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: footer-left;
  background-color: #c0c0c0;
  border-top: 2px solid black;
`;

const FooterRight = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: footer-right;
  background-color: #c0c0c0;
  border-top: 2px solid black;
  padding-right: 30px;

  > p > a,
  > p > a:visited {
    color: blue;
    text-decoration: none;
  }
  > p > a:hover {
    color: blue;
    text-decoration: underline;
  }
`;

const Button = styled.a`
  @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro');
  font-family: "Anonymous Pro", monospace;
  background: #222;
  color: white;
  border-radius: 10px;
  margin-right: 25px;
  text-decoration: none;
  padding: 8px 12px 7px 12px;
  border: none;
  text-transform: uppercase;
`;

const SocialMediaCircle = styled.span`
  height: 50px;
  width: 50px;
  background-color: #999;
  border: 2px solid black;
  border-radius: 50%;
`;

export default withRouter(App);
