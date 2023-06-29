import React,{useState} from 'react'
import  styles from '../../pages/Profile/profile.module.css'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';
import CountrySelect from './CountryComponent';


    Modal.setAppElement('#root');

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Required!')
    .email('Invalid email format')
    .max(50, 'Email must be at most 50 characters'),
  firstName: Yup.string()
    .max(50, 'First name must be at most 30 characters')
    .matches(/^[^0-9]*$/, 'First name cannot contain numbers'),
  lastName: Yup.string()
    .max(50, 'Lirst name must be at most 30 characters')
    .matches(/^[^0-9]*$/, 'First name cannot contain numbers'),
  phone: Yup.string()
    .max(50, 'Phone number must be at most 50 characters')
    .matches(/^[0-9]*$/, 'Phone number can only contain numbers'),
  country: Yup.string()
    
});

const initialValues = {
  email: '',
  firstName:'',
  lastName:'',
  phone:'',
  country:''
};

function ProfileUpdate({setUpdateButton}) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [backendError, setBackendError] = useState('');

 

  const onSubmit = (values) => {
    setBackendError('');
    console.log(values)
    setIsOpen(false)
    closeDialog()
   };

   const closeDialog = () => {
    setIsOpen(false);
    navigate('/profile');
    setUpdateButton(false)
  };


  return (
           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Modal isOpen={isOpen} onRequestClose={closeDialog}>
                       <Form className={styles.profileForm}>
               
                  <div className={styles.emailInputContainer}>
                    <Field name="email" 
                           type="email" 
                           id="email" 
                           placeholder="Email" autoComplete="off"      
                           className={styles.emailInputContainer}/>
                  </div>
               
                <ErrorMessage name="email" component="div">
                  {(errorMsg) =>
                    backendError ? (
                      <div className={styles.emailErrorContainer}>{errorMsg}</div>
                    ) : (
                      <div className={styles.emailErrorContainer}>{errorMsg}</div>
                    )
                  }
                </ErrorMessage>
                {backendError && <div className={styles.emailErrorContainer}>{backendError}</div>}



                <div className={styles.firstNameInputContainer}>
                  <Field name="firstName" 
                         type="text" 
                         id="firstName" 
                         placeholder="First Name" 
                         autoComplete="off" 
                         className={styles.firstNameInputContainer}/>
                </div>
              
              <ErrorMessage name="firstName" component="div">
                {(errorMsg) =>
                  backendError ? (
                    <div className={styles.firstNameErrorContainer}>{errorMsg}</div>
                  ) : (
                    <div className={styles.firstNameErrorContainer}>{errorMsg}</div>
                  )
                }
              </ErrorMessage>
              {backendError && <div className={styles.firstNameErrorContainer}>{backendError}</div>}

              <div className={styles.lastNameInputContainer}>
                  <Field name="lastName"
                         type="text" 
                         id="lastName" 
                         placeholder="Last Name" 
                         autoComplete="off" 
                         className={styles.lastNameInputContainer}
                         />
                </div>
              
              <ErrorMessage name="lastName" component="div">
                {(errorMsg) =>
                  backendError ? (
                    <div className={styles.lastNameErrorContainer}>{errorMsg}</div>
                  ) : (
                    <div className={styles.lastNameErrorContainer}>{errorMsg}</div>
                  )
                }
              </ErrorMessage>
              {backendError && <div className={styles.lastNameErrorContainer}>{backendError}</div>}

              <div className={styles.countryInputContainer}>
              <CountrySelect/>
                        </div>
              

              <div className={styles.phoneNumberContainer}>
              <Field name="phone" 
                     type="number" 
                     id="phone" 
                     placeholder="Phone Number" 
                     autoComplete="off" 
                     className={styles.phoneNumberContainer}
                     />
                </div>

              <ErrorMessage name="phone" component="div">
                {(errorMsg) =>
                  backendError ? (
                    <div className={styles.phoneNumberErrorContainer}>{errorMsg}</div>
                  ) : (
                    <div className={styles.phoneNumberErrorContainer}>{errorMsg}</div>
                  )
                }
              </ErrorMessage>
              {backendError && <div className={styles.phoneNumberErrorContainer}>{backendError}</div>}
                

            <div className={styles.buttons}>
              <input type="submit" className={styles.updateBtn} value="Update" />
              <input
                type="button"
                className={styles.closeBtn}
                onClick={closeDialog}
                value="Close"
              />
            </div>

          </Form>
          </Modal>
       
  </Formik>


  )
}

export default ProfileUpdate
