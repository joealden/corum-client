import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const App = () => (
  <div>
    <p>Placeholder</p>
  </div>
);

const AppWrapper = styled.div`
  color: red;
  background-color: #44;
`;

export default withRouter(App);
