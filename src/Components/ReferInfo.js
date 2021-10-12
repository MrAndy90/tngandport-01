import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";

function ReferInfo() {
  return (
    <ReferInfoStyled>
      <MainLayout>
        <Title title={"References"} span={"References"} />
        <InnerLayout></InnerLayout>
      </MainLayout>
    </ReferInfoStyled>
  );
}

const ReferInfoStyled = styled.section``;

export default ReferInfo;
