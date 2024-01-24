import React, { createContext } from 'react';

export function Sidebar({
  children,
  expanded,
  ...props
}) {
  return (
    <div className={`sidebar ${expanded ? 'sidebar-expanded' : ''}`} {...props}>
      {children}
    </div>
  )
}