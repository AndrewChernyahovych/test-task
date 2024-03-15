import styles from "./transactionInfo.module.scss";
import BigOkIcon from "../../assets/images/icons/BigOkIcon.svg";
import LineDevider from "../../assets/images/icons/LineDevider.svg";
const TransactionInfo = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Transaction Successful </h2>
      <div className={styles.cardContainerWprapper}>
        <div className={styles.cardContainer}>
          <div className={styles.topWrapper}>
            <p className={styles.title}>
              Worem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.amount}>
              <p>Amount :</p>
              <p className={styles.sum}> $ 9,900</p>
            </div>
            <p className={styles.location}>
              <span>M. Arkam</span> <span>Sri Lanka</span>{" "}
            </p>
          </div>
          <img className={styles.okIcon} src={BigOkIcon} />
          <div className={styles.devider}>
            <img src={LineDevider} alt="devider" />
          </div>

          <div className={styles.bottomWrapper}>
            <div className={styles.transaction}>
              <p>Transaction</p> <span className={styles.count}>#123456</span>
            </div>
            <p className={styles.date}>16 august | 1:03 pm</p>
            <p className={styles.description}>
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero <br />
              et velit interdum
            </p>
          </div>
          <div className={styles.brownLine}></div>
        </div>
        <button className={styles.continueBtn}>Continue</button>
      </div>
    </div>
  );
};

export default TransactionInfo;
