import { Button } from "@mui/material";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import "../pageCss/UserPage.css";
import Footer from "../../components/Footer";
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

const initialRows = [];


const HighAdminChild = () => {
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    const fetchBabies = async () => {
      try {
        const response = await fetch('https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/babies');
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
            <div className="minheight" >
              <div className="default-slot"> <h1 className="page-header">Child Collection</h1></div>
              <div className="card">
                <div className="paper">
                  <div className="custom-users-management-tabl" >
                    <div className="custom-table-toolbar">

                      <div className="queries" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <div >
                          <Button href="/hupdate-perant"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginTop: "20px",

                              extTransform: "none",
                              color: "#1d2130",
                              fontSize: "14px",
                              background: "#fff9c7",
                              borderRadius: "10x 10px 10px 10px",
                              borderColor: "black",
                              borderWidth: "2px",
                              borderStyle: "solid",
                              "&:hover": { background: "#fff" },
                              width: 300,

                            }}>Update and delete Parents</Button>

                          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                            <Button href="/hupdate-child"
                              disableElevation={true}
                              variant="contained"
                              sx={{

                                extTransform: "none",

                                color: "#1d2130",
                                fontSize: "14px",
                                background: "#fff9c7",
                                borderRadius: "10x 10px 10px 10px",
                                borderColor: "black",
                                borderWidth: "2px",
                                borderStyle: "solid",
                                "&:hover": { background: "#fff" },
                                width: 300,

                              }}>Update and delete child</Button>
                          </div>

                          <div style={{marginBottom:"20px"}}>
                            <Button href="/update-proffession"
                              disableElevation={true}
                              variant="contained"
                              sx={{

                                extTransform: "none",
                                color: "#1d2130",
                                fontSize: "14px",
                                background: "#fff9c7",
                                borderRadius: "10x 10px 10px 10px",
                                borderColor: "black",
                                borderWidth: "2px",
                                borderStyle: "solid",
                                "&:hover": { background: "#fff" },
                                width: 300,

                              }}>Update and delete Professionals</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="text-container" style={{marginTop:"50px"}}>
            <div className="desktopdatepicker-parent" >
              <div className="go-to-calendar" style={{ marginTop: "-30px" }} >
                <div className="list">
                  <div className="header-picker">
                    <DesktopDatePicker />
                  </div>
                </div>
              </div>

              {/* <div className="go-to-calendar" style={{ height: "130px", marginTop: "60px", marginBottom: "150px" }}>
                <div className="list" >
                  <div className="header">
                    <div className="span">NOTIFICATIONS</div>
                  </div>

                  <ANotificationList /></div>
              </div> */}

            </div>
          </div>
        </section>

        <div className="table" style={{ marginBottom: "50px", marginLeft: "50px", marginRight: "50px", backgroundColor: "#fff9c7" }}>
          <div style={{ height: 500, width: '100%',  }}>
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
        <Footer />
      </div>
    </div>
  );
};

export default HighAdminChild;