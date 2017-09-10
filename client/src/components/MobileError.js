import React from "react";
import styled from "styled-components";
import corumLogo from "../images/logo.svg";

const MobileError = () => (
  <MobileStyle>
    <img style={{ width: 230 }} src={corumLogo} alt="corum" />
    <p>Sorry, Corum doesn't yet support mobile, please visit on a desktop!</p>
  </MobileStyle>
);

const MobileStyle = styled.div`
  display: none;
  height: 100vh;
  width: 100vw;

  @media only screen and (max-width: 1000px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default MobileError;
