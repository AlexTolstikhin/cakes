import React from 'react';
import TableRow from './tableRow';

const Table = ({ colSpan = 1, rowsData = [], subtitle = '' }) =>
    <table className="info-table center">
        <thead>
            <tr>
                <td className="subtitle" colSpan={colSpan.toString()}>{subtitle}</td> 
            </tr>
        </thead>
        <tbody>
            {rowsData.map(row => <TableRow data={row}/>)}
        </tbody>
    </table>

export default Table;