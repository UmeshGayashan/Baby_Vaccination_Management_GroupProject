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

const HighAdminChild = () => {
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
      <LANavbar />
      <div className="user-page">
        <BGRectangle2 />
        <section className="image-placeholder">
          <HAdminDashBoard />
          <div className="label-text">
            <div className="minheight">
              <div className="default-slot">
                <h1 className="page-header">Parent Collection</h1>
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
                            href="/hupdate-perant"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginLeft: "200px",
                              textTransform: "none",
                              color: "#1d2130",
                              fontSize: "14px",
                              background: "#fff",
                              borderRadius: "10x 10px 10px 10px",
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
                              borderRadius: "10x 10px 10px 10px",
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
