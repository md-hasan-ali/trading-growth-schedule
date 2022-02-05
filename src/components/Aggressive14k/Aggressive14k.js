import React from 'react';
import { Table } from 'react-bootstrap';

const Aggressive14k = () => {
    const aggressives14 = [
        {
            "id": "1",
            "Program_Level": "Evaluation",
            "Initial_Balance": "$3,500",
            "Milestone_Target": "$875",
            "Maximum_Loss": "$175",
            "Leverage": "1.30",
            "Profit_Split": "N/A",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "2",
            "Program_Level": "Level 2",
            "Initial_Balance": "$14,000",
            "Milestone_Target": "$3,500",
            "Maximum_Loss": "$700",
            "Leverage": "1.30",
            "Profit_Split": "50/50",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "3",
            "Program_Level": "Level 3",
            "Initial_Balance": "$28,000",
            "Milestone_Target": "$7,000",
            "Maximum_Loss": "$1,400",
            "Leverage": "1.30",
            "Profit_Split": "60/40",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "4",
            "Program_Level": "Level 4",
            "Initial_Balance": "$56,000",
            "Milestone_Target": "$14,000",
            "Maximum_Loss": "$2,800",
            "Leverage": "1.30",
            "Profit_Split": "60/40",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "5",
            "Program_Level": "Level 5",
            "Initial_Balance": "$112,000",
            "Milestone_Target": "$28,000",
            "Maximum_Loss": "$5,600",
            "Leverage": "1.30",
            "Profit_Split": "70/30",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "6",
            "Program_Level": "Level 6",
            "Initial_Balance": "$224,000",
            "Milestone_Target": "$56,000",
            "Maximum_Loss": "$11,200",
            "Leverage": "1.30",
            "Profit_Split": "70/30",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "7",
            "Program_Level": "Level 7",
            "Initial_Balance": "$448,000",
            "Milestone_Target": "$112,000",
            "Maximum_Loss": "$22,400",
            "Leverage": "1.30",
            "Profit_Split": "80/20",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "8",
            "Program_Level": "Level 8",
            "Initial_Balance": "$896,000",
            "Milestone_Target": "N/A",
            "Maximum_Loss": "$44,800",
            "Leverage": "1.30",
            "Profit_Split": "80/20",
            "Max_Stoploss": "Not required",
        },

    ]
    return (
        <Table responsive hover>
            <thead>
                <tr>
                    <th>Program Level</th>
                    <th>Funding Balance</th>
                    <th>Milestone Target</th>
                    <th>Maximum Loss</th>
                    <th>Leverage</th>
                    <th>Profit Split</th>
                    <th>Max Stopless</th>
                </tr>
            </thead>
            {aggressives14.map((singleAggressive) =>
                <tbody key={singleAggressive?.id}>
                    <tr>
                        <td>{singleAggressive?.Program_Level}</td>
                        <td>{singleAggressive?.Initial_Balance}</td>
                        <td>{singleAggressive?.Milestone_Target}</td>
                        <td>{singleAggressive?.Maximum_Loss}</td>
                        <td>{singleAggressive?.Leverage}</td>
                        <td>{singleAggressive?.Profit_Split}</td>
                        <td>{singleAggressive?.Max_Stoploss}</td>
                    </tr>
                </tbody>
            )}
        </Table>
    );
};

export default Aggressive14k;