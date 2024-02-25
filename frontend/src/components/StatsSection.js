import PrimaryButton1 from "./PrimaryButton1";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="bg4" />
      <div className="details-for-vaccine">
        <div className="childrens-health-benefits">
          <h1 className="how-is-the">
            How is the registered Chilean's Age categorized
          </h1>
          <div className="we-understand-that">
            We understand that when you make a  donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </div>
        </div>
        <div className="frame-with-header-and-text">
          <PrimaryButton1 years="0-1 years" years1="5-8 years" />
          <PrimaryButton1
            years="1-3 years"
            years1="8-11 years"
            propPadding="0px var(--padding-19xl) 0px 0px"
          />
          <div className="frame-line">
            <div className="frame-content">
              <input className="text-block-line" type="checkbox" />
            </div>
            <div className="years2">3-5 years</div>
          </div>
        </div>
      </div>
      <div className="chart">
        <div className="frame-details" />
        <div className="frame-details1" />
        <div className="frame-details2" />
        <div className="frame-details3" />
        <div className="frame-details4" />
      </div>
    </section>
  );
};

export default StatsSection;
