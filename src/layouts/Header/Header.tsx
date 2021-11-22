import { Box, Brand } from '@atoms';
import Link from 'next/link';

import { MobileNavigation } from './MobileNavigation';
import { Navigation } from './Navigation';
import { Container, Desktop, Mobile } from './styled';

export const Header = () => {
  return (
    <header>
      <Box>
        <Container>
          <Link href="/">
            <a>
              <Brand />
            </a>
          </Link>
          <Desktop>
            <Navigation />
          </Desktop>
          <Mobile>
            <MobileNavigation />
          </Mobile>
        </Container>
      </Box>
    </header>
  );
};
