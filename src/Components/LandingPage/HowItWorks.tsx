import { FunctionComponent } from "react";
import styles from "./RealEstateLandingPage.module.css";


const HowItWorks: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
    <div className={styles.realEstateLandingPageInner}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.instanceParent}>
            <div className={styles.howItWorksParent}>
              <b className={styles.howItWorksContainer}>
                <span>{`How It `}</span>
                <span className={styles.works}>Works</span>
              </b>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="/group-32.svg" />
                <img className={styles.frameChild} alt="" src="/group-33.svg" />
                <img className={styles.frameChild} alt="" src="/group-32.svg" />
              </div>
            </div>
            <div className={styles.researchPlaces}>Research Places</div>
            <div className={styles.weUseResearch}>
              We use research places so that you get your desired place to live
              a happy life.
            </div>
            <div className={styles.weUseInstant}>
              We use instant valuation so that you get your desired place to
              live a happy life.
            </div>
            <div className={styles.weUseTrack}>
              We use track property so that you get your desired place to live a
              happy life
            </div>
            <div className={styles.trackProperty}>Track Property</div>
            <div className={styles.instantValuation}>Instant Valuation</div>
          </div>
        </div>
    </div>
    </div>
 

  )
  }
  export default HowItWorks;