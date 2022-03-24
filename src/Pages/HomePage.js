import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIconIcon from "@material-ui/icons/GitHub";
import Particle from "../Components/Particles";
import Typewriter from "typewriter-effect";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h2>Hi, My Name is</h2>
        <h1>Andy Allen</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("He's a great guy!")
              .pause(3000)
              .deleteAll()
              .typeString("A master in WordPress")
              .pause(3000)
              .deleteAll()
              .typeString("A frontend React JS Developer")
              .start();
          }}
        ></Typewriter>
        <div className="icons">
          <a
            href="https://www.linkedin.com/uas/login-submit"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/MrAndy90"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-github"
          >
            <GithubIconIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 0.4rem;
        }
        svg {
          margin: 0.4rem;
        }
      }

      .i-github {
        &:hover {
          border: 2px solid purple;
          color: purple;
        }
      }
    }
  }
`;

export default HomePage;
