import React from 'react';

export function TableCell({
    children,
    ...props
}) {
    return (
        <td {...props}>{children}</td>
    )
}

export function TableHeaderCell({
    children,
    ...props
}) {
    return (
        <th {...props}>{children}</th>
    )
}

export function TableHead({
    children,
    ...props
}) {
    return (
        <thead {...props}>{children}</thead>
    )
}

export function TableBody({
    children,
    ...props
}) {
    return (
        <tbody {...props}>{children}</tbody>
    )
}

export function TableRow({
    children,
    ...props
}) {
    return (
        <tr {...props}>{children}</tr>
    )
}

export function Table({
    children,
    ...props
}) {
    return (
        <table className="table" {...props}>{children}</table>
    )
}