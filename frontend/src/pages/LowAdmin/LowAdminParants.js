import { Button } from "@mui/material";
import BGRectangle from "../../components/BGRectangle";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import "../pageCss/UserPage.css";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../../components/comCss/Minheight.css";
import LAdminDashBoard from "../../components/LAdashboard";
import LANavbar from "../../components/LA_Nav";

const columns = [
  {
    field: 'motherorGuardianName',
    headerName: 'Guardian Name',
    width: 200,
    valueGetter: (params) => {
      const name = params.row.motherorGuardianName;
      return name ? `${name.firstName} ${name.lastName}` : 'N/A';
    }
  },
  { field: 'motherorGuardianNIC', headerName: 'NIC', width: 150 },
  { field: 'Address', headerName: 'Address', width: 200 },
  { field: 'PostalCode', headerName: 'Postal Code', width: 100 },
  { field: 'guardianEmail', headerName: 'Email', width: 200 },
  { field: 'guardianTelephoneNumber', headerName: 'Telephone', width: 150 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'additionalInfo', headerName: 'Additional Info', width: 200 },
];

const initialRows = [];

const LowAdminParants = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await fetch('https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/parents');
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
        <BGRectangle />
        <section className="image-placeholder" style={{ marginBottom: "50px", marginTop: "20px" }}>
          <LAdminDashBoard />
          <div className="label-text" style={{ marginBottom: "10px" }}>

            <div className="minheight" style={{ marginTop: "-35px" }} >
              <div className="default-slot"> <h1 className="page-header">Parent Collection</h1></div>
              <div className="card">
                <div className="paper">
                  <div className="custom-users-management-tabl" >
                    <div className="custom-table-toolbar">
                      <div className="queries" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <div >
                          <Button href="/update-perant"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginTop: "20px",
                              marginLeft: "20px",
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

                            }}>Update Parents</Button>
                          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                            <Button href="/update-child"
                              disableElevation={true}
                              variant="contained"
                              sx={{

                                extTransform: "none",
                                marginLeft: "20px",
                                color: "#1d2130",
                                fontSize: "14px",
                                background: "#fff9c7",
                                borderRadius: "10x 10px 10px 10px",
                                borderColor: "black",
                                borderWidth: "2px",
                                borderStyle: "solid",
                                "&:hover": { background: "#fff" },
                                width: 300,

                              }}>Update child</Button>
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
          <div className="text-container" style={{ height: "-100px" }}>
            <div className="desktopdatepicker-parent" >

              <div className="go-to-calendar" style={{ height: "flex", marginTop: "-50px" }} >
                <div className="list" >
                  <div className="header-picker" style={{ marginTop: "-20px", marginBottom: "50px" }}>
                    <DesktopDatePicker />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* table */}
        <div className="table" style={{ marginBottom: "50px", marginLeft: "50px", marginRight: "50px", backgroundColor: "#fff9c7" }}>
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

        <Footer />
      </div>
    </div>
  );
};

export default LowAdminParants;