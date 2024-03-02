import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import Row from "./Row";
import "./Minheight.css";
import EditableDataTable from "../pages/Table";
import Dropdown from "./dropdown2";
import Dropdown_01 from "./dropdown";


const Minheight = () => {
  return (
    <div className="minheight">
      <div className="default-slot"><Dropdown_01/></div>
      <div className="custom-page-heading">
        <div className="box7">
          <div className="title-and-contents">
            <h1 className="page-header">Track Your Child Vaccinations</h1>
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
                <Dropdown/>
                  {/* <div className="input5"> */}

                    
                    {/* <input
                      className="content2"
                      placeholder="child"
                      type="text"
                    />
                    <div className="label-container1">
                      <div className="label1">Search</div>
                    </div>

                    <FormControl
                      className="container14"
                      variant="standard">
                      <InputLabel color="primary" />

                      <Select
                        color="primary"
                        disableUnderline
                        displayEmpty
                        IconComponent={() => (
                          <img
                            width="24px"
                            height="24px"
                            src="/arrowdropdownfilled.svg"
                            style={{}}
                          />
                        )}
                      >
                        <MenuItem>Child_01</MenuItem>
                        <MenuItem>Child_02</MenuItem>
                        <MenuItem>Child_03</MenuItem>
                        <MenuItem>Child_04</MenuItem>
                        <MenuItem>Child_05</MenuItem>
                      </Select>
                      <FormHelperText />
                        </FormControl>*/}
                  {/* </div>  */}
                </div>
              </div>
            </div>
            <div className="table">
              <EditableDataTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minheight;
