import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import {HomePage} from "./app/containers/";

const AppConatiner = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;
function App() {
  return (
    <AppConatiner>
      <HomePage />
    </AppConatiner>
  );
}

export default App;
