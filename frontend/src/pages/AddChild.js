
import HorizontalSpacing from "../components/AC_navbar";
import HomeLink from "../components/HomeLink";
import FacebookLink from "../components/FacebookLink";
import FrameComponent6 from "../components/FrameComponent6";
import Footer2 from "../components/Footer2";
import "./AddChild.css";

const AddChild = () => {


  return (
    <div className="add-child">
      <HorizontalSpacing />
      <HomeLink addChild="Add Child" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>
      <FacebookLink/>
      <FrameComponent6/>
      <Footer2 />
    </div>
  );
};

export default AddChild;
