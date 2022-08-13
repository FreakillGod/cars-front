import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../responsive";
import "react-calendar/dist/Calendar.css";
import { Marginer } from "../marginer";
import { Button } from "../button";
import Calendar from "react-calendar";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative`};
`;

const Icon = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `};
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

const BookCard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalenderOpen, setIsStartCalenderOpen] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [isEndClalendarOpen, setIsEndClalendarOpen] = useState(false);

  console.log("startDate", startDate);

  const toggleStartDateCal = () => {
    setIsStartCalenderOpen(!isStartCalenderOpen);
    if (setIsEndClalendarOpen) {
      setIsEndClalendarOpen(false);
    }
  };
  const toggleEndDateCal = () => {
    setIsEndClalendarOpen(!isEndClalendarOpen);
    if (setIsStartCalenderOpen) {
      setIsStartCalenderOpen(false);
    }
  };
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCal}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalenderOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalenderOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleEndDateCal}>Returen Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isEndClalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isEndClalendarOpen && (
          <DateCalendar offset value={endDate} onChange={setEndDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin={"2em"} />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};

export default BookCard;
