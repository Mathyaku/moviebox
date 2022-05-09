import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  height: 8rem;

  background-color: var(--black-10);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    nav {
      padding: 2rem 12rem;
    }
  }
`;

export const Link = styled(NavLink)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 2%;
  font-weight: 500;
  color: var(--gray-50);
  &:hover {
    color: var(--primary);
  }
`;

export const PageTitle = styled.h1`
  margin: 4rem 2rem;
  font-size: 6.4rem;
  line-height: 8rem;
  color: var(--gray-50);

  @media (min-width: 768px) {
    margin: 4rem 12rem;
  }
`;

export const Main = styled.main`
  height: 100vh;

  @media (min-width: 768px) {
    display: grid;
    grid-template-column: repeat(4, auto);
    gap: 2.4rem;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;

  li {
    list-style-type: none;
    margin: 2.4rem;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-column: repeat(4, auto);
    gap: 2rem;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export const NavigationButton = styled.button<{ disabled: boolean }>`
  width: 15rem;
  height: 3.6rem;
  border: 0;
  border-radius: 8px;
  background-color: var(--primary);
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: var(--white);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  &:hover {
    filter: brightness(0.8);
  }
`;
