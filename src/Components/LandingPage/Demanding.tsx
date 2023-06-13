import { FunctionComponent } from "react";
import styles from "../../pages/RealEstateLandingPage.module.css";


export const Demanding: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameDiv}>
        <div className={styles.mostDemandingParent}>
          <b className={styles.mostDemanding}>
            <span>{`Most `}</span>
            <span className={styles.works}>Demanding</span>
          </b>
          <img
            className={styles.groupChild12}
            alt=""
            src="/rectangle-21@2x.png"
          />
          <img
            className={styles.groupChild13}
            alt=""
            src="/rectangle-23@2x.png"
          />
          <div
            className={styles.thisIsThe}
          >{`This is the most demanding house of the week `}</div>
          <div className={styles.bookItNow}>
            Book it now and start living in next 2 days. Move fast, before
            anyone get it and take your desired place away from you.
          </div>
          <div className={styles.groupChild14} />
          <div className={styles.etb100000004}>ETB 10,000,000</div>
          <div className={styles.groupChild15} />
          <div className={styles.groupChild16} />
          <div className={styles.groupChild17} />
          <b className={styles.budget}>Budget</b>
          <b className={styles.status}>Status</b>
          <b className={styles.size}>Size</b>
          <b className={styles.city}>City</b>
          <div className={styles.meterSquare}>60 meter Square</div>
          <div className={styles.addisAbaba}>Addis Ababa</div>
          <div className={styles.onSale}>On Sale</div>
        </div>
      </div>
    </div>
 

  )
  }
