import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import TopNav from './TopNav';
import IntroText from './IntroText';

const DIV_WRAPPER = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export default function Form() {
  const figures = [
    ['$4,769,933', 'Program Donations'],
    ['31,851', 'Non-Profits Supported'],
    ['$93,937', 'Donations This Month'],
    ['7,439', 'Hunger Org. Supported'],
    ['19,716,115', 'Meals Provided*'],
    ['139,732,470', 'Single-Use Bags Not Used*'],
  ];

  return (
    <DIV_WRAPPER>
      <TopNav />
      <Banner />
      <IntroText />
    </DIV_WRAPPER>
  );
}
