import React from "react";
import styled from "styled-components";

function ReviewItem({ text, text2, link }) {
  return (
    <ReviewItemStyled target="_blank" href={link} download>
      <p>{text}</p>
      <h3>{text2}</h3>
    </ReviewItemStyled>
  );
}

const ReviewItemStyled = styled.a`
  cursor: pointer;
  padding: 1rem 1rem;
  border-left: 6px solid var(--border-color);
  background-color: var(--background-dark-grey);
  position: relative;
  width: 100%;
  &:not(:first-child) {
  }
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    border-width: 0.8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-grey) transparent transparent
      var(--background-dark-grey);
  }
  p {
    padding: 0.6 0rem;
  }
`;

export default ReviewItem;
