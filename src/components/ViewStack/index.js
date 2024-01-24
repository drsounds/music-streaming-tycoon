import React from 'react';

export function ViewStack({
  children
}) {
  return (
    <div className="flex flex-col" style={{ flex: 1 }}>
      <div className="flex flex-row">

      </div>
      <div style={{ flex: 1, overflow: 'scroll' }}>
        {children}
      </div>
    </div>
  )
}