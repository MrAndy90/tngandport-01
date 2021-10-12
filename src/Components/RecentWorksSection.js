import React from "react";
import styled from "styled-components";
//import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import { InnerLayout } from "../styles/Layouts";
import ReviewItem from "./ReviewItem";

function ReviewsSection() {
  return (
    <ReviewStyled>
      <Title title={"Recent Works"} span={"Recent Works"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={"Currently maintaining & updating www.btssport.be"}
            href={"https://www.btssport.be/"}
          />
          <ReviewItem
            text={
              "A recent flyer, to help support a local football team 'Sint-Jozef Flyer'"
            }
            href={"https://www.svsintjozef.be/"}
          />
        </div>
      </InnerLayout>
    </ReviewStyled>
  );
}

const ReviewStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ReviewsSection;
