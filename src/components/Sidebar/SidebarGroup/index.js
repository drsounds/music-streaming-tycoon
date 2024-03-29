import React from 'react';


export function SidebarGroup({
  children,
  name,
  ...props
}) {
  return (
    <div className="sidebar-group" {...props}>
      <div className="sidebar-group-title">{name}</div>
      <div className="sidebar-group-items">{children}</div>
    </div>
  )
}