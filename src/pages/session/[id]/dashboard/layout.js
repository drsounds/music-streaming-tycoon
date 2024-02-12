import React, { useState, createContext } from 'react';

import { Sidebar } from '../../../../components/Sidebar';
import { SidebarSection } from '../../../../components/Sidebar/SidebarSection';
import { SidebarGroup } from '../../../../components/Sidebar/SidebarGroup';
import { SidebarNavLink } from '../../../../components/Sidebar/SidebarNavLink';

import { ViewStack } from '../../../../components/ViewStack';
import { Envelope, ListBullets } from 'phosphor-react';


export const DashboardLayoutContext = createContext({
  sidebarExpanded: null,
  setSidebarExpanded: (value) => {}
})


export function DashboardLayout({ children }) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  return (
    <DashboardLayoutContext.Provider value={{ sidebarExpanded, setSidebarExpanded }}>
      <div className="dashboard">
        <Sidebar expanded={sidebarExpanded}>
          <SidebarSection>
            <SidebarGroup name="Main">
              <SidebarNavLink Icon={Envelope} href="./inbox">Inbox</SidebarNavLink>
              <SidebarNavLink Icon={ListBullets} href="./playlists">Playlists</SidebarNavLink>
            </SidebarGroup>
          </SidebarSection>
        </Sidebar>
        <ViewStack style={{ flex: 1 }}>
          {children}
        </ViewStack>
      </div>
    </DashboardLayoutContext.Provider>
  )
}