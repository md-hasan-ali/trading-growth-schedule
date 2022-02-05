import React from 'react';
import { Table } from 'react-bootstrap';

const Risk40 = () => {
    const risks40 = [
        {
            "id": "1",
            "Program_Level": "Evaluation",
            "Initial_Balance": "$10,000",
            "Milestone_Target": "$1000",
            "Maximum_Loss": "$500",
            "Leverage": "1.10",
            "Profit_Split": "N/A",
            "Max_Stoploss": "$150.00",
        },
        {
            "id": "2",
            "Program_Level": "Level 2",
            "Initial_Balance": "$40,000",
            "Milestone_Target": "$4,000",
            "Maximum_Loss": "$8,000",
            "Leverage": "1.10",
            "Profit_Split": "50/50",
            "Max_Stoploss": "$600",
        },
        {
            "id": "3",
            "Program_Level": "Level 3",
            "Initial_Balance": "$80,000",
            "Milestone_Target": "$8,800",
            "Maximum_Loss": "$4,000",
            "Leverage": "1.10",
            "Profit_Split": "60/40",
            "Max_Stoploss": "$1200",
        },
        {
            "id": "4",
            "Program_Level": "Level 4",
            "Initial_Balance": "$160,000",
            "Milestone_Target": "$16,000",
            "Maximum_Loss": "$8,000",
            "Leverage": "1.10",
            "Profit_Split": "60/40",
            "Max_Stoploss": "$2400.00",
        },
        {
            "id": "5",
            "Program_Level": "Level 5",
            "Initial_Balance": "$320,000",
            "Milestone_Target": "$32,200",
            "Maximum_Loss": "$16,000",
            "Leverage": "1.10",
            "Profit_Split": "70/30",
            "Max_Stoploss": "$4800.00",
        },
        {
            "id": "6",
            "Program_Level": "Level 6",
            "Initial_Balance": "$640,000",
            "Milestone_Target": "$64,400",
            "Maximum_Loss": "$32,000",
            "Leverage": "1.10",
            "Profit_Split": "70/30",
            "Max_Stoploss": "$9,600.50",
        },
        {
            "id": "7",
            "Program_Level": "Level 7",
            "Initial_Balance": "$1280,000",
            "Milestone_Target": "N/A",
            "Maximum_Loss": "$64,000",
            "Leverage": "1.10",
            "Profit_Split": "80/20",
            "Max_Stoploss": "$19,200.50",
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
            {risks40.map((risk) =>
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

export default Risk40;