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
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 10
      }}
    >
      <Icon size={28} />
      <span className="sidebar-nav-link-title">
        {children}
      </span>
    </NavLink>
  )
}