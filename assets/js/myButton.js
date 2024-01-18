import * as React from 'react'

export default function MyButton() {
    return (
        <button type="button" className='phx-submit-loading:opacity-75 rounded-lg bg-zinc-900 hover:bg-zinc-700 py-2 px-3 text-sm font-semibold leading-6 text-white active:text-white/80' onClick={() => alert("hello")}>
            I'm a button
        </button>
    );
}