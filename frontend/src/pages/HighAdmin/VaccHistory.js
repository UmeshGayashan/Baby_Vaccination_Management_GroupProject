import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import BGRectangle from "../../components/BGRectangle";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import Footer from "../../components/Footer";
import UserNavBar from "../../components/user_nav";
import UserDashBoard from "../../components/userdashboard";
import NotificationList from "../../components/NotificationList";
import { Button, Snackbar, Alert, TextField } from "@mui/material";
import { useAuth } from '../../context/AuthContext';
import "../pageCss/UserPage.css";
import "../../components/comCss/Minheight.css";

const columns = [
  { field: 'vacname', headerName: 'Vaccination', width: 180 },
  { field: 'location', headerName: 'Place', width: 180 },
  { field: 'vaccinator', headerName: 'Vaccinator', width: 130 },
  { field: 'status', headerName: 'Verification', width: 130 },
  { field: 'bottle_code', headerName: 'Bottle Code', width: 130 },
  { field: 'vaccineNo', headerName: 'Vaccine No', width: 90 },
  {
    field: 'date',
    headerName: 'Date',
    width: 120,
    valueGetter: (params) => params.row.dateTime?.date ? new Date(params.row.dateTime.date).toLocaleDateString() : 'N/A',
  },
  {
    field: 'nextDate',
    headerName: 'Next Date',
    width: 120,
    valueGetter: (params) => params.row.nextDateTime?.date ? new Date(params.row.nextDateTime.date).toLocaleDateString() : 'N/A',
  },
  {
    field: 'nextTime',
    headerName: 'Next Time',
    width: 120,
    valueGetter: (params) => params.row.nextDateTime?.time || 'N/A',
  }
];

const VaccHistory = () => {
  const [bid, setBid] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });
  const [selectedBabyVaccinations, setSelectedBabyVaccinations] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>{
    const getAccountInfo = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/baby-acc-info/${bid}`);
          if (response.ok) {
            const data = await response.json();
            setAccountInfo(data);
            await fetchVaccinationsForBaby(bid);
          } else {
            setNotification({ open: true, message: 'Failed to get account details', severity: 'error' });
          }
        } catch (error) {
          setNotification({ open: true, message: 'An error occurred', severity: 'error' });
        } finally {
          setLoading(false);
        }
      };
    
      const fetchVaccinationsForBaby = async (bid) => {
        try {
          const response = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/vac/${bid}`, {
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
          });
          const data = await response.json();
          if (response.ok) {
            setSelectedBabyVaccinations(data);
          } else {
            setSelectedBabyVaccinations([]);
            throw new Error(data.error || 'Invalid response format');
          }
        } catch (error) {
          setError('Error fetching vaccination details');
        }
      };
  })

  const handleSearch = () => {
    if (bid.trim() !== '') {
      getAccountInfo();
    } else {
      setNotification({ open: true, message: 'Please enter a Baby ID', severity: 'warning' });
    }
  };

  const handleCellEditCommit = (params) => {
    console.log(params);
  };

  return (
    <div>
      <UserNavBar />
      <div className="user-page">
        <BGRectangle />
        <section className="image-placeholder">
          <UserDashBoard />
          <div className="label-text">
            <div className="minheight">
              <div className="custom-page-heading">
                <div className="box7">
                  <div className="title-and-contents" style={{ marginTop: "-30px" }}>
                    <h1 className="page-header">Track Your Child's Vaccinations</h1>
                    <div className="stack"></div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="paper">
                  <div className="custom-users-management-table" style={{ backgroundColor: "#fff9c7" }}>
                    <div style={{ alignContent: "center", marginLeft: "40px", marginBottom: "20px" }}>
                      <div style={{ fontSize: "30px", fontWeight: "600", marginTop: "20px" }}>Welcome {user?.username}</div>
                      <div style={{ marginTop: "20px" }}>
                        <TextField
                          label="Enter Baby ID"
                          variant="outlined"
                          value={bid}
                          onChange={(e) => setBid(e.target.value)}
                          style={{ marginRight: "10px" }}
                        />
                        <Button variant="contained" color="primary" onClick={handleSearch}>
                          Search
                        </Button>
                      </div>
                      {loading ? (
                        <p>Loading...</p>
                      ) : error ? (
                        <p>{error}</p>
                      ) : accountInfo ? (
                        <>
                          <div style={{ marginTop: "20px" }}>
                            <h2>Baby Account Information:</h2>
                            <p><strong>Name:</strong> {accountInfo.babyName.firstName} {accountInfo.babyName.lastName}</p>
                            <p><strong>Birth Date:</strong> {new Date(accountInfo.birthDate).toLocaleDateString()}</p>
                            <p><strong>Hospital:</strong> {accountInfo.hospitalName}</p>
                            <p><strong>Weight:</strong> {accountInfo.weight} kg</p>
                            <p><strong>Gender:</strong> {accountInfo.gender}</p>
                          </div>
                          <div className="table" style={{ margin: "50px", backgroundColor: "#fff9c7" }}>
                            <div style={{ height: 500, width: '100%' }}>
                              <DataGrid
                                rows={selectedBabyVaccinations}
                                columns={columns}
                                pageSize={12}
                                rowsPerPageOptions={[12]}
                                checkboxSelection
                                disableSelectionOnClick
                                onCellEditCommit={handleCellEditCommit}
                                getRowId={(row) => row._id}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <p>No information available. Enter a Baby ID to get details.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-container" style={{ marginLeft: "25px" }}>
            <div className="desktopdatepicker-parent">
              <div className="go-to-calendar" style={{ marginTop: "50px" }}>
                <div className="list">
                  <div className="header-picker">
                    <DesktopDatePicker />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={() => setNotification({ ...notification, open: false })}
      >
        <Alert onClose={() => setNotification({ ...notification, open: false })} severity={notification.severity}>
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default VaccHistory;
