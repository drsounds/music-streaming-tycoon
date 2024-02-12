import React, { useState } from 'react';
import { Table, TableBody, TableHead, TableHeaderCell, TableRow } from '../Table';
import { Link } from 'react-router-dom';

export function NodeTableCell({ 
    node,
    column,
    ...props
}) {
    const value = node[column.id]
    if (column.render instanceof Function) {
        return column.render({ node, column })
    } else if (column.type === 'currency') {
        return (
            <CurrencyComponent
                currency={column.currency}
                value={value}
                {...props}
            />
        )
    } else if (column.type === 'number') {
        return (
            <NumberComponent
                currency={column.currency}
                value={value}
                {...props}
            />
        )
    } else {
        return (
            <ObjectComponent value={value} {...props} />
        )
    }
}

export function ObjectComponent({
    value,
    ...props
}) { 
    if (value instanceof Object) { 
        return (
            <Link href={value.href ?? '#'} {...props}>{value.name}</Link>
        )
    } else {
        return (
            <>{`${value}`}</>
        )
    }
}

export function ArrayComponent({
    value,
    ...props
}) {
    if (value instanceof Array) { 
        return (
            value.map((obj, i) => (
                <React.Fragment key={obj.id}>
                    {i > 0 && ', '}
                    <ValueComponent node={obj} />
                </React.Fragment>
            )) 
        )
    } else {
        return <>{`${value}`}</>
    }
}

export function ValueComponent({
    value,
    ...props
}) {
    if (value instanceof Array) {
        return <ArrayComponent value={value} {...props} />
    } else if (value instanceof Object) { 
        return (
            <Link href={value.href ?? '#'} {...props}>{value.name}</Link>
        )
    } else if (!isNaN(value)) {
        return <NumberComponent value={value} {...props} />
    } else {
        return <>{`${value}`}</>
    }
}

export function NumberComponent({
    value,
    stringStyle,
    ...props
}) {
    if (!isNaN(value)) {
        return ( 
            <span {...props}>{value?.toLocaleString(undefined, { ...stringStyle }) ?? '-'}</span>
        )
    } else {
        return (
            <span {...props}>-</span>
        )
    }
}

export function CurrencyComponent({
    value,
    currency,
    ...props
}) {
    return <NumberComponent value={value} stringStyle={{ currency, style: 'currency' }} {...props} />
}

export function NodeTable({
    nodes=[],
    orderByField,
    orderByDirection='asc',
    visibleColumns=[],
    columns=[],
    ...props
}) { 
    return (
        <Table {...props}>
            <TableHead>
                <TableRow>
                    {visibleColumns.map(columnId => {
                        const column = columns[columnId]
                        return (
                            <TableHeaderCell>
                                {column.name ?? column.id}
                            </TableHeaderCell>
                        )
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {nodes.map(node => (
                    <TableRow key={node.id}>
                        {visibleColumns.map(columnId => {
                            const column = columns[columnId]
                            return (
                                <NodeTableCell 
                                    key={column.id}
                                    column={column}
                                    node={node}
                                />
                            )
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}