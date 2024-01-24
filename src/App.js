import React, { useEffect } from 'react';

import { Routes, Route, Outlet } from 'react-router';

import {Provider} from 'react-redux';

import './App.css';
import InboxPage from './pages/session/[id]/dashboard/inbox';
import { SplashPage } from './pages/splash';
import { DashboardLayout } from './pages/session/[id]/dashboard/layout';
import store from './stores/game'
import { PersistGate } from 'redux-persist/integration/react';

import { persistStore } from 'redux-persist';
import { SessionLayout } from './pages/session/[id]/layout';
import { SessionsPage } from './pages/sessions';
import { OnboardingLayout } from './pages/session/[id]/onboarding/layout';
import OnboardingIndexPage from './pages/session/[id]/onboarding';
import OnboardingStep1Page from './pages/session/[id]/onboarding/step1';

const persistor = persistStore(store)   

function App() {
  const theme = 'light';
  useEffect(() => {
    document.body.classList.add(theme)
  }, [theme])
  return ( 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <div className={`app ${theme}`}>
          <Routes>
            <Route element={<SplashPage />} index />
            <Route element={<SessionsPage />} path="sessions" />
            <Route element={<Outlet />} path="session">
              <Route element={<SessionLayout />} path=":sessionId">

                <Route element={<OnboardingLayout />} path="onboarding">
                  <Route element={<OnboardingIndexPage />} index />
                  <Route element={<OnboardingStep1Page />} path="step1" />
                </Route>
   
                <Route element={<DashboardLayout />} path="dashboard">
                  <Route element={<InboxPage />} path="inbox" />
                </Route>
              </Route>
            </Route>
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
