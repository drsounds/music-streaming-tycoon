import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export function OnboardingIndexPage() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(`./step1`)
  }, [])
  return <></>
}

export default OnboardingIndexPage;