// hooks/useFeeEstimator.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFeeEstimator = () => {
    const [fees, setFees] = useState<{ low: number; medium: number; high: number } | null>(null);

    useEffect(() => {
        const fetchFees = async () => {
            try {
                const response = await axios.get('https://mempool.space/api/v1/fees/recommended');
                const feeData = response.data;
                setFees({
                    low: feeData.hourFee,        // Low priority fee (1 hour confirmation target)
                    medium: feeData.halfHourFee,  // Medium priority fee (30 minutes confirmation target)
                    high: feeData.fastestFee,     // High priority fee (next block confirmation target)
                });
            } catch (error) {
                console.error('Failed to fetch fee data', error);
            }
        };

        fetchFees();
    }, []);

    return fees;
};

export default useFeeEstimator;
