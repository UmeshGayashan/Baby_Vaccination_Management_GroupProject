import "./comCss/BGRectangle.css";

const BGRectangle = () => {
  return (
    <div className="b-g-rectangle">
      <img className="bg-image-icon1" alt="" src="/bg-image@2x.png" />
      <div className="label-shape">
        <div className="label-shape1">
          <h1 className="get-your-childrens-container1">
            <p className="get-your-childrens1">Get Your Children's</p>
            <p className="vaccine1">Vaccine</p>
            <p className="we-remind-you1">We remind You</p>
          </h1>
          <b className="the-safety-of">
            The safety of your child is our top priority. We prioritize
            evidence-based information, staying abreast of the latest research
            and guidelines from reputable health organizations. Rest assured,
            the information provided on [Your Website Name] is designed to help
            you make the best decisions for your child's health.
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

export default BGRectangle;
