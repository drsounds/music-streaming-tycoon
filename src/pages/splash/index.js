import React from 'react';

import { t } from 'i18next';

import { useNavigate } from 'react-router-dom'; 
import { Button } from '../../elements/Button';

export function SplashPage() {
  const navigate = useNavigate()
  const handleNewGameClick = (event) => {
    event.preventDefault()
    navigate(`/dashboard`);
  }
  return (
    <div className="flex flex-column items-center justify-center">
      <h1>Music Streaming Tycoon</h1>

      <Button onClick={handleNewGameClick}>{t('New Game')}</Button>
    </div>
  )
}