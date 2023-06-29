import React, { useState } from 'react'
import  styles from './profile.module.css';
import ProfileLanguagesComponent from '../../components/Profile/ProfileLanguageComponent'
import ProfileUpdate from '../../components/Profile/ProfileUpdate';
import ProfileData from '../../components/Profile/ProfileData';



function Profile() {

  const [updateButton,setUpdateButton] = useState(false)

  return (

    <div className={styles.profileMainContainer}>
         <div className={styles.profileImgContainer}>
            <div className={styles.profileImgContainerFlexBox}>
                <div className={styles.profileImgContainerimgDiv}>
                     <img src="/man.jpg" alt="" className={styles.profileImgContainerImg} />
                </div>
            </div>
         </div>

         <div className={styles.profileClassesData}>

          <div>  <h2 className={styles.profileClassesDataH2}>Member on Lengua since 24.6.2023</h2></div>
            <div className={styles.profileClassesDataMember}>        
          <div className={styles.profileClassesDataLessons}>  <h2 className={styles.profileClassesDataH1}>142</h2></div>
          <div className={styles.profileClassesDataText}>  <h2 className={styles.profileClassesDataH2}>Total completed lessons</h2></div>
          </div>

        </div>

      {!updateButton ? 
         <div className={styles.profileLanguagesContainer} >
             <ProfileLanguagesComponent/>
          </div>
      : ''
        }
        
        

        {!updateButton ? 
             <div className={styles.profileUserDataContainer}> <ProfileData setUpdateButton={setUpdateButton}/> </div>
              : 
              <div className={styles.profileUserDataUpdateContainer}><ProfileUpdate setUpdateButton={setUpdateButton}/> </div>
              }

       

    </div>
  )
  }
export default Profile