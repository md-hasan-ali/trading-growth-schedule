import React from 'react';
import { Table } from 'react-bootstrap';

const Aggressive40 = () => {
    const aggressives14 = [
        {
            "id": "1",
            "Program_Level": "Evaluation",
            "Initial_Balance": "$10,000",
            "Milestone_Target": "$2,500",
            "Maximum_Loss": "$500",
            "Leverage": "1.30",
            "Profit_Split": "N/A",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "2",
            "Program_Level": "Level 2",
            "Initial_Balance": "$40,000",
            "Milestone_Target": "$10,000",
            "Maximum_Loss": "$2000",
            "Leverage": "1.30",
            "Profit_Split": "50/50",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "3",
            "Program_Level": "Level 3",
            "Initial_Balance": "$80,000",
            "Milestone_Target": "$20,000",
            "Maximum_Loss": "$4,000",
            "Leverage": "1.30",
            "Profit_Split": "60/40",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "4",
            "Program_Level": "Level 4",
            "Initial_Balance": "$160,000",
            "Milestone_Target": "$40,000",
            "Maximum_Loss": "$8,000",
            "Leverage": "1.30",
            "Profit_Split": "60/40",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "5",
            "Program_Level": "Level 5",
            "Initial_Balance": "$320,000",
            "Milestone_Target": "$80,000",
            "Maximum_Loss": "$16,000",
            "Leverage": "1.30",
            "Profit_Split": "70/30",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "6",
            "Program_Level": "Level 6",
            "Initial_Balance": "$640,000",
            "Milestone_Target": "$160,000",
            "Maximum_Loss": "$32,000",
            "Leverage": "1.30",
            "Profit_Split": "70/30",
            "Max_Stoploss": "Not required",
        },
        {
            "id": "7",
            "Program_Level": "Level 7",
            "Initial_Balance": "$1280,000",
            "Milestone_Target": "N/A",
            "Maximum_Loss": "$64,000",
            "Leverage": "1.30",
            "Profit_Split": "80/20",
            "Max_Stoploss": "Not required",
        }
    ]
    return (
        <Table striped bordered hover>
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
                <tbody>
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

export default Aggressive40;