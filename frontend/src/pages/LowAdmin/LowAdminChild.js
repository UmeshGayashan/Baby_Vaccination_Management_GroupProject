import { Button } from "@mui/material";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import "../pageCss/UserPage.css";
import Footer from "../../components/Footer";
import React, { useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import UserNavBar from "../../components/user_nav";
import "../../components/comCss/Minheight.css";
import LAdminDashBoard from "../../components/LAdashboard";
import BGRectangle2 from "../../components/headerbg";
import LANavbar from "../../components/LA_Nav";

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

const LowAdmin = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchBabies = async () => {
      try {
        const response = await fetch('http://localhost:4000/healthcare/babies');
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
        <BGRectangle2/>
        <section className="image-placeholder" style={{marginBottom:"50px"}}>
          <LAdminDashBoard />
          <div className="label-text">
            {/* table */}
            <div className="minheight" >
              <div className="default-slot"> <h1 className="page-header">Child Collection</h1></div>
              <div className="card">
                <div className="paper">
                  <div className="custom-users-management-tabl" >
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
                          <Button className="button-row" href="/update-child"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginLeft: "200px",
                              extTransform: "none",
                              color: "#1d2130",
                              fontSize: "14px",
                              background: "#fff",
                              borderRadius: "10x 10px 10px 10px",
                              borderColor: "black",
                              borderWidth: "2px",
                              borderStyle: "solid",
                              "&:hover": { background: "#fff" },
                              width: 50,

                            }}>Update</Button>
                        </div>

                        <div className="textfield1">
                          <Button className="button-row"
                            disableElevation={true}
                            variant="contained"
                            sx={{
                              marginLeft: "10px",
                              extTransform: "none",
                              color: "white",
                              fontSize: "14px",
                              background: "light blue",
                              borderRadius: "10x 10px 10px 10px",
                              borderColor: "black",
                              "&:hover": { background: "light blue" },
                              width: 50,

                            }}>View</Button>
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
          {/* right section */}
          <div className="text-container">
            <div className="desktopdatepicker-parent" >



              <div className="go-to-calendar" >
                <div className="list">
                  <div className="header-picker">
                    <DesktopDatePicker />
                  </div>
                </div>
              </div>

              {/* <div className="go-to-calendar" style={{height:"150px" , marginTop:"60px", marginBottom:"150px"}}>
              <div className="list" > 
              <div className="header">
                  <div className="span">UPCOMING VACCINE</div>
                </div>
              
               <NotificationList/></div>
            </div> */}

            </div>
          </div>
        </section>
       

        {/* special need section */}
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

export default LowAdmin;