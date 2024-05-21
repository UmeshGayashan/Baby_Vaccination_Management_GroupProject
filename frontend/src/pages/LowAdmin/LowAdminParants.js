import { Button } from "@mui/material";
import BGRectangle from "../../components/BGRectangle";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import "../pageCss/UserPage.css";
import Footer from "../../components/Footer";
import React, { useState , useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import UserNavBar from "../../components/user_nav";
import "../../components/comCss/Minheight.css";
import LAdminDashBoard from "../../components/LAdashboard";
import LANavbar from "../../components/LA_Nav";

const columns = [
  { field: 'motherorGuardianName', 
  headerName: 'Guardian Name', 
  width: 200, 
  valueGetter: (params) => {
    const name = params.row.motherorGuardianName;
    return name ? `${name.firstName} ${name.lastName}` : 'N/A';
  }  },
  { field: 'motherorGuardianNIC', headerName: 'NIC', width: 150 },
  { field: 'Address', headerName: 'Address', width: 200 },
  { field: 'PostalCode', headerName: 'Postal Code', width: 100 },
  { field: 'guardianEmail', headerName: 'Email', width: 200 },
  { field: 'guardianTelephoneNumber', headerName: 'Telephone', width: 150 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'additionalInfo', headerName: 'Additional Info', width: 200 },
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


const LowAdminParants = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await fetch('http://localhost:4000/admin/parents');
        const data = await response.json();
        const formattedData = data.map(parent => ({
          id: parent._id,
          motherorGuardianName: parent.motherorGuardianName,
          motherorGuardianNIC: parent.motherorGuardianNIC,
          Address: parent.Address,
          PostalCode: parent.PostalCode,
          guardianEmail: parent.guardianEmail,
          guardianTelephoneNumber: parent.guardianTelephoneNumber,
          username: parent.username,
          additionalInfo: parent.additionalInfo || '',
        }));
        setRows(formattedData);
      } catch (error) {
        console.error('Error fetching parent data:', error);
      }
    };

    fetchParents();
  }, []);


  return (

    <div>
      <LANavbar/>
      <div className="user-page">
        <BGRectangle />
        <section className="image-placeholder" style={{marginBottom:"50px"}}>
          <LAdminDashBoard />
          <div className="label-text">
            {/* table */}
            <div className="minheight" >
              <div className="default-slot"> <h1 className="page-header">Parent Collection</h1></div>
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
                          <Button className="button-row" href="/update-perant"
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

                            }}>View</Button>
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



              <div className="go-to-calendar" >
                <div className="list">
                  <div className="header-picker">
                    <DesktopDatePicker />
                  </div>
                </div>
              </div>

              {/* <div className="go-to-calendar" style={{height:"150px" , marginTop:"60px", marginBottom:"150px"}}>
              <div className="list" > 
              <div className="header">
                  <div className="span">UPCOMING VACCINE</div>
                </div>
              
               <NotificationList/></div>
            </div> */}

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

export default LowAdminParants;