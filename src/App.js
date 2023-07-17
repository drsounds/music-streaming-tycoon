import React from 'react';

import { Routes, Route } from 'react-router';


import './App.css';
import InboxPage from './pages/dashboard/inbox';
import { SplashPage } from './pages/splash';
import { DashboardLayout } from './pages/dashboard/layout';

function App() {
  return ( 
      <Routes>
        <Route element={<SplashPage />} index />
        <Route element={<DashboardLayout />} path="dashboard">
          <Route element={<InboxPage />} path="inbox" />
        </Route>
      </Routes>
  );
}

export default App;
