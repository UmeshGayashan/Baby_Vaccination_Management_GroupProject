import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import "../pageCss/AddChild.css";
import DatePicker2 from "../../components/Datepicker_2";
import { Button,} from "@mui/material";
import HAACNavbar from "../../components/HA_addchildnavbar";

const HUpdateChild = () => {

  return (
    <div className="add-child">
      {/* Navbar */}
    <HAACNavbar/>

      {/* header  */}
      <HomeLink addChild="Update Child" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>
      {/* first Input fields */}
      <section className="facebook-link">

      <div className="password3">
              <div className="input-text-label3">Child ID</div>
              <div className="input-field4">
                <div className="text3">
                  <input
                    className="type-here6"
                    placeholder="Enter Child ID"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className='container'>
          <h3>Account Details</h3>
          {/* <p>Account Number: {accountNo}</p> */}
          {/* <button onClick={getAccountInfo}>Get Account Info</button> */}
          {/* {accountInfo && ( */}
            <div>
              <h4>Account Details</h4>
              {/* <p>Name: {accountInfo.holderName}</p> */}
              {/* <p>Email: {accountInfo.holderEmail}</p> */}
              {/* <p>Balance: {accountInfo.balance}</p> */}
            </div>
          {/* )} */}
        </div>
      {/* <div className="instagram-link">
        <h1 className="information-form">Information Form</h1>
        <div className="text-input">
          <div className="icon-container">

          <div className="password3">
              <div className="input-text-label3">Child ID</div>
              <div className="input-field4">
                <div className="text3">
                  <input
                    className="type-here6"
                    placeholder="Enter Child ID"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="password3">
              <div className="input-text-label3">Mother/Guardian NIC</div>
              <div className="input-field4">
                <div className="text3">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />
                </div>
              </div>
            </div>
  
            <div className="password3">
              <div className="input-text-label3">Guardian NIC</div>
              <div className="input-field4">
                <div className="text3">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />
                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label4">Child Name</div>
              <div className="input-field5">
                <div className="text4">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label5">Father Name</div>
              <div className="input-field6">
                <div className="text5">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label6">Father NIC</div>
              <div className="input-field7">
                <div className="text6">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label7">Hospital Name</div>
              <div className="input-field8">
                <div className="text7">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label8">Weigh</div>
              <div className="input-field9">
                <div className="text8">
                  <input
                    className="type-here6"
                    placeholder="Weigh"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label9">OFC</div>
              <div className="input-field10">

                <div className="text8">
                  <input
                    className="type-here6"
                    placeholder="mm"
                    type="text"
                  />
                </div>
              </div>
            </div>


            <div className="clear-button">
              <div className="go-button">
              <div className="input-birth-day">Input Birth Day</div>
                <div className="spacing-vertical28">
                </div>
                <div className="spacing-vertical29">
                  <div className="min-height57" />
                </div>
                <div className="native-chrome-date-picker-2">
                  <DatePicker2 />
                </div>
              </div>

              <div className="go-button">
              <div className="input-birth-day">Registered Date</div>
                <div className="spacing-vertical28">
                </div>
                <div className="spacing-vertical29">
                  <div className="min-height57" />
                </div>
                <div className="native-chrome-date-picker-2">
                  <DatePicker2 />
                </div>
              </div>


            </div>
          </div>


        </div>
      </div> */}
    </section>

    {/* Vaccination Form */}

    <section className="facebook-link">
      <div className="instagram-link">
        <h1 className="information-form">Vaccination Form</h1>
        <div className="text-input">
          <div className="icon-container">

          <div className="password3">
              <div className="input-text-label3">Vaccination Name</div>
              <div className="input-field4">
                <div className="text3">
                  <input
                    className="type-here6"
                    placeholder="Enter Child ID"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="password3">
              <div className="input-text-label3">Vaccinator</div>
              <div className="input-field4">
                <div className="text3">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />
                </div>
              </div>
            </div>
  
            <div className="password3">
              <div className="input-text-label3">Bottle Code</div>
              <div className="input-field4">
                <div className="text3">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />
                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label4">Place</div>
              <div className="input-field5">
                <div className="text4">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />

                </div>
              </div>

            {/* </div>
            <div className="password3">
              <div className="input-text-label5">Father Name</div>
              <div className="input-field6">
                <div className="text5">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label6">Father NIC</div>
              <div className="input-field7">
                <div className="text6">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label7">Hospital Name</div>
              <div className="input-field8">
                <div className="text7">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label8">Weigh</div>
              <div className="input-field9">
                <div className="text8">
                  <input
                    className="type-here6"
                    placeholder="Weigh"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label9">OFC</div>
              <div className="input-field10">

                <div className="text8">
                  <input
                    className="type-here6"
                    placeholder="mm"
                    type="text"
                  />
                </div>
              </div>
            </div>


            <div className="clear-button">
              <div className="go-button">
              <div className="input-birth-day">Input Birth Day</div>
                <div className="spacing-vertical28">
                </div>
                <div className="spacing-vertical29">
                  <div className="min-height57" />
                </div>
                <div className="native-chrome-date-picker-2">
                  <DatePicker2 />
                </div>
              </div>

              <div className="go-button">
              <div className="input-birth-day">Registered Date</div>
                <div className="spacing-vertical28">
                </div>
                <div className="spacing-vertical29">
                  <div className="min-height57" />
                </div>
                <div className="native-chrome-date-picker-2">
                  <DatePicker2 />
                </div>
              </div> */}


            </div>
          </div>


        </div>
      </div>
    </section>
      
      
      <Footer />
    </div>
  );
};

export default HUpdateChild;
