export const Brand = () => {
  return (
    <BrandContainer>
      <Image src="/images/brand.png" />
    </BrandContainer>
  );
};

import styled from 'styled-components';

const Image = styled.img`
  height: 2rem;
  width: 2rem;
`;

const BrandContainer = styled.div`
  padding: 0.5rem;
`;
