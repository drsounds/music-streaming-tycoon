import React from 'react';

import { NavLink } from '../../NavLink';
import { Cube } from 'phosphor-react';

export function SidebarNavLink({
  href,
  Icon=Cube,
  children,
  ...props
}) {
  return (
    <NavLink
      Icon={Cube}
      href={href}
      {...props}
    >
      {children}
    </NavLink>
  )
}