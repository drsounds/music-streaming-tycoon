import React, { useMemo } from 'react';

import { Link, useLocation } from 'react-router-dom';

export function NavLink({
  children,
  href,
  ...props
}) {
  const location = useLocation()
  const isActive = useMemo(() => location.pathname.indexOf(href) === 0, [href, location])

  return (
    <Link
      className={`nav-link nav-link-${isActive}`}
      href={props.href}
      {...props}
    >
      {children}
    </Link>
  )
}