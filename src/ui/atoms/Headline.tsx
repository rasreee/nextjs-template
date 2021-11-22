import styled from 'styled-components';
export const Headline = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;

  span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
