import React from 'react';

import { useNavigate } from 'react-router-dom'; 
import { Button } from '../../elements/Button';
import { createNewGame } from '../../actions/game';
import { useGame } from '../../hooks/game';

export function SessionsPage() {
  const navigate = useNavigate()
  const game = useGame()
  const handleCreateNewGame = (number) => {
    const session = createNewGame(number)
    navigate(`../session/${session.id}/onboarding`)
  }
  if (!game) {
    return (
      <div>Error</div>
    )
  }
  return (
    <div className="splash dark" style={{ alignItems: 'stretch', textAlign: 'center', padding: '10pt'}}>
      <h1>Select a save</h1>
      {[0, 1, 2].map(i => {
        const session = game.sessions[i]
        if (session) {
          return (
            <Button key={`${i}`} variant="bordered" onClick={() => navigate(`../session/${session.slug}/dashboard`)}>{i + 1}. {session.user.name}</Button>
          )
        } else {
          return (
            <Button key={`${i}`} variant="bordered" onClick={() => handleCreateNewGame(i)}>{i + 1}. No save</Button>
          )
        }
      })}
    </div>
  )
}