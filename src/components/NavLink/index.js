import React, { useMemo } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

export function NavLink({
  children,
  href,
  ...props
}) {
  const router = useRouter()
  const isActive = useMemo(() => router.asPath.indexOf(href) === 0, [href, location])

  return (
    <NextLink
      className={`nav-link${isActive ? ' nav-link-active' : ''}`}
      href={href}
      {...props}
    >
      {children}
    </NextLink>
  )
}