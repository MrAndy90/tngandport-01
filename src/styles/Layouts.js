import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;
  @media screen and (max-width: 680px) {
    padding: 4rem;
  }
  //@media screen and (max-width: 540px) {
  //padding: 3rem;
  //}
  @media screen and (max-width: 580px) {
    padding: 2rem 0.4rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
