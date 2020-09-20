import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';


const TableRow = ({ data, tableDataStyles }) =>
    <tr>
        {data.map(i => <td style={tableDataStyles}>{parser(i)}</td>)}
    </tr>;

TableRow.defaultProps = {
    data: [],
    tableDataStyles: {}
};

TableRow.propTypes = {
    data: PropTypes.array,
    tableDataStyles: PropTypes.object
};

export default TableRow;