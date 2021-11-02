import * as React from 'react'
import { useEffect, useState } from 'react';
import UsersApi from '../../api/usersApi';
import { AgeColorStat } from '../../types/ageColorStat';


export default function UserStats() {
    const [stats, setStats] = useState<AgeColorStat[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UsersApi.getStats().then(
            (s => {
                console.log(s);
                setStats(s);
                setLoading(false);
            })
        );
    }, [])

    return loading ? <p><em>Loading...</em></p>
        : <table>
        <thead>
            <tr>
                <th>Age</th>
                <th>Most Popular Color</th>
            </tr>
        </thead>
        <tbody>
            {stats.map((s) => {
                return <tr key={s.maxAge}>
                    <td>{s.maxAge}</td>
                    <td>{s.colorStats[0]["hex"] }</td>
                </tr>
            })}
        </tbody>
    </table>
}