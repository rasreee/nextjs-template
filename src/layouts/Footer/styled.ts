import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2rem 0;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
