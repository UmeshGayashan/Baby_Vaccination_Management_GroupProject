import { Button } from "@mui/material";
import "./FacebookLink.css";
import DesktopDatePicker from "./DesktopDatePicker";
import DatePicker2 from "./Datepicker_2";

const FacebookLink = () => {
  return (
    <section className="facebook-link">
      <div className="instagram-link">
        <h1 className="information-form">Information Form</h1>
        <div className="text-input">
          <div className="icon-container">

          <div className="password3">
              <div className="input-text-label3">Mother NIC</div>
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


          <div className="c-t-a-button-group">
            <div className="footer-frame">
              <div className="list1">
                <div className="header2">
                  <div className="span4">UPCOMING VACCINE</div>
                </div>
                <div className="list-item28">
                 
                  <div className="v-list-item-content3">
                    <div className="single-line-item3">VACCINE NAME</div>
                    <div className="secondary-text3">Secondary text</div>
                  </div>
                  
                </div>
                <div className="list-item29">
                  
                  <div className="v-list-item-content4">
                    <div className="single-line-item4">VACCINE NAME</div>
                    <div className="secondary-text4">Secondary text</div>
                  </div>
                 
                </div>
                <div className="list-item30">
                 
                  <div className="v-list-item-content5">
                    <div className="single-line-item5">VACCINE NAME</div>
                    <div className="secondary-text5">Secondary text</div>
                  </div>
                  
                </div>
              </div>
              <div className="add-remainders-to">
                Add Remainders To Colander
              </div>
            </div>

            <div className="desktopdatepicker4">
              <div><DesktopDatePicker /></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FacebookLink;
