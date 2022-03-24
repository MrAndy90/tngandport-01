import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/avatar.jpg";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="about">
          <NavLink to="/about" activeClassName="active-class" exact>
            About Me
          </NavLink>
        </li>{" "}
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active-class" exact>
            Projects
          </NavLink>
        </li>{" "}
        <li className="nav-item"></li>{" "}
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact Me
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>(Work in Progress) @2022 Mr Andy </p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 0.5rem 0;
    img {
      margin-left: 0;
      margin-top: 15px;
      width: 75%;
      height: 90%;
      border-radius: 50%;
      border: 6px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(0.87, 0.02, 0.13, 0.7);
          z-index: -1;
          opacity: 0.21;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1rem 0;
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

export default Navigation;
