import React, { useEffect } from 'react';

import { useNavigate } from 'react-router';
import { createNewGame } from '../../../../actions/game';

export function DashboardIndexPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const session = createNewGame()
    navigate(`./session/${session.slug}/dashboard`)
  }, [])
  return (
    <div></div>
  )
}