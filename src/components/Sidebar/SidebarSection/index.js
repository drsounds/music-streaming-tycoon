import React from 'react';


export function SidebarSection({
  children,
  name,
  ...props
}) {
  return (
    <div className="sidebar-section" {...props}>
      {children}  
    </div>
  )
}