import { Box } from '@atoms';

import { SocialIcons } from './SocialIcons';
import { Flex, FooterContainer } from './styled';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Box>
        <Flex>
          <span>&copy; {new Date().getFullYear()} iJan</span>
          <SocialIcons />
        </Flex>
      </Box>
    </FooterContainer>
  );
};
