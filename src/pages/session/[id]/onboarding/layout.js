import React from 'react';
import { Outlet } from 'react-router';

export function OnboardingLayout() {
  return (
    <div className="splash dark">
      <Outlet />
    </div>
  )
}

export default OnboardingLayout;