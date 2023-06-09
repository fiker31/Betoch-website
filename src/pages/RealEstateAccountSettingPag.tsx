import { FunctionComponent } from "react";
import styles from "./RealEstateAccountSettingPag.module.css";
const RealEstateAccountSettingPag: FunctionComponent = () => {
  return (
    <div className={styles.realestateAccountSettingPag}>
      <div className={styles.logo}>
        <div className={styles.betoch}>
          <img
            className={styles.defaultABeautifulModernLogIcon}
            alt=""
            src="/default-a-beautiful-modern-logo-for-a-real-estate-website-na-2-e65a82fd1f624fc6b3dbd703aba7be35-1removebgpreview-1@2x.png"
          />
          <b className={styles.betoch1}>BETOCH</b>
        </div>
      </div>
      <div className={styles.icon}>
        <img className={styles.heartIcon} alt="" src="/heart.svg" />
      </div>
      <div className={styles.navigationBarWrapper}>
        <div className={styles.navigationBar}>
          <div className={styles.navbar}>
            <div className={styles.content}>
              <div className={styles.search}>
                <div className={styles.home}>Search</div>
              </div>
              <div className={styles.about}>
                <b className={styles.home}>Home</b>
              </div>
              <div className={styles.search}>
                <div className={styles.home}>About</div>
              </div>
              <div className={styles.search}>
                <div className={styles.home}>Help</div>
              </div>
              <div className={styles.blog}>
                <div className={styles.blog1}>Blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.man1Wrapper}>
        <img className={styles.man1Icon} alt="" src="/man-1@2x.png" />
      </div>
      <div className={styles.realestateAccountSettingPagInner}>
        <div className={styles.lineParent}>
          <div className={styles.groupChild} />
          <b className={styles.accountSetting}>Account Setting</b>
          <div className={styles.myProfile}>My Profile</div>
          <div className={styles.security}>Security</div>
          <div className={styles.paymentInformation}>Payment information</div>
          <div className={styles.support}>Support</div>
          <div className={styles.savedProperties}>Saved Properties</div>
        </div>
      </div>
      <div className={styles.realestateAccountSettingPagChild}>
        <div className={styles.myProfileParent}>
          <b className={styles.myProfile1}>My Profile</b>
          <div className={styles.groupWrapper}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.groupItem}
                alt=""
                src="/ellipse-21@2x.png"
              />
              <div className={styles.abebeKebede}>Abebe Kebede</div>
              <div className={styles.broker}>Broker</div>
              <div className={styles.abebeKebede1}>Abebe Kebede</div>
              <div className={styles.groupInner} />
              <div className={styles.rectangleDiv} />
              <div className={styles.verified}>Verified</div>
              <div className={styles.edit}>Edit</div>
              <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.personalInformationParent}>
              <div className={styles.personalInformation}>
                Personal Information
              </div>
              <div className={styles.firstName}>First Name</div>
              <div className={styles.abebe}>{`Abebe `}</div>
              <div className={styles.kebede}>Kebede</div>
              <div className={styles.emailAddress}>Email Address</div>
              <div className={styles.abebekebede11gmailcom}>
                Abebekebede11@gmail.com
              </div>
              <div className={styles.phoneNumber}>Phone Number</div>
              <div className={styles.div}>+251978778787</div>
              <div className={styles.lastName}>Last Name</div>
              <div className={styles.groupChild1} />
              <div className={styles.edit1}>Edit</div>
              <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
            </div>
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.countryParent}>
              <div className={styles.firstName}>Country</div>
              <div className={styles.city}>City</div>
              <div className={styles.address}>Address</div>
              <div className={styles.ethiopia}>Ethiopia</div>
              <div className={styles.addisAbaba}>Addis Ababa</div>
              <div className={styles.groupChild2} />
              <div className={styles.edit2}>Edit</div>
              <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAccountSettingPag;
