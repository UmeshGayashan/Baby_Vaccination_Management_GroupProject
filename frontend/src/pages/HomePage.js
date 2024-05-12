
import AbFrame from "../components/AbFrame";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>

      <div style={{ minHeight: "flex" }}>
        <section   >
          <Navbar />
          <Header />
          <AbFrame/>
        </section>

      </div>
    </div>
  );
};

export default HomePage;
