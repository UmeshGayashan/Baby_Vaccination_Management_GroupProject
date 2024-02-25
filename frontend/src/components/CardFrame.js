import { useMemo } from "react";
import "./CardFrame.css";

const CardFrame = ({ propFlex, propAlignSelf }) => {
  const cardFrameStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div className="card-frame" style={cardFrameStyle}>
      <img className="bg-image-icon2" alt="" src="/bg-image@2x.png" />
      <div className="box-stack">
        <div className="row-cell">
          <h1 className="maintain-your-family-container">
            <p className="maintain-your">Maintain Your</p>
            <p className="family">Family</p>
            <p className="help-them">Help Them...!</p>
          </h1>
          <div className="checkbox-frame">
            <b className="the-safety-of1">
              The safety of your child is our top priority. We prioritize
              evidence-based information, staying abreast of the latest research
              and guidelines from reputable health organizations. Rest assured,
              the information provided on [Your Website Name] is designed to
              help you make the best decisions for your child's health.
            </b>
          </div>
        </div>
      </div>
      <div className="table-header">
        <img
          className="container-frame-icon"
          loading="eager"
          alt=""
          src="/12.svg"
        />
        <img
          className="container-frame-icon1"
          loading="eager"
          alt=""
          src="/22.svg"
        />
        <img
          className="container-frame-icon2"
          loading="eager"
          alt=""
          src="/32.svg"
        />
        <img
          className="container-frame-icon3"
          loading="eager"
          alt=""
          src="/42.svg"
        />
      </div>
    </div>
  );
};

export default CardFrame;
