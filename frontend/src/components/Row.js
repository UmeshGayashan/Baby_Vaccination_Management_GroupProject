import { useMemo } from "react";
import "./Row.css";

const Row = ({
  chip,
  body2,
  propBackgroundColor,
  propBackgroundColor1,
  propPadding,
  propAlignSelf,
  propWidth,
}) => {
  const chipStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const avatarStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const typographyStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const typography1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className="row-4">
      <div className="cell-1">
        <div className="height">
          <div className="checkbox">
            <div className="padding">
              <input className="hidden" type="checkbox" />
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="typography">
            <div className="body2">Cell</div>
          </div>
          <div className="typography1">
            <div className="body21">Typography</div>
          </div>
        </div>
      </div>
      <div className="cell-2">
        <div className="box2">
          <div className="typography2">
            <div className="body22">Cell</div>
          </div>
          <div className="typography3">
            <div className="body23">Typography</div>
          </div>
        </div>
      </div>
      <div className="cell-3-wrapper">
        <div className="cell-3">
          <div className="box3">
            <div className="typography4">
              <div className="body24">Cell</div>
            </div>
            <div className="typography5">
              <div className="body25">Typography</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cell-4">
        <div className="box4">
          <button className="chip" style={chipStyle}>
            <div className="avatar" style={avatarStyle}>
              <div className="border">
                <div className="badge">
                  <div className="min-width" />
                </div>
              </div>
              <div className="op">OP</div>
              <div className="min-width1" />
            </div>
            <div className="typography6" style={typographyStyle}>
              <div className="chip1">{chip}</div>
            </div>
            <img className="cancelfilled-icon" alt="" src="/cancelfilled.svg" />
          </button>
          <div className="typography7" style={typography1Style}>
            <div className="body26">Typography</div>
          </div>
        </div>
      </div>
      <div className="cell-5">
        <div className="box5">
          <div className="typography8">
            <div className="body27">Cell</div>
          </div>
          <div className="typography9">
            <div className="body28">Typography</div>
          </div>
        </div>
      </div>
      <div className="cell-6-wrapper">
        <div className="cell-6">
          <div className="box6">
            <div className="typography10">
              <div className="body29">{body2}</div>
            </div>
            <div className="typography11">
              <div className="body210">Typography</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
