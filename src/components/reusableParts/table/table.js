import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './tableRow';

const Table = ({
    colSpan,
    rowsData,
    subtitle,
    tableBodyStyles,
    tableDataStyles,
    tableHeadStyles,
    tableStyles,
}) =>   
    <table styles={tableStyles}>
        <thead styles={tableHeadStyles}>
            <tr>
                <td colSpan={colSpan.toString()} styles={tableDataStyles}>{subtitle}</td> 
            </tr>
        </thead>
        <tbody styles={tableBodyStyles}>
            {rowsData.map(row => <TableRow data={row} tableDataStyles={tableDataStyles}/>)}
        </tbody>
    </table>;


Table.defaultProps = {
    colSpan: 1,
    rowsData: [],
    subtitle: '',
    tableBodyStyles: {},
    tableDataStyles: {},
    tableHeadStyles: {},
    tableStyles: {},
};

Table.propTypes = {
    colSpan: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    rowsData: PropTypes.array,
    subtitle: PropTypes.string,
    tableBodyStyles: PropTypes.object,
    tableDataStyles: PropTypes.object,
    tableHeadStyles: PropTypes.object,
    tableStyles: PropTypes.object,
};


export default Table;