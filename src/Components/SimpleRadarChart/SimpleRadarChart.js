import React, { useEffect, useState} from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('chartData.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="month" />
            <PolarRadiusAxis />
            <Radar
                name="Gray"
                dataKey="revenue"
                stroke="#8984d8"
                fill="#8882d8"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
};

export default Dashboard;