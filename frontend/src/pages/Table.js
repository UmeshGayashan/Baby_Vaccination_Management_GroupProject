// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'place', headerName: 'Last name', width: 130 },
//   { field: 'position', headerName: 'Position', width: 180 },
//   { field: 'office', headerName: 'Office', width: 130 },
//   { field: 'age', headerName: 'Age', type: 'number', width: 90 },
//   {
//     field: 'startDate',
//     headerName: 'Start date',
//     type: 'date',
//     width: 120,
//     valueGetter: (params) => new Date(params.row.startDate),
//   },
//   { field: 'salary', headerName: 'Salary', type: 'number', width: 120 },
//   { field: 'extn', headerName: 'Extn.', type: 'number', width: 90 },
//   { field: 'email', headerName: 'E-mail', width: 180 },
// ];

// const rows = [
//   { id: 1, firstName: 'Tiger', lastName: 'Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011-04-25', salary: 320800, extn: 5421, email: 't.nixon@datatables.net' },
  
// ];

// const DataTable = () => {
//   return (
//     <div style={{ height: 500, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[10]}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }

// export default DataTable;


import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'vaccination', headerName: 'Vaccination', width: 130, editable: true },
  { field: 'place', headerName: 'Place', width: 180, editable: true },
  { field: 'vaccinator', headerName: 'Vaccinator', width: 130, editable: true },
  { field: 'verification', headerName: 'Verification', width: 130, editable: true },
  { field: 'bottelcode', headerName: 'Bottle Code', width: 130, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, editable: true },
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 120,
    valueGetter: (params) => new Date(params.row.date),
    editable: true,
  },
  { field: 'email', headerName: 'E-mail', width: 180, editable: true },
];

const initialRows = [
  { id: 1,vaccination: 'Vaccine_01', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Verified', age: 1, date: '2021-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 2,vaccination: 'Vaccine_02', place: 'MOH-Beliatta', vaccinator: 'Mr.amal', verification: 'Verified', age: 6, date: '2021-06-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 3,vaccination: 'Vaccine_03', place: 'MOH-Beliatta', vaccinator: 'Mr.Nimal', verification: 'Verified', age: 3, date: '2023-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 4,vaccination: 'Vaccine_04', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 5,vaccination: 'Vaccine_05', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 6,vaccination: 'Vaccine_06', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 7,vaccination: 'Vaccine_07', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 8,vaccination: 'Vaccine_08', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 9,vaccination: 'Vaccine_09', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 10,vaccination: 'Vaccine_10', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 11,vaccination: 'Vaccine_11', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
  { id: 12,vaccination: 'Vaccine_12', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45',  email: 't.nixon@datatables.net' },
 
  // Add the rest of your data here
];

const EditableDataTable = () => {
  const [rows, setRows] = useState(initialRows);

  const handleCellEditCommit = React.useCallback(({ id, field, props }) => {
    setRows((prevRows) => {
      const index = prevRows.findIndex((row) => row.id === id);
      const updatedRows = [...prevRows];
      updatedRows[index] = { ...updatedRows[index], [field]: props.value };
      return updatedRows;
    });
  }, []);

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
        disableSelectionOnClick
        onEditCellChangeCommitted={handleCellEditCommit}
      />
    </div>
  );
}

export default EditableDataTable;

