import React,{useState} from 'react'
import  styles from './login.module.css';
import useAuth from '../../hooks/useAuth';



function Login() {

  const { auth,setAuth } = useAuth()
  const [user, setUser] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setAuth({user})
    }
    catch(err) {console.log(err)
    }

  }

  return (
    <div>
     <h1 className={styles.title}>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                     autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
        <button>Sign In</button>
            </form>

    <h2>{auth.user}</h2>
            

    </div>
  )
}

export default Login