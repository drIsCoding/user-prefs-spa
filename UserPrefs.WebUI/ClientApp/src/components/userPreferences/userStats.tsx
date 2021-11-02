import * as React from 'react'
import { useEffect, useState } from 'react';
import StatsApi from '../../api/statsApi';
import { AgeColorInfo } from '../../types/ageColorInfo';
import { ColorsDictionary} from '../common/colorValues'


export default function UserStats() {
    const [stats, setStats] = useState<AgeColorInfo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        StatsApi.getColorsByAge().then(
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
                {stats.map((s, index) => {
                    console.log(s);
                    const { maxAge, minAge } = s.ageRange;

                    let ageLabel = `${minAge} - ${maxAge}`;
                    if (index === 0) {
                        ageLabel = `< ${maxAge + 1}`;
                    }
                    else if (index === stats.length - 1) {
                        ageLabel = `> ${minAge + 1}`;
                    }
                    else {
                        ageLabel = `${minAge} - ${maxAge}`;
                    }
                    return <tr key={maxAge}>
                        <td>{ageLabel}</td>
                    <td>{ColorsDictionary[s.colorStats[0]["hex"]] }</td>
                </tr>
            })}
        </tbody>
    </table>
}