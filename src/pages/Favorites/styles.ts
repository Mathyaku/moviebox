import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 8rem;
  padding: 2rem;

  background-color: var(--black-10);
  backdrop-filter: blur(40px);

  svg {
    color: var(--gray-50);
    cursor: pointer;
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
