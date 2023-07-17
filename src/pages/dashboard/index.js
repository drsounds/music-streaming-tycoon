import React, { useEffect } from 'react';

import { useNavigate } from 'react-router';

export function DashboardIndexPage() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(`./overview`)
  }, [])
  return (
    <div></div>
  )
}