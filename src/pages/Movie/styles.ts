import styled from "styled-components";

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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

export const BackdropPoster = styled.img`
  height: 30rem;
  width: 45rem;

  margin: 2rem auto;
  object-fit: cover;
  border-radius: 24px;

  @media (max-width: 1100px) {
    width: 100%;
    object-fit: contain;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MoviePoster = styled.img`
  width: 40rem;
  border-radius: 12px;
  object-fit: cover;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Details = styled.div`
  margin: 4rem auto;

  h4 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: var(--gray-50);
  }

  p {
    margin: 1rem 0;
    font-size: 2rem;
    line-height: 3.2rem;
    color: var(--gray-300);
  }

  @media (min-width: 1023px) {
    display: flex;
    justify-content: space-evenly;
    gap: 4rem;

    div {
      padding: 2rem;
      max-width: 70rem;
    }
  }
`;

export const Rate = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;

  margin: 1rem 0;

  width: 9rem;
  height: 4rem;

  border-radius: 8px;
  background-color: var(--black-65);

  span {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--warning);
  }

  svg {
    color: var(--warning);
  }
`;

export const TechnicalDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    &:not(:first-child) {
      margin: 2rem 0;
    }

    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--gray-400);

    strong {
      display: block;
      font-size: 2rem;
      line-height: 3.2rem;
      color: var(--gray-300);
    }
  }
`;
