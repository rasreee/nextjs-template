import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps {
  children: React.ReactNode;
}

export const NextLink = ({ href, children, ...props }: Props) => {
  return (
    <Link href={href} {...props}>
      <a>{children} </a>
    </Link>
  );
};
