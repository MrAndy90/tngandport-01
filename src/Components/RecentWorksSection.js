import React from "react";
import styled from "styled-components";
//import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import { InnerLayout } from "../styles/Layouts";
import ReviewItem from "./ReviewItem";
import FootballFlyer from "../img/FootballFlyer21.png";

function ReviewsSection() {
  return (
    <ReviewStyled>
      <Title title={"Recent Works"} span={"Recent Works"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            as="a"
            text={"Using WordPress, Currently maintaining & updating"}
            text2={"BTS Sport"}
            link="https://www.btssport.be/"
          />
          <ReviewItem
            text={"A recent flyer, to help support a local football team"}
            text2={"Sint-Jozef Voetbalstage"}
            link={FootballFlyer}
            className="reviews"
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
    h3 {
      color: #007bff;
      margin: 0.2rem;
      font-size: 1.5rem;
      font-weight: 1000;
    }
  }
`;

export default ReviewsSection;
