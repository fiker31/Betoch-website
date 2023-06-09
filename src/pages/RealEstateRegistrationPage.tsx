import { FunctionComponent } from "react";
import styles from "./RealEstateRegistrationPage.module.css";
const RealEstateRegistrationPage: FunctionComponent = () => {
  return (
    <div className={styles.realestateRegistrationPage}>
      <img
        className={styles.realestateRegistrationPageChild}
        alt=""
        src="/rectangle-29@2x.png"
      />
      <div className={styles.inputGroup}>
        <div className={styles.inputlightinputGroup}>
          <div className={styles.inputlightinputTitle}>
            <div className={styles.inputTitle}>Name</div>
          </div>
          <div className={styles.inputlightinput}>
            <div className={styles.inputlightinputText}>
              <div className={styles.inputText}>Abebe Kebede</div>
            </div>
            <div className={styles.inputButton} />
          </div>
        </div>
        <div className={styles.inputlightinputGroup}>
          <div className={styles.inputlightinputTitle}>
            <div className={styles.inputTitle}>Email</div>
          </div>
          <div className={styles.inputlightinput}>
            <div className={styles.inputlightinputText}>
              <div className={styles.inputText}>abebekebede@gmail.com</div>
            </div>
            <div className={styles.inputButton} />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputGroup1}>
              <div className={styles.inputlightinputGroup2}>
                <div className={styles.inputlightinputTitle}>
                  <div className={styles.inputTitle}>Password</div>
                </div>
                <div className={styles.inputlightinput2}>
                  <div className={styles.textIcon}>
                    <div className={styles.inputlightinputText}>
                      <div className={styles.inputText}>••••••••••••</div>
                    </div>
                    <img
                      className={styles.iconoutlineeye}
                      alt=""
                      src="/iconoutlineeye.svg"
                    />
                  </div>
                  <div className={styles.inputButton} />
                </div>
              </div>
              <div className={styles.inputlightinputGroup2}>
                <div className={styles.inputlightinputTitle}>
                  <div className={styles.inputTitle}>Confirm password</div>
                </div>
                <div className={styles.inputlightinput2}>
                  <div className={styles.textIcon}>
                    <div className={styles.inputlightinputText}>
                      <div className={styles.inputText}>passWordTextSample</div>
                    </div>
                    <img
                      className={styles.iconoutlineeye}
                      alt=""
                      src="/iconoutlineeyeslash.svg"
                    />
                  </div>
                  <div className={styles.inputButton} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonlightprimaryButton}>
        <div className={styles.buttonText}>Continue</div>
      </div>
      <div className={styles.base}>
        <div className={styles.formFieldWrapper}>
          <div className={styles.formField}>
            <div className={styles.inputText4}>Continue with Facebook</div>
          </div>
        </div>
        <img
          className={styles.iconsocialfacebook}
          alt=""
          src="/iconsocialfacebook1.svg"
        />
      </div>
      <div className={styles.base1}>
        <div className={styles.formFieldWrapper}>
          <div className={styles.formField}>
            <div className={styles.inputText5}>Continue with Google</div>
          </div>
        </div>
        <img
          className={styles.iconsocialfacebook}
          alt=""
          src="/iconsocialgoogle1.svg"
        />
      </div>
      <div className={styles.alreadyHaveAnAccountLogIWrapper}>
        <div className={styles.alreadyHaveAnContainer}>
          <span>{`Already have an account? `}</span>
          <span className={styles.logIn}>Log in</span>
        </div>
      </div>
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
      <b className={styles.welcome}>Welcome</b>
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
      <div className={styles.realestateRegistrationPageItem} />
    </div>
  );
};

export default RealEstateRegistrationPage;
