import { Button } from "@mui/material";
import RectangleShape from "../../components/RectangleShape";
import BGRectangle from "../../components/BGRectangle";
import CustomSidenav from "../../components/CustomSidenav";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import FrameContainer from "../../components/FrameContainer";
import "../pageCss/UserPage.css";
import Footer from "../../components/Footer";
import Dropdown from "../../components/dropdown2";
import Dropdown_01 from "../../components/dropdown";
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
  { id: 1, vaccination: 'Vaccine_01', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Verified', age: 1, date: '2021-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 2, vaccination: 'Vaccine_02', place: 'MOH-Beliatta', vaccinator: 'Mr.amal', verification: 'Verified', age: 6, date: '2021-06-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 3, vaccination: 'Vaccine_03', place: 'MOH-Beliatta', vaccinator: 'Mr.Nimal', verification: 'Verified', age: 3, date: '2023-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 4, vaccination: 'Vaccine_04', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 5, vaccination: 'Vaccine_05', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 6, vaccination: 'Vaccine_06', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 7, vaccination: 'Vaccine_07', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 8, vaccination: 'Vaccine_08', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 9, vaccination: 'Vaccine_09', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 10, vaccination: 'Vaccine_10', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 11, vaccination: 'Vaccine_11', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },
  { id: 12, vaccination: 'Vaccine_12', place: 'MOH-Beliatta', vaccinator: 'Mr.Kamal', verification: 'Not-Verified', age: 61, date: '2011-04-25', bottelcode: 'mcd00234#45', email: 't.nixon@datatables.net' },

  // Add the rest of your data here
];


const UserPage = () => {
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
    <div className="user-page">
      <section className="frame-textbox">
        {/* navbar */}
        <RectangleShape />
        {/* header */}
        <BGRectangle />

        <div className="text-area" />
      </section>
      <section className="image-placeholder">

        {/* dashboard */}
        <CustomSidenav />
        <div className="label-text">
          {/* table */}
          <div className="minheight">
            <div className="default-slot"><Dropdown_01 /></div>
            <div className="custom-page-heading">
              <div className="box7">
                <div className="title-and-contents">
                  <h1 className="page-header">Track Your Child Vaccinations</h1>
                  <div className="stack">
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="paper">
                <div className="custom-users-management-tabl">
                  <div className="custom-table-toolbar">
                    <div className="queries">
                      <div className="textfield1">
                        <div className="input5">
                          <input
                            className="content2"
                            placeholder="Name, email, etc..."
                            type="text"
                          />
                          <div className="label-container1">
                            <div className="label1">Search</div>
                          </div>
                        </div>
                      </div>
                      <div className="textfield1">
                        <Dropdown />
                      </div>
                    </div>
                  </div>
                  <div className="table">
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

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* right section */}
        <div className="text-container">
          <div className="desktopdatepicker-parent" >
            <div className="go-to-calendar">
              <div className="list">
                <div className="header-picker">
                  <DesktopDatePicker />
                </div>
              </div>
            </div>

            <div className="go-to-calendar">
              <div className="list">
                <div className="header">
                  <div className="span">UPCOMING VACCINE</div>
                </div>
                <div className="list-item">
                  <div className="m-icon">
                    <div className="v-icon">account_box</div>
                  </div>
                  <div className="v-list-item-content">
                    <div className="single-line-item">VACCINE NAME</div>
                    <div className="secondary-text">Secondary text</div>
                  </div>

                </div>
                <div className="list-item1">
                  <div className="m-icon1">
                    <div className="v-icon2">account_box</div>
                  </div>
                  <div className="v-list-item-content1">
                    <div className="single-line-item1">VACCINE NAME</div>
                    <div className="secondary-text1">Secondary text</div>
                  </div>

                </div>
                <div className="list-item2">
                  <div className="m-icon2">
                    <div className="v-icon4">account_box</div>
                  </div>
                  <div className="v-list-item-content2">
                    <div className="single-line-item2">VACCINE NAME</div>
                    <div className="secondary-text2">Secondary text</div>
                  </div>

                </div>
              </div>
              <div className="go-to-calander">Go to calander..</div>
            </div>
          </div>
        </div>
      </section>
      {/* yellow knowledge label container */}
      <FrameContainer />

      {/* special need section */}
      <section className="you-message-frame">
        <div className="cta">
          <div className="content">
            <h1 className="you-can-take">
              You can take advice from provided doctors for children with
              special needs!
            </h1>
            <Button
              className="primary-button"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#f2c94c",
                borderRadius: "4px",
                "&:hover": { background: "#f2c94c" },
                width: 187,
                height: 51,
              }}
            >
              Meet your doctor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserPage;
