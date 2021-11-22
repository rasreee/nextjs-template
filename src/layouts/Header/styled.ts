import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.palette.gray[2]};
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      color: ${({ theme }) => theme.brand.headline};
    }
  }
`;

export const Desktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Mobile = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
