import { Anchor, Icon } from '@atoms';

export const SocialIcons: React.FC = () => {
  return (
    <SSocialIcons>
      <Anchor href="https://www.linkedin.com/company/ijan" title="LinkedIn">
        <Icon name="linkedin" />
      </Anchor>
    </SSocialIcons>
  );
};

import styled from 'styled-components';

const SSocialIcons = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
