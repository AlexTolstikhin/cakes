import React from 'react';
import parser from 'html-react-parser';


const TableRow = ({ data }) =>
    <tr>
        {data.map(i => <td>{parser(i)}</td>)}
    </tr>;

export default TableRow;