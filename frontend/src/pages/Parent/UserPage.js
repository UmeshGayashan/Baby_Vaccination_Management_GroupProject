import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import BGRectangle from "../../components/BGRectangle";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import FrameContainer from "../../components/FrameContainer";
import Footer from "../../components/Footer";
import Dropdown_01 from "../../components/dropdown";
import UserNavBar from "../../components/user_nav";
import UserDashBoard from "../../components/userdashboard";
import NotificationList from "../../components/NotificationList";
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

const UserPage = () => {
  const [selectedBabyVaccinations, setSelectedBabyVaccinations] = useState([]);
  const { user } = useAuth();
  const [babies, setBabies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBabies = async () => {
      try {
        const response = await fetch(`http://localhost:4000/parent/get/${user.nic}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        const data = await response.json();

        if (response.ok) {
          setBabies(data);
          fetchVaccinationsForBabies(data);
        } else {
          throw new Error(data.error || 'Invalid response format');
        }
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    const fetchVaccinationsForBabies = async (babies) => {
      const babiesWithVaccinations = await Promise.all(babies.map(async (baby) => {
        const vacResponse = await fetch(`http://localhost:4000/parent/vac/${baby.bid}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        const vacData = await vacResponse.json();
        if (vacResponse.ok) {
          return { ...baby, vaccinations: vacData };
        } else {
          return { ...baby, vaccinations: [] }; // No vaccinations found or error occurred
        }
      }));
      setBabies(babiesWithVaccinations);
    };

    if (user && user.userType === 'Guardian') {
      fetchBabies();
    }
  }, [user]);

  const onBabyClick = async (baby) => {
    try {
      const response = await fetch(`http://localhost:4000/parent/vac/${baby.bid}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const data = await response.json();

      if (response.ok) {
        setSelectedBabyVaccinations(data);
      } else {
        throw new Error(data.error || 'Invalid response format');
      }
    } catch (error) {
      setError('Error fetching vaccination details');
    }
  };

  const handleCellEditCommit = (params) => {
    // Your logic to handle the cell edit commit
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
              <div className="default-slot"><Dropdown_01 /></div>
              <div className="custom-page-heading">
                <div className="box7">
                  <div className="title-and-contents">
                    <h1 className="page-header">Track Your Child Vaccinations</h1>
                    <div className="stack"></div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="paper">
                  <div className="custom-users-management-tabl">
                    <div>
                      <h1>Welcome, {user?.username}</h1>
                      {loading ? (
                        <p>Loading...</p>
                      ) : error ? (
                        <p>{error}</p>
                      ) : (
                        <>
                          <h2>Your Babies:</h2>
                          {babies.length > 0 ? (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                              {babies.map((baby, index) => (
                                <div
                                  key={index}
                                  style={{
                                    border: '1px solid #ccc',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                  }}
                                  onClick={() => onBabyClick(baby)}
                                >
                                  <h3>{baby.babyName.firstName} {baby.babyName.lastName}</h3>
                                  <p><strong>Birth Date:</strong> {new Date(baby.birthDate).toLocaleDateString()}</p>
                                  <p><strong>Hospital:</strong> {baby.hospitalName}</p>
                                  <p><strong>Weight:</strong> {baby.weight} kg</p>
                                  <p><strong>Gender:</strong> {baby.gender}</p>
                                  <p><strong>BabyID:</strong> {baby.bid}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p>No babies found.</p>
                          )}
                        </>
                      )}
                    </div>
                    <div className="table">
                      <div style={{ height: 500, width: '100%' }}>
                        <DataGrid
                          rows={selectedBabyVaccinations}
                          columns={columns}
                          pageSize={12}
                          rowsPerPageOptions={[12]}
                          checkboxSelection
                          disableSelectionOnClick
                          onEditCellChangeCommitted={handleCellEditCommit}
                          getRowId={(row) => row._id}
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
              <div className="go-to-calendar" style={{ height: "150px", marginTop: "60px", marginBottom: "150px" }}>
                <div className="list">
                  <div className="header">
                    <div className="span">UPCOMING VACCINE</div>
                  </div>
                  <NotificationList />
                </div>
              </div>
            </div>
          </div>
        </section>
        <FrameContainer />
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
                  fontSize: 16,
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

export default UserPage;
