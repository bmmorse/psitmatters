import React from 'react';
import styled from 'styled-components';

const DIV_WRAPPER = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  padding: 100px 12% 100px 12%;
  grid-template-columns: 1fr;
  gap: 40px 0px;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 0 160px;
  }

  p {
    font-size: 23px;
    line-height: 1.5;
    width: 100%;
    color: #292929;

    span {
      font-size: inherit;
      font-family: 'ProxBold';

      &.company {
        color: #00bbea;
      }

      &.retail {
        color: #ffa86b;
      }
    }
  }
`;
export default function IntroText() {
  return (
    <DIV_WRAPPER>
      <p>
        <span className='company'>PS IT MATTERS</span> partners with retailers
        to create profitable, mission-driven initiatives in which a portion of
        every business transaction gives back to a local, community non-profit.
      </p>

      <p>
        Our initiatives are currently successfully deployed in over
        <span className='retail'> 2,000+ retail locations</span> across the
        country. From reusable bags to floral bouquets, we are on a mission to
        change the world through everyday choices.
      </p>
    </DIV_WRAPPER>
  );
}
