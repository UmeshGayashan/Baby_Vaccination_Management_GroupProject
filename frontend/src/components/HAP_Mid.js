
import "./Minheight.css";
import { Button } from "@mui/material";
import LAPTable from "./LAP_table";


const HAP_MID = () => {
    return (
        <div className="minheight">

            <div className="custom-page-heading">
                <div className="box7">
                    <div className="title-and-contents">
                        <h1 className="page-header">Parants Collection</h1>
                        <div className="stack">
                        </div>
                    </div>
                </div>
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
                                    <Button className="button-row" href="/update-perant"
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
                                            fontSize: "14px",  // Specify the unit for fontSize
                                            background: "light blue",
                                            borderRadius: "10x 10px 10px 10px",
                                            borderColor: "black",  // Add border color property
                                            "&:hover": { background: "light blue" },
                                            width: 50,

                                        }}>DELETE</Button>
                                </div>
                            </div>
                        </div>
                        <div className="table">
                            <LAPTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HAP_MID;