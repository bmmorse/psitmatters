import React from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const DIV_WRAPPER = styled.div`
  align-items: center;
  display: flex;
  height: 560px;
  justify-content: center;
  position: relative;
  width: 100%;

  &.preload {
    background: white;
    background-position: center;

    &::after {
      display: none;
    }
  }

  &.loaded {
    background: url('https://www.psitmatters.com/wp-content/uploads/2020/11/tucker-tangeman-SnXraH8PaQ4-unsplash-scaled.jpg')
      no-repeat;
    background-position: center;
    background-size: cover;

    &::after {
      background: linear-gradient(0deg, #00000092 30%, #00000064 100%);
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @media (min-width: 1000px) {
    height: 540px;
  }

  @media (min-width: 1600px) {
    height: 600px;
  }
`;

const H1_BANNER = styled.h1`
  color: #ffffff;
  font-family: 'ProxBold';
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  bottom: 120px;
  z-index: 10;
  width: 340px;
  transition: all 400ms ease;

  &.loaded {
    color: #ffffff;
    opacity: 1;
  }

  &.preload {
    opacity: 0;
  }

  @media (min-width: 500px) {
    font-size: 40px;
    width: 500px;
  }

  @media (min-width: 800px) {
    width: 500px;
    bottom: 50px;
    font-size: 40px;
  }

  @media (min-width: 1000px) {
    width: 770px;
    bottom: 0px;
    font-size: 64px;
  }
`;

const DIV_TEXT = styled.div`
  background: linear-gradient(transparent, hsla(0, 100%, 100%, 0.4));
  width: 100%;
  z-index: 50;
  position: absolute;
  bottom: 0px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset;
  //   rgba(50, 50, 93, 0.25) 0px 50px 60px -20px,
  //   rgba(0, 0, 0, 0.3) 0px 30px 20px -30px;

  padding: 20px 5px;

  @media (min-width: 1400px) {
    padding: 0;
  }
`;

const animateItem = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }

  75% {
    transform: scale(1.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const UL_NUMBERS = styled.ul`
  display: grid;
  gap: 40px 10px;
  grid-template-columns: 1fr 1fr;
  min-height: 261px;
  width: 100%;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 134px;
  }

  @media (min-width: 1400px) {
    min-height: 147px;
    display: flex;
  }

  li {
    text-align: center;
    flex: 1 1 30%;
    opacity: 0;

    &.animate {
      animation: ${animateItem} 500ms ease forwards;
    }

    &:hover {
      h3 {
        color: #ffffff !important;
      }
    }

    @media (min-width: 1400px) {
      padding: 50px 0;
      flex: 0 1 100%;
    }

    p {
      color: #ffffff92;
    }

    h3 {
      color: #00bbea;
      font-size: 24px;
      transition: all ease 300ms;

      @media (min-width: 400px) {
        h3 {
          font-size: 32px;
        }
      }
    }
  }
`;

export default function Banner() {
  const animateNumbersRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // Background Fade In
    const img = new Image();
    img.src =
      'https://www.psitmatters.com/wp-content/uploads/2020/11/tucker-tangeman-SnXraH8PaQ4-unsplash-scaled.jpg';
    img.onload = () => {
      document.fonts.ready.then(() => {
        wrapperRef.current.classList.remove('preload');
        wrapperRef.current.classList.add('loaded');
        wrapperRef.current.children[0].classList.remove('preload');
        wrapperRef.current.children[0].classList.add('loaded');
      });
    };
  }, []);

  React.useEffect(() => {
    axios.get('/api/ps').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  React.useEffect(() => {
    console.log('effect update');
    if (data.length > 0) {
      function createTimer(child, delay) {
        return setTimeout(() => {
          animateNumbersRef.current.children[child].classList.add('animate');
        }, delay);
      }
      createTimer(0, 500);
      createTimer(1, 1000);
      createTimer(2, 1500);
      createTimer(3, 2000);
      createTimer(4, 2500);
      createTimer(5, 3000);
    }
  }, [data]);

  return (
    <DIV_WRAPPER ref={wrapperRef} className='preload'>
      <H1_BANNER className='preload'>
        Everyday choices can change the world.
      </H1_BANNER>
      <DIV_TEXT>
        <UL_NUMBERS ref={animateNumbersRef}>
          {data.length > 0 &&
            data.map((property) => {
              return (
                <li key={property.title}>
                  <h3>{property.value}</h3>
                  <p>{property.title}</p>
                </li>
              );
            })}
        </UL_NUMBERS>
      </DIV_TEXT>
    </DIV_WRAPPER>
  );
}
