import "./comCss/HomeLink.css";

const HomeLink = ({ addChild }) => {
  return (
    <section className="home-link">
      <div className="about-us-link">
        <div className="bg12" />
        <h1 className="add-child1">{addChild}</h1>
        <div className="what-we-do-link">
          <img
            className="contact-link-icon"
            loading="eager"
            alt=""
            src="/2-101@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeLink;
