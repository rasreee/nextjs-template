import { BrandColor } from '@styles/theme';
import React, { FC } from 'react';
import styled from 'styled-components';

import { Close, LinkedIn, Menu } from './assets';

export const ICON_NAMES = ['close', 'linkedin', 'menu'];

export type IconName = typeof ICON_NAMES[number];

export const ICONS: Record<IconName, any> = {
  linkedin: LinkedIn,
  menu: Menu,
  close: Close
};

export interface IconProps {
  name: IconName;
  color?: BrandColor;
  size?: number;
}

export const Icon: FC<IconProps> = ({ name, color = 'text', size = 24 }) => {
  const Svg = ICONS[name];

  return (
    <SvgContainer size={size} brandColor={color}>
      <Svg />
    </SvgContainer>
  );
};

const SvgContainer = styled.div<{ size: number; brandColor: BrandColor }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;

  color: ${({ theme, brandColor }) => theme.brand[brandColor]};

  & svg {
    height: ${({ size }) => `${size}px`};
    width: ${({ size }) => `${size}px`};
  }
`;
