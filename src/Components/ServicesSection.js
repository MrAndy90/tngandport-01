import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ServiceCard from "../Components/ServiceCard";
import Title from "../Components/Title";
import design from "../img/design.png";
import Gears from "../img/Gears.png";
import GraphicDes from "../img/GraphicDes.png";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={"Let me create a truly captivating, modern website."}
          />
          <div className="mid-card">
            <ServiceCard
              image={Gears}
              title={"Web Development"}
              paragraph={
                "All sites are fully responsive using styled components."
              }
            />
          </div>
          <ServiceCard
            image={GraphicDes}
            title={"Graphic Design"}
            paragraph={"Adobe certified specialist in Illustrator & Photoshop"}
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
