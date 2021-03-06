import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import ReviewsSection from "../Components/RecentWorksSection";
import ServicesSection from "../Components/ServicesSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
