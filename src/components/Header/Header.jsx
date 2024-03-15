import React from "react";
import styles from "./header.module.scss";
import Logo from "../../assets/images/Logo.svg";
import Bell from "../../assets/images/icons/Bell.svg";
import UserImage from "../../assets/images/icons/UserImage.svg";
import ArrowToBottom from "../../assets/images/icons/ArrowToBottom.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" class="logo">
        <img src={Logo} alt="Logo" />
      </a>
      <div className={styles.userInfo}>
        <div className={styles.bellWrapper}>
          <img src={Bell} alt="Logo" />
        </div>
        <div className={styles.user}>
          <img src={UserImage} alt="UserImage" />
        </div>
        <div className={styles.userDropDown}>
          <img src={ArrowToBottom} alt="UserImage" />
        </div>
      </div>
    </header>
  );
};

export default Header;
