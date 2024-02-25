import Tint from "./Tint";
import "./BackEnd.css";

const BackEnd = () => {
  return (
    <section className="back-end1">
      <div className="u-i-u-x">
        <div className="front-end">
          <div className="socialrow-projectmanager">
            <h1 className="meet-our-team">Meet our team</h1>
            <div className="lorem-ipsum-dolor8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </div>
          </div>
        </div>
        <div className="b-g1">
          <Tint image="/image-1@2x.png" telana="Telana" backEnd="Back End" />
          <Tint
            image="/image-2@2x.png"
            telana="Maleesha"
            backEnd="UI UX"
            propWidth="296px"
            propPadding="unset"
            propPadding1="0px var(--padding-3xs)"
            propTextAlign="left"
          />
          <Tint
            image="/image-3@2x.png"
            telana="Chethana"
            backEnd="Front End"
            propWidth="296px"
            propPadding="unset"
            propPadding1="0px var(--padding-11xs)"
            propTextAlign="left"
          />
          <div className="tint3">
            <img className="image-icon2" alt="" src="/image-4@2x.png" />
            <div className="umesh-parent">
              <div className="umesh">Umesh</div>
              <div className="project-manager-parent">
                <div className="project-manager1">Project manager</div>
                <div className="social-row2">
                  <img
                    className="facebook-negative4"
                    alt=""
                    src="/facebook--negative.svg"
                  />
                  <img
                    className="twitter-negative1"
                    alt=""
                    src="/twitter--negative.svg"
                  />
                  <img
                    className="linkedin-negative1"
                    alt=""
                    src="/linkedin--negative.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackEnd;
