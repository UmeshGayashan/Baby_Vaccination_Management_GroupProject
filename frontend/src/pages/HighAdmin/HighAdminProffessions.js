import { Button } from "@mui/material";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import "../pageCss/UserPage.css";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../../components/comCss/Minheight.css";
import LANavbar from "../../components/LA_Nav";
import HAdminDashBoard from "../../components/HighAdminDashboard";
import ANotificationList from "../../components/AdminNotification";
import BGRectangle3 from "../../components/professionheader";

const columns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'hcpPosition', headerName: 'Position', width: 130 },
  { field: 'hcpNIC', headerName: 'NIC', width: 170 },
  { field: 'hcpPostalCode', headerName: 'Postal Code', width: 150 },
  { field: 'hcpEmail', headerName: 'Email', width: 280 },
  { field: 'username', headerName: 'Username', width: 130 }
];

const HighAdminProfession = () => {
  const [rows, setRows] = useState([]);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null; // Return null if the cookie is not found
  }

  useEffect(() => {
    const fetchHealthcareProfessionals = async () => {
      try {
        const jwtToken = getCookie('jwt');
        if (!jwtToken) {
            console.error('No JWT token found');
            return null;
        }
        const response = await fetch('https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/healthcares');
        const data = await response.json();
        const formattedData = data.map(hcp => ({
          id: hcp._id,
          firstName: hcp.hcpName.firstName,
          lastName: hcp.hcpName.lastName,
          hcpNIC: hcp.hcpNIC,
          hcpPostalCode: hcp.hcpPostalCode,
          hcpEmail: hcp.hcpEmail,
          username: hcp.username,
          hcpPosition: hcp.hcpPosition
        }));
        setRows(formattedData);
      } catch (error) {
        console.error('Error fetching healthcare professional data:', error);
      }
    };

    fetchHealthcareProfessionals();
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
        <BGRectangle3 />
        <section className="image-placeholder">
          <HAdminDashBoard />
          <div className="label-text">
            <div className="minheight">
              <div className="default-slot">
                <h1 className="page-header">Professionals Collection</h1>
              </div>
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

                          <div style={{ marginBottom: "20px" }}>
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
          <div className="text-container" style={{ marginTop: "50px" }}>
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

        <Footer />
      </div>
    </div>
  );
};

export default HighAdminProfession;