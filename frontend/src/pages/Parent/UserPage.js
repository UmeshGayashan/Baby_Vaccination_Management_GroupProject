import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import BGRectangle from "../../components/BGRectangle";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import Footer from "../../components/Footer";
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
  { field: 'vaccineNo', headerName: 'Vaccine No', width: 100 },
  {
    field: 'date',
    headerName: 'Given Date',
    width: 120,
    valueGetter: (params) => params.row.dateTime?.date ? new Date(params.row.dateTime.date).toLocaleDateString() : 'N/A',
  },
  {
    field: 'nextDate',
    headerName: 'Next Date',
    width: 120,
    valueGetter: (params) => params.row.nextDateTime?.date ? new Date(params.row.nextDateTime.date).toLocaleDateString() : 'N/A',
  },
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
        const response = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/parent/get/${user.nic}`, {
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
        const vacResponse = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/parent/vac/${baby.bid}`, {
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
      const response = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/parent/vac/${baby.bid}`, {
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
    <div >
      <UserNavBar />
      <div className="user-page" >
        <BGRectangle />
        <section className="image-placeholder">
          <UserDashBoard />
          <div className="label-text">
            <div className="minheight">
              <div className="custom-page-heading">
                <div className="box7">
                  <div className="title-and-contents" style={{ marginTop: "-30px" }}>
                    <h1 className="page-header">Track Your Child Vaccinations</h1>
                    <div className="stack"></div>
                  </div>
                </div>
              </div>
              <div className="card" >
                <div className="paper">
                  <div className="custom-users-management-tabl" style={{ backgroundColor: "#fff9c7" }} >
                    <div style={{ alignContent: "center", marginLeft: "40px", marginBottom: "20px" }}>
                      <div style={{ fontSize: "30px", fontWeight: "600", marginTop: "20px" }}>Welcome {user?.username}</div>
                      {loading ? (
                        <p>Loading...</p>
                      ) : error ? (
                        <p>{error}</p>
                      ) : (
                        <>
                          <div style={{ fontSize: "30px", fontWeight: "500", marginTop: "20px" }}>Your Babies:</div>
                          {babies.length > 0 ? (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: "20px" }}>
                              {babies.map((baby, index) => (
                                <div
                                  key={index}
                                  style={{

                                    backgroundColor: "#fff494",
                                    fontSize: "18px",
                                    border: '2px solid #ccc',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s',
                                  }}
                                  onClick={() => onBabyClick(baby)}
                                >
                                  <h3>{baby.babyName.firstName} {baby.babyName.lastName}</h3>
                                  <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                                    <p><strong>Birth Date:</strong> {new Date(baby.birthDate).toLocaleDateString()}</p>
                                    <p><strong>Hospital:</strong> {baby.hospitalName}</p>
                                    <p><strong>Weight:</strong> {baby.weight} kg</p>
                                    <p><strong>Gender:</strong> {baby.gender}</p>
                                    <p><strong>BabyID:</strong> {baby.bid}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p>No babies found.</p>
                          )}
                        </>
                      )}
                    </div>
                    {/* <div className="table" style={{marginTop:"50px", marginLeft:"20px", marginRight:"20px", marginBottom:"50px"}}>
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-container" style={{ marginLeft: "25px" }}>
            <div className="desktopdatepicker-parent">
              <div className="go-to-calendar" style={{ marginTop: "50px" }}>
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
          </div> */}
        </section>

        <div className="table" style={{ margin: "50px", backgroundColor: "#fff9c7" }}>
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
      <div style={{ marginTop: "50px" }}>  <Footer /></div>
    </div>
  );
};

export default UserPage;
