import { Button, Snackbar, Alert } from "@mui/material";
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

const initialRows = [];

const HighAdminVaccination = () => {
  const [rows, setRows] = useState(initialRows);
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });

    // Utility function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null; // Return null if the cookie is not found
}

  useEffect(() => {
    const fetchVaccinations = async () => {
      try {

        const jwtToken = getCookie('jwt');
        if (!jwtToken) {
            console.error('No JWT token found');
            return null;
        }

        const response = await fetch('https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/vaccinations');
        const data = await response.json();
        console.log("Fetched data:", data);
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
          formattedNextDate: vaccination.nextDateTime?.date ? vaccination.nextDateTime.date.substring(0, 10) : null,
          // nextTime: vaccination.nextDateTime?.time,
          addedDate: vaccination.dateTime?.date,
          addedTime: vaccination.dateTime?.time,
          status: vaccination.status,
          dataEnterd: vaccination.dataEnterd
        }));
        console.log("Formatted data:", formattedData);  // Log formatted data
        setRows(formattedData);
      } catch (error) {
        console.error('Error fetching vaccination data:', error);
      }
    };

    fetchVaccinations();
  }, []);



  const handleSendMessage = async (bottleCode) => {
    try {
      const jwtToken = getCookie('jwt');
        if (!jwtToken) {
            console.error('No JWT token found');
            return null;
        }

      const response = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/vaccination/${bottleCode}`);
      const data = await response.json();
      if (response.ok) {
        const { nextVaccinationDate, nextVaccinationTime, parentMobileNumber,bid } = data;
        console.log("Next vaccination date:", nextVaccinationDate);
        console.log("Next vaccination time:", nextVaccinationTime);
        console.log("Parent mobile number:", parentMobileNumber);
        console.log("Baby Id:", bid);

        const messagePayload = {
          phoneNumber: parentMobileNumber,
          babyId: bid,
          nextDate: `${nextVaccinationDate} ${nextVaccinationTime}`
        };

        // Send the message backend
      const sendResponse = await fetch('https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/send-vaccination-reminder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messagePayload)
      });

      const sendResult = await sendResponse.json();

      if (sendResponse.ok) {
        console.log('Message sent successfully:', sendResult);
        setNotification({ open: true, message: 'Message sent successfully', severity: 'success' });
      } else {
        console.error('Error sending message:', sendResult.error);
        setNotification({ open: true, message: sendResult.error, severity: 'error' });
      }
        
      } else {
        console.error('Error fetching vaccination details:', data.error);
        setNotification({ open: true, message: data.error, severity: 'error' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const handleToggleStatus = async (id) => {
    try {
      const jwtToken = getCookie('jwt');
        if (!jwtToken) {
            console.error('No JWT token found');
            return null;
        }

      const updatedRows = rows.map(row => {
        if (row.id === id) {
          const newStatus = row.status === 'Approved' ? 'Pending' : 'Approved';
          return { ...row, status: newStatus };
        }
        return row;
      });
      setRows(updatedRows);

      const updatedRow = updatedRows.find(row => row.id === id);

      await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/update-vacc/${updatedRow.bottle_code}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: updatedRow.status }),
      });
    } catch (error) {
      console.error('Error updating vaccination status:', error);
    }
  };

  const columns = [
    { field: 'bid', headerName: 'BID', width: 100 },
    { field: 'vacname', headerName: 'Vaccine Name', width: 180 },
    { field: 'vaccinator', headerName: 'Vaccinator', width: 150 },
    { field: 'vaccineNo', headerName: 'Vaccine No', width: 150 },
    { field: 'bottle_code', headerName: 'Bottle Code', width: 180 },
    { field: 'location', headerName: 'Location', width: 180 },
    { field: 'formattedNextDate', headerName: 'Next Date', width: 150 },
    { field: 'status', headerName: 'Status', width: 100 },
    {
      field: 'sendMessage', headerName: 'Send Message', width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSendMessage(params.row.bottle_code)}
        >
          Send Message
        </Button>
      ),
    },
    {
      field: 'toggleStatus', headerName: 'Toggle Status', width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleToggleStatus(params.row.id)}
        >
          {params.row.status === 'Approved' ? 'Set Pending' : 'Set Approved'}
        </Button>
      ),
    },
    { field: 'dataEnterd', headerName: 'Data Added', width: 150 },
    { field: 'addedDate', headerName: 'Data', width: 150 },
    { field: 'addedTime', headerName: 'Time', width: 150 },
  ];

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
                <h1 className="page-header">Vaccination Collection</h1>
              </div>
              <div className="card">
                <div className="paper">
                  <div className="custom-users-management-tabl">
                    <div className="custom-table-toolbar">
                      <div className="queries" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div>
                          <Button href="/hupdate-perant"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginTop: "20px",
                              textTransform: "none",
                              color: "#1d2130",
                              fontSize: "14px",
                              background: "#fff9c7",
                              borderRadius: "10px 10px 10px 10px",
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
                                borderRadius: "10px 10px 10px 10px",
                                borderColor: "black",
                                borderWidth: "2px",
                                borderStyle: "solid",
                                "&:hover": { background: "#fff" },
                                width: 300,
                              }}>Update and delete child</Button>
                          </div>

                          <div style={{ marginBottom: "20px" }}>
                            <Button href="/update-profession"
                              disableElevation={true}
                              variant="contained"
                              sx={{
                                textTransform: "none",
                                color: "#1d2130",
                                fontSize: "14px",
                                background: "#fff9c7",
                                borderRadius: "10px 10px 10px 10px",
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
          <div className="text-container" style={{ marginTop: "50px" }}>
            <div className="desktopdatepicker-parent">
              <div className="go-to-calendar" style={{ marginTop: "-30px" }}>
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
        <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
      >
        <Alert onClose={handleCloseNotification} severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
      </div>
    </div>
  );
};

export default HighAdminVaccination;
