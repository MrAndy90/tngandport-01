import React from "react";
import styled from "styled-components";

function Title({ title, span }) {
  return (
    <TitleStyled>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.1rem;
    @media screen and (max-width: 480px) {
      font-size: 2.3rem;
    }
    @media screen and (max-width: 380px) {
      font-size: 2rem;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.5rem;
      height: 0.33rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: 0.33rem;
      background-color: var(--primary-color);
      border-radius: 15px;
      left: 0;
    }
    span {
      font-weight: 900;
      color: rgba(25, 29, 43, 0.44);
      font-size: 4.2rem;
      position: absolute;
      left: 0;
      top: 30%;
      z-index: -1;
      @media screen and (max-width: 620px) {
        font-size: 3.5rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 380px) {
        font-size: 1.8rem;
      }
    }
  }
`;

export default Title;
