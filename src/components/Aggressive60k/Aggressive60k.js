import React from 'react';
import { Table } from 'react-bootstrap';

const Aggressive60k = () => {
    const aggressives60 = [
        {
            "id": "1",
            "Program_Level": "Evaluation",
            "Initial_Balance": "$15,000",
            "Milestone_Target": "$3,750",
            "Maximum_Loss": "$750",
            "Leverage": "1.30",
            "Profit_Split": "N/A",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "2",
            "Program_Level": "Level 2",
            "Initial_Balance": "$60,000",
            "Milestone_Target": "$15,000",
            "Maximum_Loss": "$3,000",
            "Leverage": "1.30",
            "Profit_Split": "50/50",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "3",
            "Program_Level": "Level 3",
            "Initial_Balance": "$120,000",
            "Milestone_Target": "$30,000",
            "Maximum_Loss": "$6,000",
            "Leverage": "1.30",
            "Profit_Split": "60/40",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "4",
            "Program_Level": "Level 4",
            "Initial_Balance": "$240,000",
            "Milestone_Target": "$60,000",
            "Maximum_Loss": "$12,000",
            "Leverage": "1.30",
            "Profit_Split": "60/40",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "5",
            "Program_Level": "Level 5",
            "Initial_Balance": "$480,000",
            "Milestone_Target": "$120,000",
            "Maximum_Loss": "$24,000",
            "Leverage": "1.30",
            "Profit_Split": "70/30",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "6",
            "Program_Level": "Level 6",
            "Initial_Balance": "$9600,000",
            "Milestone_Target": "$2400,000",
            "Maximum_Loss": "$48,000",
            "Leverage": "1.30",
            "Profit_Split": "70/30",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "7",
            "Program_Level": "Level 7",
            "Initial_Balance": "$1920,000",
            "Milestone_Target": "N/A",
            "Maximum_Loss": "$96,000",
            "Leverage": "1.30",
            "Profit_Split": "80/20",
            "Max_Stoploss": "Not required",
        }
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
            {aggressives60.map((singleAggressive) =>
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

export default Aggressive60k;