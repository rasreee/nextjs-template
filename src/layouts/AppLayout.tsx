import { Box } from '@atoms';
import styled from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AppLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Container>
  );
};
