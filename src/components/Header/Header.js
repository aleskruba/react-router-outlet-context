import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.leftUl}>
          <li>
            <img src="/logo.png" alt="" className={styles.logoImg} />
          </li>
          <li>
            <Link to="/findteachers">Find Teachers</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/secretpage">Secret Page</Link>
          </li>
        </ul>

        {/* right side */}
        <ul className={styles.rightUl}>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className={styles.profileImgDiv} >
              
              <img src="/man.jpg" alt="" className={styles.profileImg} />
       
            <ul className={styles.profileImgUl} >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/wallet">Wallet</Link>
              </li>
              <li className={styles.profileLogout} >
                <Link to="/logout"  >Logout</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
