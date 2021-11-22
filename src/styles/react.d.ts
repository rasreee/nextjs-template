import { CSSProp } from 'styled-components';

import { Theme } from './theme';

declare module 'react' {
  interface Attributes {
    css?: CSSProp<Theme>;
  }
}
