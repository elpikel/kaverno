import React, { useState } from 'react';
import { Button } from '@radix-ui/themes';

export default function MyButton() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function handleClick() {
        fetch('http://localhost:4000/api/users')
            .then(response => response.json())
            .then(data => {
                setData(data.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }

    if (error != null) {
        return (
            <div>{error}</div>
        )
    }
    else {
        return (
            <>
                <Button onClick={handleClick} size="3" variant="soft">
                    {loading ? "fetching..." : "Fetch users"}
                </Button>
                {data != null ? <div>
                    <ul>
                        {data.map(user => {
                            return <li key={user.id}>{user.name}</li>
                        })}
                    </ul>
                </div> : null}
            </>
        );
    }
}