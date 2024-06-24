
import {Routes,Route,} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecoverPassword from "./pages/RecoverPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Table from "./pages/Table";
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
import LAVaccination from "./pages/LowAdmin/AddVaccination";
import HAVaccination from "./pages/HighAdmin/AddVaccination";
import BCG from "./pages/BCG";
import HepB from "./pages/HepB";
import Polio from "./pages/polio";
import Hib from "./pages/Hib";
import MMR from "./pages/MMR";
import ATD from "./pages/atd";
import Rubella from "./pages/Rubella";
import JepB from "./pages/JapB"
import MCard from "./pages/meetmento";
import Contact from "./pages/ContactUs";
import IVaccines from "./pages/Importantvaccines";
import ContactUs from "./pages/ContactUs";
import ParentDashboard from './pages/Parent/parentdashboard';
import VaccHistory from './pages/HighAdmin/VaccHistory';
import HighAdminVaccination from './pages/HighAdmin/HighAdminVaccination';




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
      <Route path="/high-admin-parants" element={<HighAdminParants />} />
      <Route path="/high-admin-proffessions" element={<HighAdminProffessions />} />
      <Route path="/high-admin-child" element={<HighAdminChild />} />
      <Route path="/table" element={<Table/>}/>
      <Route path="/iv" element={<IVaccines/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/laVacctination" element ={<LAVaccination/>}/>
      <Route path="/haVacctination" element ={<HAVaccination/>}/>
      <Route path="/vaccines/1" element={<BCG />} />
      <Route path="/vaccines/2" element={<HepB />} />
      <Route path="/vaccines/3" element={<Polio/>} />
      <Route path="/vaccines/4" element={<Hib />} />
      <Route path="/vaccines/5" element={<ATD/>} />
      <Route path="/vaccines/6" element={<JepB/>} />
      <Route path="/vaccines/7" element={<Rubella/>} />
      <Route path="/vaccines/8" element={<MMR />} />
      <Route path="/mcard" element={<MCard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/parentDashboard" element={<ParentDashboard />} />
      <Route path="/VaccHistory" element={<VaccHistory />} />
      <Route path="/HighAdminVaccination" element={<HighAdminVaccination />} />
      

    </Routes>
  );
}

export default App;
