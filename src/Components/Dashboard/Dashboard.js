import React from 'react';
import SimpleRadarChart from '../SimpleRadarChart/SimpleRadarChart';
import LegendEffectOpacity from '../LegendEffectOpacity/LegendEffectOpacity';

const Dashboard = () => {
    return (
        <div className="row align-items-center mt-5">
            <div className="col-md-6">
                <SimpleRadarChart></SimpleRadarChart></div>
            <div className="col-md-6">
                <LegendEffectOpacity></LegendEffectOpacity>
            </div>
        </div>
    );
};

export default Dashboard;