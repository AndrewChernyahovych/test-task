import styles from "./mainContent.module.scss";
import Walet from "../../assets/images/icons/Walet.svg";
import People from "../../assets/images/icons/people.svg";
import Statistic from "../../assets/images/icons/statistic.svg";
import Arrows from "../../assets/images/icons/arrows.svg";
import UserPhoto from "../../assets/images/icons/userPhoto.svg";
import CountryImg from "../../assets/images/icons/countryImg.svg";
import ArrowGreen from '../../assets/images/icons/arrowGreen.svg'
import ArrowRed from '../../assets/images/icons/arrowRed.svg'

import { useState } from "react";
import TransactionInfo from "../transactionInfo";
const dataOptions = [
  { id: 0, img: Statistic, title: "Dashboard" },
  { id: 1, img: Arrows, title: "Transactions" },
  { id: 2, img: People, title: "Beneficiaries" },
  { id: 3, img: Walet, title: "Wallet" },
];

const internationalBalance = [
  { id: 0, country: "AED", sum: "7060.5" },
  { id: 1, country: "GBP", sum: "7060.5" },
  { id: 2, country: "EUR", sum: "7060.5" },
];

const MainContent = () => {
  const [activate, setActivate] = useState("Transactions");

  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <div className={styles.options}>
          {dataOptions.map((option) => {
            return (
              <div
                className={
                  activate === option.title
                    ? styles.activeOption
                    : styles.optionItem
                }
                key={option.id}
       onClick={()=>setActivate(option.title)}
              >
                <img src={option.img} alt={option.title} />
                <p>{option.title}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.userMoneyInfo}>
          <div className={styles.topInfo}>
            <div className={styles.user}>
              <img src={UserPhoto} alt="UserPhoto" />
            </div>
            <div className={styles.userBalance}>
              <p className={styles.title}>Curent Balance</p>
              <p className={styles.balanceSum}>
                7060.5<span className={styles.currency}> USD</span>
              </p>
            </div>
          </div>
          <div className={styles.bottomInfo}>
            <p className={styles.userName}>M. Arkam</p>
            <p className={styles.userPhone}>0199 1262 9691 809</p>
          </div>
          <div className={styles.balanceInternational}>
            {internationalBalance.map((item) => {
              return (
                <div className={styles.balanceItem}>
                  <div className={styles.top}>
                    <img src={CountryImg} alt="CountryImg" />
                    <p>{item.country}</p>
                  </div>

                  <p className={styles.sum}>{item.sum}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.moneyStatistic}>
            <div className={styles.withdrawal}>
              <div className={styles.titleInfo}>
                <img src={ArrowGreen} alt="ArrowGreen" />
                <p>Withdrawal</p>
              </div>
              <p className={styles.currencyStat}>AED</p>
              <p className={styles.currencyCountStat} >7060.5 </p>
            </div>
            <div className={styles.deposit}>
              <div className={styles.titleInfo}>
                <img src={ArrowRed} alt="ArrowRed" />
                <p>Deposit</p>
              </div>
              <p className={styles.currencyStat}>AED</p>
              <p className={styles.currencyCountStat}>7060.5 </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.transactionContainer}>
        <TransactionInfo/>
   
      </div>
    </div>
  );
};

export default MainContent;
