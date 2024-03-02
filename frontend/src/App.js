
import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
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
//import UpdateParent from "./pages/UpdateParent"

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "bvms";
        metaDescription = "Your meta description for the home page";
        break;
     case "/about-us":
title = "";
metaDescription = "";
break;
case "/user-page":
title = "";
metaDescription = "";
break;
case "/low-admin":
title = "";
metaDescription = "";
break;
case "/v-details":
title = "";
metaDescription = "";
break;
case "/low-admin-parants":
title = "";
metaDescription = "";
break;
case "/add-child":
title = "";
metaDescription = "";
break;
case "/update-child":
title = "";
metaDescription = "";
break;
case "/add-perant":
title = "";
metaDescription = "";
break;
// case "/update-perant":
// title = "";
// metaDescription = "";
// break;
case "/recover-password":
title = "";
metaDescription = "";
break;
case "/forgot-password":
title = "";
metaDescription = "";
break;
case "/login":
title = "";
metaDescription = "";
break;
case "/table":
title = "";
metaDescription = "";
break;

case "/vaccines":
title = "";
metaDescription = "";
break;
case "/high-admin-parants":
title = "";
metaDescription = "";
break;
case "/notification":
title = "";
metaDescription = "Your meta description for the home page";
break;

      default:
        title = ""; 
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

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
      {/* <Route path="/update-perant" element={<UpdatePerant />} /> */}
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vaccines/1" element={<Vaccines />} />
      <Route path="/high-admin-parants" element={<HighAdminParants />} />
      <Route path="/notification" element={<Notification1 />} />
      <Route path="/v-details" element={<VDetails/>}/>
      <Route path="/table" element={<Table/>}/>
    </Routes>
  );
}

export default App;
