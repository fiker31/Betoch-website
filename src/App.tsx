import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import RealEstateProductDetailsPag from "./pages/RealEstateProductDetailsPag";
import RealEstateAccountSettingPag from "./pages/RealEstateAccountSettingPag";
import RealEstateLoginPage from "./pages/RealEstateLoginPage";
import RealEstateRegistrationPage from "./pages/RealEstateRegistrationPage";
import RealEstateLandingPage from "./pages/RealEstateLandingPage";
import RealEstateListingPage from "./pages/RealEstateListingPage";
import { useEffect } from "react";

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
        title = "";
        metaDescription = "";
        break;
      case "/realestate-account-setting-page":
        title = "";
        metaDescription = "";
        break;
      case "/realestate-login-page":
        title = "";
        metaDescription = "";
        break;
      case "/realestate-registration-page":
        title = "";
        metaDescription = "";
        break;
      case "/real-estate-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/real-estate-listing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={< RealEstateLandingPage/>} />
      <Route path="/realestate-account-setting-page" element={<RealEstateAccountSettingPag />}
      />
      <Route path="/realestate-login-page" element={<RealEstateLoginPage />} />
      <Route
        path="/realestate-registration-page"
        element={<RealEstateRegistrationPage />}
      />
      <Route
        path="/real-estate-ProductDetails-page"
        element={<RealEstateProductDetailsPag />}
      />
      <Route
        path="/real-estate-listing-page"
        element={<RealEstateListingPage />}
      />
    </Routes>
  );
}
export default App;
