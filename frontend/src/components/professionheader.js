import "./comCss/BGRectangle.css";

const BGRectangle3 = () => {
  return (
    <div className="b-g-rectangle">
      <img className="bg-image-icon1" alt="" src="/bg-image@2x.png" />
      <div className="label-shape">
        <div className="label-shape1">
          <h1 className="get-your-childrens-container1">
            <p className="get-your-childrens1">Maintain Your</p>
            <p className="vaccine1">Family</p>
            <p className="we-remind-you1">Help Them...!</p>
          </h1>
          <b className="the-safety-of" style={{ fontSize: "40px" }}>
            Welcome to Professional's collection
          </b>
        </div>
      </div>
      <div className="frame-content1">
        <img
          className="container-wrapper-icon"
          loading="eager"
          alt=""
          src="/11.svg"
        />
        <img
          className="container-wrapper-icon1"
          loading="eager"
          alt=""
          src="/21.svg"
        />
        <img
          className="container-wrapper-icon2"
          loading="eager"
          alt=""
          src="/31.svg"
        />
        <img
          className="container-wrapper-icon3"
          loading="eager"
          alt=""
          src="/41.svg"
        />
      </div>
    </div>
  );
};

export default BGRectangle3;
