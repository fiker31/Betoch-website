import { FunctionComponent } from "react";
import styles from "../../pages/RealEstateLandingPage.module.css";


export const HeroSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
    <div className={styles.groupChild} />
    <div className={styles.rectangleParent}>
          <div className={styles.componentChild} />
          <img
            className={styles.pexelsVladoPaunovic3750601Icon}
            alt=""
            src="/pexelsvladopaunovic3750601-1@2x.png"
          />
        </div>
    <div className={styles.houseToRentOrBuyParent}>
    <b className={styles.houseToRent}>House To Rent or Buy</b>
          <div className={styles.ifYoureLooking}>
            If you’re looking for smart living then you’re at a right place.
            Whether you’re buying or renting we’re here to help you out.
          </div>
          <div className={styles.findYourSmart}>
            Find Your Smart Living Style
          </div>
          <b className={styles.k}>
            <p className={styles.youllGetThe}>
              <span>{`230 `}</span>
              <span className={styles.k2}>K</span>
            </p>
          </b>
          <div className={styles.houseSold}>
            <p className={styles.youllGetThe}>House Sold</p>
          </div>
          <b className={styles.k3}>
            <p className={styles.youllGetThe}>
              <span>{`170 `}</span>
              <span className={styles.k2}>K</span>
            </p>
          </b>
          <div className={styles.houseAvailable}>
            <p className={styles.youllGetThe}>House Available</p>
          </div>
        </div>
        <a href="/real-estate-listing-page">
          <div className={styles.rectangleGroup}>
          <div className={styles.componentItem} />
          <b className={styles.search2}>Search</b>
        </div>
        </a>
    </div>
 

  )
  }
  