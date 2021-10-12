import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import Language from "@material-ui/icons/Language";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2}>
                      <Language />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.1rem;
        color: white;
      }
      img {
        width: 100%;
        height: 23vh;
        object-fit: cover;
      }
      ul {
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 30%;
        opacity: 0;
        li {
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }

      .portfolio-image {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 2%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .portfolio-image:hover {
        ul {
          transform: translateY(0);
          display: flex;
          transform: translate(-50%, -50%);
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            background-color: var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            border-radius: 60%;
            width: 3.2rem;
            height: 3.2rem;
            margin: 0 0.5rem;
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }

          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2.5rem;
          }
        }
        &::before {
          height: calc(100% - 33%);
          width: calc(100% - 4%);
          background-color: white;
          opacity: 0.9;
          transform-origin: 0;
          transform-origin: left;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;

export default Menu;
