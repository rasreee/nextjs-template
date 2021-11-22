import React from 'react';
import styled from 'styled-components';

interface BaseAnchorProps {
  href?: string;
  title?: string;
}

interface InternalAnchorProps extends BaseAnchorProps {
  type?: 'internal';
}
interface ExternalAnchorProps extends BaseAnchorProps {
  type: 'external';
}

export type AnchorProps = InternalAnchorProps | ExternalAnchorProps;

export const Anchor = ({
  type = 'internal',
  children,
  ...props
}: React.PropsWithChildren<AnchorProps>) => {
  const extraProps = type === 'external' ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <AnchorContainer {...extraProps} {...props}>
      {children}
    </AnchorContainer>
  );
};

const AnchorContainer = styled.a``;
