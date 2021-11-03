import * as React from 'react'
import { useEffect, useState } from 'react';
import StatsApi from '../../api/statsApi';
import { AgeColorInfo } from '../../types/ageColorInfo';
import { ColorsDictionary } from '../common/colorValues'
import ColorSwatch from '../userPreferences/colorSwatch';


export default function UserStatsContainer() {
    const [stats, setStats] = useState<AgeColorInfo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        StatsApi.getColorsByAge().then(
            (s => {
                setStats(s);
                setLoading(false);
            })
        );
    }, [])

    return <div>

        <h1>User Statistics</h1>
        <p>Most popular colors by age</p>

        {loading ? <p><em>Loading...</em></p>
            : <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan={3}>Most Popular Color</th>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <th>First</th>
                        <th>Second</th>
                        <th>Third</th>
                    </tr>

                </thead>
                <tbody>
                    {stats.map((s, index) => {
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

                        let firstColorHex = "";
                        let secondColorHex = "";
                        let thirdColorHex = "";

                        if (s.colorStats.length > 0) {
                            firstColorHex = s.colorStats[0]["hex"];
                        }
                        if (s.colorStats.length > 1) {
                            secondColorHex = s.colorStats[1]["hex"];
                        }
                        if (s.colorStats.length > 2) {
                            thirdColorHex = s.colorStats[2]["hex"];
                        }

                        return <tr key={maxAge}>
                            <td>{ageLabel}</td>
                            <td><ColorSwatch hex={firstColorHex} /> {ColorsDictionary[firstColorHex]}</td>
                            <td><ColorSwatch hex={secondColorHex} /> {ColorsDictionary[secondColorHex]}</td>
                            <td><ColorSwatch hex={thirdColorHex} /> {ColorsDictionary[thirdColorHex]}</td>
                        </tr>
                    })}
                </tbody>
            </table>}

    </div>
}