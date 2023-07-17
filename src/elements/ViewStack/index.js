import React from 'react';
import { Outlet } from 'react-router';

export function ViewStack({
  children
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">

      </div>
      <div style={{ flex: 1, overflow: 'scroll' }}>
        <Outlet />
      </div>
    </div>
  )
}