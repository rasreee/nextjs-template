import { Icon } from '@atoms';
import { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { Navigation } from './Navigation';

export const MobileNavigation: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      <MobileNavigationContainer>
        <li>
          <Menu onClick={toggle}>
            <Icon name={isOpen ? 'close' : 'menu'} />
          </Menu>
        </li>
      </MobileNavigationContainer>
      <Overlay css={isOpen ? OverlayCssOpen : OverlayCssDefault}>
        <Navigation onClick={() => setOpen(false)} />
      </Overlay>
    </>
  );
};

const OverlayCssDefault = css`
  opacity: 0;
  pointer-events: none;
  top: -50%;
`;

const OverlayCssOpen = css`
  opacity: 1;
  pointer-events: auto;
  top: 0;
`;

const MobileNavigationContainer = styled.ul`
  display: flex;

  li {
    width: 2rem;
    margin: 1rem;
  }
`;

const Menu = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.brand.text};
  position: absolute;
  z-index: 100;

  &:hover {
    color: ${({ theme }) => theme.brand.headline};
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background: ${({ theme }) => theme.brand.body};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  z-index: 10;
`;
