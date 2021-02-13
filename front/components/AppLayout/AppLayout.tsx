import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <>
      <div>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/profile">
          <a>PROFILE</a>
        </Link>
        <Link href="/signup">
          <a>SIGN UP</a>
        </Link>
      </div>
      <div>{children}</div>
    </>
  );
}

export default AppLayout;
