import { Button } from "@mui/material";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import "../pageCss/UserPage.css";
import Footer from "../../components/Footer";
// import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../../components/comCss/Minheight.css";
import BGRectangle2 from "../../components/headerbg";
import LANavbar from "../../components/LA_Nav";
import HAdminDashBoard from "../../components/HighAdminDashboard";
import ANotificationList from "../../components/AdminNotification";
import React, { useState, useEffect } from 'react';

const columns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'motherorGuardianNIC', headerName: 'Mother/Guardian NIC', width: 180 },
  { field: 'fatherName', headerName: 'Father Name', width: 150 },
  { field: 'fatherNic', headerName: 'Father NIC', width: 150 },
  { field: 'bid', headerName: 'BID', width: 100 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'ofc', headerName: 'OFC', width: 100 },
  { field: 'birthDate', headerName: 'Birth Date', width: 150, type: 'date' },
  { field: 'weight', headerName: 'Weight', width: 100 },
  { field: 'hospitalName', headerName: 'Hospital Name', width: 180 },
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


const HighAdminChild = () => {
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    const fetchBabies = async () => {
      try {
        const response = await fetch('http://localhost:4000/admin/babies');
        const data = await response.json();
        const formattedData = data.map(baby => ({
          id: baby._id,
          firstName: baby.babyName.firstName,
          lastName: baby.babyName.lastName,
          motherorGuardianNIC: baby.motherorGuardianNIC,
          fatherName: baby.fatherName,
          fatherNic: baby.fatherNic,
          bid: baby.bid,
          gender: baby.gender,
          ofc: baby.ofc,
          birthDate: new Date(baby.birthDate),
          weight: baby.weight,
          hospitalName: baby.hospitalName,
        }));
        setRows(formattedData);
      } catch (error) {
        console.error('Error fetching baby data:', error);
      }
    };

    fetchBabies();
  }, []);

  const handleCellEditCommit = React.useCallback(({ id, field, props }) => {
    setRows((prevRows) => {
      const index = prevRows.findIndex((row) => row.id === id);
      const updatedRows = [...prevRows];
      updatedRows[index] = { ...updatedRows[index], [field]: props.value };
      return updatedRows;
    });
  }, []);

  return (

    <div>
      <LANavbar />
      <div className="user-page">
        <BGRectangle2 />
        <section className="image-placeholder" >
          <HAdminDashBoard />
          <div className="label-text">
            {/* table */}
            <div className="minheight" >
              <div className="default-slot"> <h1 className="page-header">Child Collection</h1></div>
              <div className="card">
                <div className="paper">
                  <div className="custom-users-management-tabl" >
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
                          <Button className="button-row" href="/hupdate-child"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginLeft: "200px",
                              extTransform: "none",
                              color: "#1d2130",
                              fontSize: "14px",
                              background: "#fff",
                              borderRadius: "10x 10px 10px 10px",
                              borderColor: "black",
                              borderWidth: "2px",
                              borderStyle: "solid",
                              "&:hover": { background: "#fff" },
                              width: 50,

                            }}>Update</Button>
                        </div>

                        <div className="textfield1">
                          <Button className="button-row"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginLeft: "10px",
                              extTransform: "none",
                              color: "white",
                              fontSize: "14px",
                              background: "light blue",
                              borderRadius: "10x 10px 10px 10px",
                              borderColor: "black",
                              "&:hover": { background: "light blue" },
                              width: 50,

                            }}>DELETE</Button>
                        </div>

                      </div>
                    </div>

                    {/* <div className="table" >
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
                    </div> */}

                    <div className="table">
                      <div style={{ height: 500, width: '100%' }}>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          pageSize={12}
                          rowsPerPageOptions={[12]}
                          checkboxSelection
                          disableSelectionOnClick
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



              <div className="go-to-calendar" style={{ marginTop: "-30px" }} >
                <div className="list">
                  <div className="header-picker">
                    <DesktopDatePicker />
                  </div>
                </div>
              </div>

              <div className="go-to-calendar" style={{ height: "130px", marginTop: "60px", marginBottom: "150px" }}>
                <div className="list" >
                  <div className="header">
                    <div className="span">NOTIFICATIONS</div>
                  </div>

                  <ANotificationList /></div>
              </div>

            </div>
          </div>
        </section>
      

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
    </div>
  );
};

export default HighAdminChild;