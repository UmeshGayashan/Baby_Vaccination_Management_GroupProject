import { Button } from "@mui/material";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import "../pageCss/UserPage.css";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../../components/comCss/Minheight.css";
import BGRectangle2 from "../../components/headerbg";
import LANavbar from "../../components/LA_Nav";
import HAdminDashBoard from "../../components/HighAdminDashboard";
import ANotificationList from "../../components/AdminNotification";

const columns = [
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'hcpNIC', headerName: 'NIC', width: 150 },
  { field: 'hcpPostalCode', headerName: 'Postal Code', width: 130 },
  { field: 'hcpEmail', headerName: 'Email', width: 180 },
  { field: 'username', headerName: 'Username', width: 130 }
];

const HighAdminProfession = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchHealthcareProfessionals = async () => {
      try {
        const response = await fetch('http://localhost:4000/admin/healthcares');
        const data = await response.json();
        const formattedData = data.map(hcp => ({
          id: hcp._id,
          firstName: hcp.hcpName.firstName,
          lastName: hcp.hcpName.lastName,
          hcpNIC: hcp.hcpNIC,
          hcpPostalCode: hcp.hcpPostalCode,
          hcpEmail: hcp.hcpEmail,
          username: hcp.username
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
        <BGRectangle2 />
        <section className="image-placeholder">
          <HAdminDashBoard />
          <div className="label-text">
            <div className="minheight">
              <div className="default-slot">
                <h1 className="page-header">Professionals Collection</h1>
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
                          <Button
                            className="button-row"
                            href="/update-profession"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginLeft: "200px",
                              textTransform: "none",
                              color: "#1d2130",
                              fontSize: "14px",
                              background: "#fff",
                              borderRadius: "10px",
                              borderColor: "black",
                              borderWidth: "2px",
                              borderStyle: "solid",
                              "&:hover": { background: "#fff" },
                              width: 50,
                            }}
                          >
                            Update
                          </Button>
                        </div>
                        <div className="textfield1">
                          <Button
                            className="button-row"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginLeft: "10px",
                              textTransform: "none",
                              color: "white",
                              fontSize: "14px",
                              background: "light blue",
                              borderRadius: "10px",
                              borderColor: "black",
                              "&:hover": { background: "light blue" },
                              width: 50,
                            }}
                          >
                            DELETE
                          </Button>
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
          <div className="text-container">
            <div className="desktopdatepicker-parent">
              <div className="go-to-calendar" style={{ marginTop: "-30px" }}>
                <div className="list">
                  <div className="header-picker">
                    <DesktopDatePicker />
                  </div>
                </div>
              </div>
              <div className="go-to-calendar" style={{ height: "130px", marginTop: "60px", marginBottom: "150px" }}>
                <div className="list">
                  <div className="header">
                    <div className="span">NOTIFICATIONS</div>
                  </div>
                  <ANotificationList />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="you-message-frame">
          <div className="cta">
            <div className="content">
              <h1 className="you-can-take">
                You can take advice from provided doctors for children with special needs!
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

export default HighAdminProfession;
