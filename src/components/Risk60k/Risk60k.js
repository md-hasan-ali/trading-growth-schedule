import React from 'react';
import { Table } from 'react-bootstrap';

const Risk60k = () => {
    const risks60 = [
        {
            "id": "1",
            "Program_Level": "Evaluation",
            "Initial_Balance": "$15,000",
            "Milestone_Target": "$1,500",
            "Maximum_Loss": "$750",
            "Leverage": "1.10",
            "Profit_Split": "N/A",
            "Max_Stoploss": "$2250.00",
        },
        {
            "id": "2",
            "Program_Level": "Level 2",
            "Initial_Balance": "$60,000",
            "Milestone_Target": "$6,000",
            "Maximum_Loss": "$3,000",
            "Leverage": "1.10",
            "Profit_Split": "50/50",
            "Max_Stoploss": "$900",
        },
        {
            "id": "3",
            "Program_Level": "Level 3",
            "Initial_Balance": "$120,000",
            "Milestone_Target": "$12,000",
            "Maximum_Loss": "$6,000",
            "Leverage": "1.10",
            "Profit_Split": "60/40",
            "Max_Stoploss": "$1,800",
        },
        {
            "id": "4",
            "Program_Level": "Level 4",
            "Initial_Balance": "$240,000",
            "Milestone_Target": "$24,000",
            "Maximum_Loss": "$12,000",
            "Leverage": "1.10",
            "Profit_Split": "60/40",
            "Max_Stoploss": "$3,600.00",
        },
        {
            "id": "5",
            "Program_Level": "Level 5",
            "Initial_Balance": "$480,000",
            "Milestone_Target": "$48,000",
            "Maximum_Loss": "$24,000",
            "Leverage": "1.10",
            "Profit_Split": "70/30",
            "Max_Stoploss": "$7,200.00",
        },
        {
            "id": "6",
            "Program_Level": "Level 6",
            "Initial_Balance": "$960,000",
            "Milestone_Target": "$96,000",
            "Maximum_Loss": "$48,000",
            "Leverage": "1.10",
            "Profit_Split": "70/30",
            "Max_Stoploss": "$14,400.50",
        },
        {
            "id": "7",
            "Program_Level": "Level 7",
            "Initial_Balance": "$1920,000",
            "Milestone_Target": "N/A",
            "Maximum_Loss": "$96,000",
            "Leverage": "1.10",
            "Profit_Split": "80/20",
            "Max_Stoploss": "$28,800.50",
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
            {risks60.map((risk) =>
                <tbody key={risk?.id}>
                    <tr>
                        <td>{risk?.Program_Level}</td>
                        <td>{risk?.Initial_Balance}</td>
                        <td>{risk?.Milestone_Target}</td>
                        <td>{risk?.Maximum_Loss}</td>
                        <td>{risk?.Leverage}</td>
                        <td>{risk?.Profit_Split}</td>
                        <td>{risk?.Max_Stoploss}</td>
                    </tr>
                </tbody>
            )}
        </Table>
    );
};

export default Risk60k;