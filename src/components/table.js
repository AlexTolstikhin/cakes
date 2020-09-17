import React from 'react';
import TableRow from './tableRow';

const Table = ({ classes = "", colSpan = 1, rowsData = [], subtitle = '' }) =>
    <table className={classes}>
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