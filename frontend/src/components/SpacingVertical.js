import CardFrame from "./CardFrame";
import Property1Default from "./Property1Default";
import "./comCss/SpacingVertical.css";

const SpacingVertical = () => {
  return (
    <div className="spacing-vertical15">
      <div className="primary-button-text">
        <div className="container-stack">
          <CardFrame />
        </div>
        <div className="main1">
          <Property1Default />
        </div>
      </div>
    </div>
  );
};

export default SpacingVertical;
