import { FunctionComponent } from "react";
import styles from "./RealEstateLandingPage.module.css";
import {Header} from "../Shared/Layout/Header";
import {Footer} from "../Shared/Layout/Footer";
import {Testimonials} from "../Components/LandingPage/Testimonials";
import {HeroSection} from "../Components/LandingPage/HeroSection";
import {Demanding} from "../Components/LandingPage/Demanding";
import {HowItWorks} from "../Components/LandingPage/HowItWorks";
import {Deals} from "../Components/LandingPage/Deals";
import {Partners} from "../Components/LandingPage/Partners";


const RealEstateLandingPage: FunctionComponent = () => {
  return (
    <div className={styles.realEstateLandingPage}>
      

            <Header />
            <HeroSection />
            <Demanding />            
            <HowItWorks />
            <Deals />
            <Testimonials />
            <Partners />
            <Footer />
  
    </div>
  );
};

export default RealEstateLandingPage;
