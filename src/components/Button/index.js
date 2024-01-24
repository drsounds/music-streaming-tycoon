import React from 'react';

export function Button({
  variant,
  color,
  children,
  ...props
}) {
  return (
    <button className={`btn btn-${variant} btn-${color}`} {...props}>{children}</button>
  )
}