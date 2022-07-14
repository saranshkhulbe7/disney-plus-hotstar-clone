import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg
        src="data:image/jpeg;base64,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"
        alt="profile-image"
      />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        border-radius: 4px;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
