
import {Routes,Route,} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import UserPage from "./pages/UserPage";
import LowAdmin from "./pages/LowAdmin";
import LowAdminParants from "./pages/LowAdminParants";
import AddChild from "./pages/AddChild";
import UpdateChild from "./pages/UpdateChild";
import AddPerant from "./pages/AddPerant";
import RecoverPassword from "./pages/RecoverPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Vaccines from "./pages/Vaccines";
import HighAdminParants from "./pages/HighAdminParants";
import Notification1 from "./pages/Notification1";
import VDetails from "./pages/VaccinationDetails";
import Table from "./pages/Table";
import HighAdminChild from "./pages/HighAdminChild";
import HighAdminProffessions from "./pages/HighAdminProffessions";
import UpdateParent from "./pages/UpdateParent"
import UpdateProffessions from "./pages/UpdateProffessions";
import AddProffessions from "./pages/AddProfessionals";
import IVaccines from "./pages/Importantvaccines";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/user-page" element={<UserPage />} />
      <Route path="/low-admin" element={<LowAdmin />} />
      <Route path="/low-admin-parants" element={<LowAdminParants />} />
      <Route path="/add-child" element={<AddChild />} />
      <Route path="/update-child" element={<UpdateChild />} />
      <Route path="/add-perant" element={<AddPerant />} />
      <Route path="/update-perant" element={<UpdateParent />} />
      <Route path="/add-proffession" element={<AddProffessions />} />
      <Route path="/update-proffession" element={<UpdateProffessions />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vaccines/1" element={<Vaccines />} />
      <Route path="/high-admin-parants" element={<HighAdminParants />} />
      <Route path="/high-admin-proffessions" element={<HighAdminProffessions />} />
      <Route path="/high-admin-child" element={<HighAdminChild />} />
      <Route path="/notification" element={<Notification1 />} />
      <Route path="/v-details" element={<VDetails/>}/>
      <Route path="/table" element={<Table/>}/>
      <Route path="/iv" element={<IVaccines/>}/>
    </Routes>
  );
}

export default App;
