import React from 'react';
import { ToolBar } from '../ToolBar';
import { NodeTable } from '../NodeTable';

export function NodeContext({
    actions=[],
    nodes=[],
    columns={},
    visibleColumns=[]
}) {
    return (
        <div className="node-context">
            <ToolBar actions={actions} />
            <NodeTable 
                columns={columns}
                nodes={nodes}
                style={{ flex: 1 }}
                visibleColumns={visibleColumns}
            />
        </div>
    )
}