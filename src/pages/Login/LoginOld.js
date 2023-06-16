import React, { useState } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'

Modal.setAppElement('#root')

const validationSchema = Yup.object({ 
  email: Yup.string().required('Required!')
        .email('Invalid email format'),
        
  password:Yup.string().required('Required')
})


function Login() {



  const formik = useFormik({

      initialValues:{
         email:'',
         password:''
      },

      onSubmit:values =>{
        console.log(values)
      },

      validationSchema,
/* 
      validate:values => {
        let errors = {}
     
        if(!values.email) {
          errors.email = 'Required'
        } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(values.email)){
          errors.email = 'Invalid email format'
        };

        if(!values.password) {
          errors.password = 'Required'
        }
        
        
        return errors
      }, */
       
      

  })



  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);

  const closeDialog = () => {
    setIsOpen(false);
    navigate('/');
  };


  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeDialog}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
        <div className={styles.emailInputContainer}>
          <input
            name="email"
            type="email"
            id="email"
            placeholder='Email'
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
      { formik.touched.email && formik.errors.email ? <div className={styles.formError}>{formik.errors.email}</div>: null}
      </div>

      <div className={styles.passwordInputContainer}>
             <input
              name="password"
              type="password"
              id="password"
              placeholder='Password'
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={styles.passwordInput}
            />
      {formik.touched.password && formik.errors.password ? <div className={styles.formError}>{formik.errors.password}</div>: null}
       </div>

          <div className={styles.passwordError}></div>
          <div className={styles.buttons}>
            <input type="submit" className={styles.loginBtn} value="Login" />
            <input
              type="button"
              className={styles.closeBtn}
              onClick={closeDialog}
              value="Close"
            />
          </div>
          <div>
            <span className={styles.loginSpan}>
              No account yet? <Link to="" className={styles.alogin}>Sign Up here</Link>{' '}
            </span>
          </div>
          <div>
            <span className={styles.loginSpan}>
              Forgot password?<Link to="" className={styles.alogin}>Click here</Link>{' '}
            </span>
          </div>
        </form>

      </Modal>
    </div>
  );
}

export default Login;
