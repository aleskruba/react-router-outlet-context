import React from 'react'
import styles from './wallet.module.css';
import WalletComponent from '../../components/Wallet/WalletComponent'

function Wallet() {
  return (
    <div className={styles.walletMainDiv}>
      <div className={styles.walletTopDiv}> <h2 className={styles.walletTopDivH2}>My Wallet</h2></div>

      <div className={styles.walletMiddleDiv}>
         
      <div className={styles.walletMiddleDivButton}><h2 className={styles.walletMiddleDivBuy}>Buy credits</h2></div>   
      <div className={styles.walletMiddleDivButton}><h2 className={styles.walletMiddleDivWithdraw}>Withdraw money</h2></div>   

      </div>

      <div className={styles.walletBottomDiv}></div>
    <WalletComponent/>
    
    </div>
  )
}

export default Wallet