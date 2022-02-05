import React from 'react';
import { Table } from 'react-bootstrap';

const Risk90k = () => {
    const risks90 = [
        {
            "id": "1",
            "Program_Level": "Level 1",
            "Initial_Balance": "$22,500",
            "Milestone_Target": "$2,250",
            "Maximum_Loss": "$1,125",
            "Leverage": "1.10",
            "Profit_Split": "N/A",
            "Max_Stoploss": "$337.50",
        },
        {
            "id": "2",
            "Program_Level": "Level 2",
            "Initial_Balance": "$90,000",
            "Milestone_Target": "$9,000",
            "Maximum_Loss": "$4,500",
            "Leverage": "1.10",
            "Profit_Split": "50/50",
            "Max_Stoploss": "$1,350",
        },
        {
            "id": "3",
            "Program_Level": "Level 3",
            "Initial_Balance": "$180,000",
            "Milestone_Target": "$18,800",
            "Maximum_Loss": "$9,000",
            "Leverage": "1.10",
            "Profit_Split": "60/40",
            "Max_Stoploss": "$2,700",
        },
        {
            "id": "4",
            "Program_Level": "Level 4",
            "Initial_Balance": "$360,000",
            "Milestone_Target": "$36,000",
            "Maximum_Loss": "$18,000",
            "Leverage": "1.10",
            "Profit_Split": "60/40",
            "Max_Stoploss": "$5,400.00",
        },
        {
            "id": "5",
            "Program_Level": "Level 5",
            "Initial_Balance": "$720,000",
            "Milestone_Target": "$72,200",
            "Maximum_Loss": "$36,000",
            "Leverage": "1.10",
            "Profit_Split": "70/30",
            "Max_Stoploss": "$10,800.00",
        },
        {
            "id": "6",
            "Program_Level": "Level 6",
            "Initial_Balance": "$1,440,000",
            "Milestone_Target": "$144,400",
            "Maximum_Loss": "$72,000",
            "Leverage": "1.10",
            "Profit_Split": "70/30",
            "Max_Stoploss": "$21,600.00",
        },
        {
            "id": "7",
            "Program_Level": "Level 7",
            "Initial_Balance": "$2880,000",
            "Milestone_Target": "N/A",
            "Maximum_Loss": "$144,000",
            "Leverage": "1.10",
            "Profit_Split": "80/20",
            "Max_Stoploss": "$43,200.00",
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
            {risks90.map((risk) =>
                <tbody>
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

export default Risk90k;