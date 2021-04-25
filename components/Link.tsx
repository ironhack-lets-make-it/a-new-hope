import NextLink from "next/link";
import { FC } from "react";

interface LinkProps {
  href: string;
}

export const Link: FC<LinkProps> = ({ children, href }) => {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};
