'use client';
import React, { useState } from 'react';

export default function Counter() {
    const [today, setToday] = useState((new Date()).getTime());
    let start: number = (new Date('2025-10-18T10:00:00')).getTime();
    let timeDiff: number = Math.round((today - start) / 3600000)

    return (
        <>
            <div className="font-mono items-center justify-items-center">
                Lucas, Dean. I've been waiting for you for {timeDiff} hours...
            </div>
        </>
    )
}