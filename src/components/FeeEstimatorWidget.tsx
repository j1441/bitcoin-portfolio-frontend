// components/FeeEstimatorWidget.tsx
import React from 'react';
import useFeeEstimator from '../hooks/useFeeEstimator';

interface FeeEstimatorWidgetProps {
    className?: string;
}

const FeeEstimatorWidget: React.FC<FeeEstimatorWidgetProps> = ({ className }) => {
    const fees = useFeeEstimator();

    return (
        <div className={`${className} bg-white p-4 rounded shadow-md`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fee Estimator</h3>
            {fees ? (
                <ul className="text-sm text-gray-700">
                    <li>Low Priority: {fees.low} sat/vB</li>
                    <li>Medium Priority: {fees.medium} sat/vB</li>
                    <li>High Priority: {fees.high} sat/vB</li>
                </ul>
            ) : (
                <p className="text-sm text-gray-500">Loading...</p>
            )}
        </div>
    );
};

export default FeeEstimatorWidget;
