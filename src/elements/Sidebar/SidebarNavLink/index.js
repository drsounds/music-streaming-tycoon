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
      href={href}
      {...props}
    >
      <Icon size={28} />
      <span className="sidebar-nav-link-title">
        {children}
      </span>
    </NavLink>
  )
}