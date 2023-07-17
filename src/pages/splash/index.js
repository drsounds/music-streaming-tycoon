import React from 'react';

import { t } from 'i18next';

import { useNavigate } from 'react-router-dom'; 
import { Button } from '../../elements/Button';
import { createNewGame } from '../../actions/game';

export function SplashPage() {
  const navigate = useNavigate()
  const pressStart = () => {
    navigate('./sessions');
  }
  const handleStartClick = (event) => {
    event.preventDefault()
    pressStart()
    return false
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    pressStart()
    return false
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="splash dark">
        <h1>Music Streaming Tycoon</h1>
        <div style={{ height: '30%' }} />
        <Button variant="filled" onClick={handleStartClick}>Press start</Button>
      </div>
    </form>
  )
}