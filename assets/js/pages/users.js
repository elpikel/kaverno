import React from 'react';
import useSWR from 'swr'
import { Heading, Table } from '@radix-ui/themes';

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(data => data.data)

export default function Users() {
    const { data, error, isLoading } = useSWR('/api/users', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <div>
            <Heading size="8" color="indigo">Users</Heading>
            <Table.Root variant="surface" mt="3">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {data.map(user => {
                        return (<Table.Row key={user.id}>
                            <Table.RowHeaderCell>{user.id}</Table.RowHeaderCell>
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.age}</Table.Cell>
                        </Table.Row>)
                    })}
                </Table.Body>
            </Table.Root>
        </div>
    )
}