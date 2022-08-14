import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../components/bookCard";
import Footer from "../components/footer";
import { Marginer } from "../components/marginer";
import NavContainer from "../components/navbar";
import AboutUs from "./HomePage/AboutUs";
import BoookingSteps from "./HomePage/BoookingSteps";
import TopCards from "./HomePage/TopCards";
import Topsection from "./HomePage/Topsection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <NavContainer />
      <Topsection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BoookingSteps />
      <Marginer direction="vertical" margin="5em" />
      <AboutUs />
      <Marginer direction="vertical" margin="5em" />
      <TopCards />
      <Footer/>
    </PageContainer>
  );
}
