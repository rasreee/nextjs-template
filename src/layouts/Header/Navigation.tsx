import Link from 'next/link';
import styled from 'styled-components';

interface NavLink {
  name: string;
  url: string;
}

const navLinks: NavLink[] = [
  {
    name: 'Login',
    url: '/login'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Contact',
    url: '/contact'
  }
];

interface NavigationProps {
  onClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onClick }) => {
  return (
    <NavigationContainer>
      <List>
        {navLinks.map((navLink) => (
          <li key={navLink.name}>
            <Link href={navLink.url}>
              <a onClick={onClick}>{navLink.name.toLocaleUpperCase()}</a>
            </Link>
          </li>
        ))}
      </List>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.nav``;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  line-height: 2;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  .desktop-only {
    display: none;
  }

  & > li a {
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.brand.text};
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.brand.headline};
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.normal};

    .desktop-only {
      display: block;
    }
  }
`;
