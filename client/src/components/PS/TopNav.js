import React from 'react';
import styled from 'styled-components';

const DIV_WRAPPER = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

const DIV_TOPNAV = styled.div`
  align-items: center;
  background: white;
  display: flex;
  width: 100%;
  justify-content: center;

  @media (min-width: 800px) {
    max-height: 100px;
    justify-content: space-between;
    padding: 20px 5%;
  }

  img {
    margin: 20px 0;
    height: 50px;
    @media (min-width: 800px) {
      height: 60px;
    }
  }

  ul {
    display: none;

    @media (min-width: 800px) {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 460px;
    }

    li {
      color: #2b2b2b;
      transition: all ease 200ms;
      padding: 20px 0;
      width: 100%;
      text-align: center;

      &:nth-child(1) {
        color: #00bbea;
      }
      &:nth-child(2) {
        color: #ffa86b;
      }
      &:nth-child(3) {
        color: #53ced1;
      }
      &:nth-child(4) {
        color: #94a5d8;
      }

      &:hover {
        color: #8c8c8c;
      }
    }
  }
`;

export default function TopNav() {
  return (
    <DIV_WRAPPER>
      <DIV_TOPNAV>
        <img
          src='https://www.psitmatters.com/wp-content/uploads/2020/11/cropped-PSIM-Logo-Full-RGB-lg-1.png'
          alt=''
        />
        <ul>
          <li>About</li>
          <li>Initiatives</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </DIV_TOPNAV>
    </DIV_WRAPPER>
  );
}
