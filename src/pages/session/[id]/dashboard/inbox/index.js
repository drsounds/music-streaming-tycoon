import React from 'react';

import { useRouter } from 'next/router'
import { useLocalForage } from '@zikwall/use-localforage'

import { NodeContext } from '@/components/NodeContext';
import { DashboardLayout } from '../layout';


export function InboxPage() {
    const router = useRouter()
    const { sessionId } = router.query
    const [emails] = useLocalForage(`session:${sessionId}:inbox`, [])
    return (
        <NodeContext
            actions={[]}
            nodes={emails}
            visibleColumns={['sender', 'subject']}
            columns={{
                'sender': {
                    id: 'sender',
                    type: 'email',
                    name: 'Sender'
                },
                'subject': {
                    id: 'subject',
                    type: 'text',
                    name: 'Subject'
                }
            }}
        />
    )
}

InboxPage.getLayout = (app) => (
    <DashboardLayout>{app}</DashboardLayout>
)

export default InboxPage;