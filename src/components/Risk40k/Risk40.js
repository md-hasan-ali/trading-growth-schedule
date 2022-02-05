import React from 'react';
import { Table } from 'react-bootstrap';

const Risk40 = () => {
    const risks40 = [
        {
            "id": "1",
            "Program_Level": "Level 1",
            "Initial_Balance": "$3,500",
            "Milestone_Target": "$350",
            "Maximum_Loss": "$175",
            "Leverage": "1.10",
            "Profit_Split": "N/A",
            "Max_Stoploss": "52.50",
        },
        {
            "id": "2",
            "Program_Level": "Level 2",
            "Initial_Balance": "$14,000",
            "Milestone_Target": "$1,400",
            "Maximum_Loss": "$700",
            "Leverage": "1.10",
            "Profit_Split": "50/50",
            "Max_Stoploss": "210.00",
        },
        {
            "id": "3",
            "Program_Level": "Level 3",
            "Initial_Balance": "$28,000",
            "Milestone_Target": "$2,800",
            "Maximum_Loss": "$1,400",
            "Leverage": "1.10",
            "Profit_Split": "60/40",
            "Max_Stoploss": "420.00",
        },
        {
            "id": "4",
            "Program_Level": "Level 4",
            "Initial_Balance": "$56,000",
            "Milestone_Target": "$5,600",
            "Maximum_Loss": "$2,800",
            "Leverage": "1.10",
            "Profit_Split": "60/40",
            "Max_Stoploss": "840.00",
        },
        {
            "id": "5",
            "Program_Level": "Level 5",
            "Initial_Balance": "$112,000",
            "Milestone_Target": "$11,200",
            "Maximum_Loss": "$175",
            "Leverage": "1.10",
            "Profit_Split": "70/30",
            "Max_Stoploss": "1,680.50",
        },
        {
            "id": "6",
            "Program_Level": "Level 6",
            "Initial_Balance": "$224,000",
            "Milestone_Target": "$22,400",
            "Maximum_Loss": "$11,200",
            "Leverage": "1.10",
            "Profit_Split": "70/30",
            "Max_Stoploss": "3,360.50",
        },
        {
            "id": "7",
            "Program_Level": "Level 7",
            "Initial_Balance": "$448,000",
            "Milestone_Target": "$44,800",
            "Maximum_Loss": "$22,400",
            "Leverage": "1.10",
            "Profit_Split": "80/20",
            "Max_Stoploss": "6,720.50",
        },
        {
            "id": "8",
            "Program_Level": "Level 8",
            "Initial_Balance": "$896,000",
            "Milestone_Target": "N/A",
            "Maximum_Loss": "$44,800",
            "Leverage": "1.10",
            "Profit_Split": "80/20",
            "Max_Stoploss": "1344.00",
        },
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
            {risks40.map((risk) =>
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

export default Risk40;