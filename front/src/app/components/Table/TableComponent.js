import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';

export default function TableComponent({ columns, rows, pagination }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let gridRows = [];
    if (rows !== undefined) {
        gridRows = rows.map((row, i) => {
            row.id = i;
            return row;
        });
    }
    let gridCols = [];
    if (columns !== undefined && (typeof columns[0] === 'string' || columns[0] instanceof String)) {
        gridCols = columns.map((col) => {
            return { field: col, headerName: col };
        });
    } else {
        gridCols = columns;
    }
    const sx = {
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300
    };
    if (rows === undefined) return null;
    if (rows.length > 0) {
        return (
            <div className="datagrid-table">
                <DataGrid
                    rows={gridRows}
                    columns={gridCols}
                    disableExtendRowFullWidth={true}
                    components={{ Toolbar: GridToolbar }}
                    sx={sx}
                />
            </div>
        );
    } else {
        return <br />;
    }
}
