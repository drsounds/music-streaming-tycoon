import React from 'react';

import { Sidebar } from '../../elements/Sidebar';
import { SidebarSection } from '../../elements/Sidebar/SidebarSection';
import { SidebarGroup } from '../../elements/Sidebar/SidebarGroup';
import { SidebarNavLink } from '../../elements/Sidebar/SidebarNavLink';

import { t } from 'i18next';

export function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar>
        <SidebarSection>
          <SidebarGroup name="Main">
            <SidebarNavLink href="./inbox">{t('Inbox')}</SidebarNavLink>
            <SidebarNavLink href="./playlists">{t('Playlists')}</SidebarNavLink>
          </SidebarGroup>
        </SidebarSection>
      </Sidebar>
    </div>
  )
}