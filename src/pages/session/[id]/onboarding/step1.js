import React, { useState } from 'react';
import { setCurrentSessionName } from '../../../../actions/game';
import { useNavigate } from 'react-router';
import { Button } from '../../../../elements/Button';

export function OnboardingStep1Page() {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    setCurrentSessionName(name)
    navigate(`../../dashboard`)
    return false
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 13 }}>
      <input
        className="form-control"
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      />
      <Button
        type="submit"
        variant="filled"
      >
        Start game
      </Button>
    </form>
  )
}

export default OnboardingStep1Page;