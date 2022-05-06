import React, {useState} from 'react'
import App from '../App';



function LoginForm({Login, error}) {

  

    const [details, setDetails] = useState({username: "", password: ""})
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    
    
    }
  return (
    <div> 
        <form  onSubmit={submitHandler}>
            <div className='form-inner'>
            <h2>LOGIN</h2>
            {/*Error*/}

                   <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' name='username' id='username' maxLength='8' onChange={e=> setDetails({...details,username:e.target.value})} value={details.username}/>
                    

                   </div>

                   <div className='form-group'>
                    <label htmlFor='password'>password:</label>
                    <input type='password' name='password' id='password' maxLength='9' onChange={e=> setDetails({...details,password:e.target.value})} value={details.password}/>

                   </div>
                   <input type='submit' className='btnlogin' value='LOGIN'></input>

                   <input type='submit' className='btnregister' value='REGISTER'></input>

                   <input type='submit' className='btnforgot' value='Forgot Password'></input>

            </div>

        </form>
    </div>
  )
}

export default LoginForm