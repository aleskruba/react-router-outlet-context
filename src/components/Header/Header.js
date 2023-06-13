import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.leftUl}>
          <li><img src="./vite.svg" alt="" className={styles.logoImg} /></li>
          <li><Link to="/findteachers">Find Teachers</Link></li>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/secretpage">Secret Page</Link></li>
        </ul>

        {/*  right side */}
        <ul className={styles.rightUl}>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><div className={styles.profileImgDiv}><img src="./man.jpg" alt="" className={styles.profileImg} /></div></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;