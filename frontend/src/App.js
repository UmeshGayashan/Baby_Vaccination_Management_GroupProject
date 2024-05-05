
import {Routes,Route,} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecoverPassword from "./pages/RecoverPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Vaccines from "./pages/Vaccines";
import VDetails from "./pages/VaccinationDetails";
import Table from "./pages/Table";
import IVaccines from "./pages/Importantvaccines";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import UserPage from "./pages/Parent/UserPage";
import LowAdmin from "./pages/LowAdmin/LowAdminChild";
import LowAdminParants from "./pages/LowAdmin/LowAdminParants";
import AddChild from "./pages/LowAdmin/AddChild";
import UpdateChild from "./pages/LowAdmin/UpdateChild";
import AddPerant from "./pages/LowAdmin/AddPerant";
import UpdateParent from "./pages/LowAdmin/UpdateParent";
import HighAdminParants from "./pages/HighAdmin/HighAdminParants";
import HighAdminChild from "./pages/HighAdmin/HighAdminChild";
import HighAdminProffessions from "./pages/HighAdmin/HighAdminProffessions";
import UpdateProffessions from "./pages/HighAdmin/UpdateProffessions";
import AddProffessions from "./pages/HighAdmin/AddProfessionals";
import HAddChild from "./pages/HighAdmin/AddChild";
import HUpdateChild from "./pages/HighAdmin/UpdateChild";
import HAddPerant from "./pages/HighAdmin/AddPerant";
import HUpdateParent from "./pages/HighAdmin/UpdateParent";
import SignInSide from "./pages/SigninPage";

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
      <Route path="/hadd-child" element={<HAddChild />} />
      <Route path="/hupdate-child" element={<HUpdateChild />} />
      <Route path="/hadd-perant" element={<HAddPerant />} />
      <Route path="/hupdate-perant" element={<HUpdateParent />} />
      <Route path="/add-proffession" element={<AddProffessions />} />
      <Route path="/update-proffession" element={<UpdateProffessions />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignInSide />} />
      <Route path="/vaccines/1" element={<Vaccines />} />
      <Route path="/high-admin-parants" element={<HighAdminParants />} />
      <Route path="/high-admin-proffessions" element={<HighAdminProffessions />} />
      <Route path="/high-admin-child" element={<HighAdminChild />} />
      <Route path="/v-details" element={<VDetails/>}/>
      <Route path="/table" element={<Table/>}/>
      <Route path="/iv" element={<IVaccines/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
    </Routes>
  );
}

export default App;
