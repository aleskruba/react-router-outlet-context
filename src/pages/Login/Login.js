import React, { useState } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { Formik ,Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'

Modal.setAppElement('#root')

const validationSchema = Yup.object({ 
  email: Yup.string().required('Required!')
        .email('Invalid email format'),
        
  password:Yup.string().required('Required')
})

const initialValues = {
  email:'',
  password:''
}

const onSubmit = values => {
 console.log(values)
}

function Login() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const closeDialog = () => {
    setIsOpen(false);
    navigate('/');
  };

  return (
    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
      <Modal isOpen={isOpen} onRequestClose={closeDialog}>
        <h1 className={styles.title}>Login</h1>
        <Form className={styles.loginForm} >
        <div className={styles.emailInputContainer}>
          <Field
            name="email"
            type="email"
            id="email"
            placeholder='Email'
            autoComplete="off"
             />
          <ErrorMessage name='email' />     
          </div>

      <div className={styles.passwordInputContainer}>
             <Field
              name="password"
              type="password"
              id="password"
              placeholder='Password'
              autoComplete="off"
                />
          <ErrorMessage name='password'/>      
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
        </Form>

      </Modal>
    </Formik>
  );
}

export default Login;
