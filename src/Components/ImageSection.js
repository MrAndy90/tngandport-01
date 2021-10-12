import React from "react";
import styled from "styled-components";
import AbMe from "../img/AbMe.jpg";
import PrimaryButton from "./PrimaryButton";
import cvuk from "../img/AA-CV-EN.pdf";
import cvnl from "../img/AA-CV-NL.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={AbMe} alt="" />
      </div>
      <div className="right-content">
        <h4>
          Hello, My Name is <span>Andy Allen</span>
        </h4>
        <p className="paragraph">
          A passionate React JS Frontend Developer, with a background in Graphic
          Design. My expertise is to create & design alluring practical fully
          responsive websites to suit your needs.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Name</p>
            <p>DOB</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>Andy Allen</p>
            <p>10th April 1979</p>
            <p>British, Belgian</p>
            <p>English, Dutch</p>
            <p>Antwerp, Belgium</p>
            <p>React js Web Developer</p>
          </div>
        </div>
        <div className="cv-uk-button">
          <PrimaryButton
            src={cvuk}
            alt="cvuk"
            href={cvuk}
            download="AA-CV-EN.pdf"
            title={"Download CV (ENG)"}
            className="cv-uk-button"
          />
        </div>
        <div className="cv-nl-button">
          <PrimaryButton
            href={cvnl}
            download="AA-CV-NL.pdf"
            title={"Download CV (nl)"}
          />
        </div>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 2.5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 93%;
    img {
      width: 90%;
      height: 100%;
    }
  }
  .right-content {
    width: 100%;

    .cv-uk-button {
      padding: 0.3rem;
      margin: 0.1rem;
    }
    .cv-nl-button {
      padding: 0.3rem;
      margin: 0 0.6rem;
    }
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--primary-color);
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.8rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
