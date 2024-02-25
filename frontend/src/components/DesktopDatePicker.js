import { useMemo } from "react";
import "./DesktopDatePicker.css";

const DesktopDatePicker = ({
  propAlignSelf,
  propPadding,
  propHeight,
  propWidth,
  propGap,
  propAlignSelf1,
  propPadding1,
  propPadding2,
  propPadding3,
  propPadding4,
  propPadding5,
  propPadding6,
}) => {
  const desktopDatePickerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      height: propHeight,
      width: propWidth,
      gap: propGap,
    };
  }, [propAlignSelf, propPadding, propHeight, propWidth, propGap]);

  const rowStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const currentMonthStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const row1Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const row2Style = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const row3Style = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  const row4Style = useMemo(() => {
    return {
      padding: propPadding5,
    };
  }, [propPadding5]);

  const row5Style = useMemo(() => {
    return {
      padding: propPadding6,
    };
  }, [propPadding6]);

  return (
    <div className="desktopdatepicker" style={desktopDatePickerStyle}>
      <div className="row" style={rowStyle}>
        <div className="current-month" style={currentMonthStyle}>
          <div className="march-2019">December</div>
          <div className="march-2020">2021</div>
          <div className="iconbutton14">
            <div className="icon39">
              <img
                className="arrowdropdownfilled-icon"
                alt=""
                src="/arrowdropdownfilled-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="iconbutton15">
            <div className="icon40">
              <img
                className="chevronleftfilled-icon"
                loading="eager"
                alt=""
                src="/chevronleftfilled.svg"
              />
            </div>
          </div>
          <div className="iconbutton16">
            <div className="icon41">
              <img
                className="chevronrightfilled-icon"
                alt=""
                src="/chevronrightfilled.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row1" style={row1Style}>
        <div className="su">S</div>
        <div className="mo">M</div>
        <div className="tu">T</div>
        <div className="we">W</div>
        <div className="th">T</div>
        <div className="fr">F</div>
        <div className="sa">S</div>
      </div>
      <div className="dates">
        <div className="row2">
          <div className="container16">
            <div className="navbarbuttontext1">1</div>
            <div className="go-to-calendar1">2</div>
          </div>
        </div>
        <div className="row3" style={row2Style}>
          <div className="mask-container">2</div>
          <div className="mask-container1">3</div>
          <div className="empty-frame">4</div>
          <div className="empty-frame1">5</div>
          <div className="empty-frame2">6</div>
          <div className="empty-frame3">7</div>
          <div className="header-frame">8</div>
        </div>
        <div className="row4" style={row3Style}>
          <div className="div4">9</div>
          <div className="div5">10</div>
          <div className="mask2">
            <div className="active">
              <div className="none">11</div>
            </div>
          </div>
          <div className="div6">12</div>
          <div className="div7">13</div>
          <div className="div8">14</div>
          <div className="div9">15</div>
        </div>
        <div className="row5" style={row4Style}>
          <div className="div10">16</div>
          <div className="div11">17</div>
          <div className="div12">18</div>
          <div className="div13">19</div>
          <div className="div14">20</div>
          <div className="div15">21</div>
          <div className="div16">22</div>
        </div>
        <div className="row6" style={row5Style}>
          <div className="div17">23</div>
          <div className="div18">24</div>
          <div className="div19">25</div>
          <div className="div20">26</div>
          <div className="div21">27</div>
          <div className="div22">28</div>
          <div className="div23">29</div>
        </div>
        <div className="row7">
          <div className="container17">
            <div className="div24">30</div>
            <div className="div25">31</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopDatePicker;
