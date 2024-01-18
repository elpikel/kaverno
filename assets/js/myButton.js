import React, { useState } from 'react';

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
                <button onClick={handleClick} type="button" className='phx-submit-loading:opacity-75 rounded-lg bg-zinc-900 hover:bg-zinc-700 py-2 px-3 text-sm font-semibold leading-6 text-white active:text-white/80'>
                    {loading ? "fetching..." : "Fetch users"}
                </button>
                {data != null ? <div>
                    <ul>
                        {data.map(user => {
                            return <li>{user.name}</li>
                        })}
                    </ul>
                </div> : null}
            </>
        );
    }
}