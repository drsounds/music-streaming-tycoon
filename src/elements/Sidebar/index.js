import React from 'react';

export function Sidebar({
  children,
  ...props
}) {
  return (
    <div className="sidebar" {...props}>
      {children}
    </div>
  )
}