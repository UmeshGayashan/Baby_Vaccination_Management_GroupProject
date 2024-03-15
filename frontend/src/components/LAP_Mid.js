
import "./comCss/Minheight.css";
import LAPTable from "./LAP_table";
import { Button } from "@mui/material";


const LAP_MID = () => {
    return (
        <div className="minheight">

            <div className="custom-page-heading">
                <div className="box7">
                    <div className="title-and-contents">
                        <h1 className="page-header">Parent Collection</h1>
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
                                    <Button className="button-row" href="/add-parent"
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

                                        }}>View</Button>
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

export default LAP_MID;
