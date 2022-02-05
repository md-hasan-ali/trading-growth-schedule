import React from 'react';
import { Table } from 'react-bootstrap';

const aggressive90k = () => {
    const aggressives90 = [
        {
            "id": "1",
            "Program_Level": "Evaluation",
            "Initial_Balance": "$22,500",
            "Milestone_Target": "$5,625",
            "Maximum_Loss": "$1,1250",
            "Leverage": "1.30",
            "Profit_Split": "N/A",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "2",
            "Program_Level": "Level 2",
            "Initial_Balance": "$90,000",
            "Milestone_Target": "$22,500",
            "Maximum_Loss": "$4,500",
            "Leverage": "1.30",
            "Profit_Split": "50/50",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "3",
            "Program_Level": "Level 3",
            "Initial_Balance": "$180,000",
            "Milestone_Target": "$45,000",
            "Maximum_Loss": "$9,000",
            "Leverage": "1.30",
            "Profit_Split": "60/40",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "4",
            "Program_Level": "Level 4",
            "Initial_Balance": "$360,000",
            "Milestone_Target": "$90,000",
            "Maximum_Loss": "$18,000",
            "Leverage": "1.30",
            "Profit_Split": "60/40",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "5",
            "Program_Level": "Level 5",
            "Initial_Balance": "$720,000",
            "Milestone_Target": "$180,000",
            "Maximum_Loss": "$36,000",
            "Leverage": "1.30",
            "Profit_Split": "70/30",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "6",
            "Program_Level": "Level 6",
            "Initial_Balance": "$1440,000",
            "Milestone_Target": "$360,000",
            "Maximum_Loss": "$72,000",
            "Leverage": "1.30",
            "Profit_Split": "70/30",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "7",
            "Program_Level": "Level 7",
            "Initial_Balance": "$2880,000",
            "Milestone_Target": "N/A",
            "Maximum_Loss": "$144,000",
            "Leverage": "1.30",
            "Profit_Split": "80/20",
            "Max_Stoploss": "Not required",
        }
    ]
    return (
        <Table responsive striped hover>
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
            {aggressives90.map((singleAggressive) =>
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

export default aggressive90k;