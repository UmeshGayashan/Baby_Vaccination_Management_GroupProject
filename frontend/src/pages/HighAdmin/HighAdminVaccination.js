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
  { field: 'bid', headerName: 'BID', width: 100 },
  { field: 'vacname', headerName: 'Vaccine Name', width: 180 },
  { field: 'vaccinator', headerName: 'Vaccinator', width: 150 },
  { field: 'vaccineNo', headerName: 'Vaccine No', width: 150 },
  { field: 'bottle_code', headerName: 'Bottle Code', width: 180 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'time', headerName: 'Time', width: 150 },
  { field: 'location', headerName: 'Location', width: 180 },
  { field: 'nextDate', headerName: 'Next Date', width: 150 },
  { field: 'nextTime', headerName: 'Next Time', width: 150 },
  { field: 'status', headerName: 'Status', width: 100 },
];

const initialRows = [];

const HighAdminVaccination = () => {
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    const fetchVaccinations = async () => {
      try {
        const response = await fetch('http://localhost:4000/admin/vaccinations');
        const data = await response.json();
        const formattedData = data.map(vaccination => ({
          id: vaccination._id,
          bid: vaccination.bid,
          vacname: vaccination.vacname,
          vaccinator: vaccination.vaccinator,
          vaccineNo: vaccination.vaccineNo,
          bottle_code: vaccination.bottle_code,
          date: vaccination.dateTime.date,
          time: vaccination.dateTime.time,
          location: vaccination.location,
          nextDate: vaccination.nextDateTime?.date,
          nextTime: vaccination.nextDateTime?.time,
          status: vaccination.status,
        }));
        setRows(formattedData);
      } catch (error) {
        console.error('Error fetching vaccination data:', error);
      }
    };

    fetchVaccinations();
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
              <div className="default-slot"> <h1 className="page-header">Vaccination Collection</h1></div>
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
                              textTransform: "none",
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
                                textTransform: "none",
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
                            <Button href="/update-profession"
                              disableElevation={true}
                              variant="contained"
                              sx={{
                                textTransform: "none",
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
          <div className="text-container" style={{marginTop:"50px"}}>
            <div className="desktopdatepicker-parent" >
              <div className="go-to-calendar" style={{ marginTop: "-30px" }} >
                <div className="list">
                  <div className="header-picker">
                    <DesktopDatePicker />
                  </div>
                </div>
              </div>
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

export default HighAdminVaccination;
