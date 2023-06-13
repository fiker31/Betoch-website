import { FunctionComponent } from "react";
import styles from "./RealEstateLandingPage.module.css";


const Testimonials: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
   <div className={styles.realEstateLandingPageInner1}>
        <div className={styles.whatOurClientSaysParent}>
          <b className={styles.whatOurClientContainer}>
            <span>{`What Our Client `}</span>
            <span className={styles.works}>Says</span>
          </b>
          <div className={styles.ourClientsSend}>
            Our clients send us bunch of smiles with our services and we love
            them
          </div>
          <div className={styles.youllGetTheContainer}>
            <p
              className={styles.youllGetThe}
            >{`You’ll get the best of what you put in. The team is working at their best to provide us variety of spaces and homes. Had a great experience working with them. `}</p>
            <p className={styles.youllGetThe}>Thanks a lot.</p>
          </div>
          <b className={styles.abebeKebede}>Abebe Kebede</b>
          <div className={styles.addisAbabaEthiopia}>Addis Ababa, Ethiopia</div>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-9@2x.png" />
          <img
            className={styles.groupChild18}
            alt=""
            src="/ellipse-11@2x.png"
          />
          <img
            className={styles.groupChild19}
            alt=""
            src="/ellipse-10@2x.png"
          />
          <div className={styles.ellipseDiv} />
          <div className={styles.groupChild20} />
          <div className={styles.groupChild21} />
          <div className={styles.groupChild22} />
          <div className={styles.groupChild23} />
          <div className={styles.groupChild24} />
          <div className={styles.groupChild25} />
          <img className={styles.vectorIcon3} alt="" src="/vector5.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
          <img
            className={styles.quoteRight1Icon}
            alt=""
            src="/quoteright-1.svg"
          />
          <img
            className={styles.quoteRight2Icon}
            alt=""
            src="/quoteright-2.svg"
          />
          <img className={styles.vectorIcon5} alt="" src="/vector7.svg" />
          <img className={styles.vectorIcon6} alt="" src="/vector7.svg" />
          <img className={styles.vectorIcon7} alt="" src="/vector8.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
        </div>
    </div>
    </div>
 

  )
  }
export default Testimonials;