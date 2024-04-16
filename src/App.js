import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setEmail } from './features/counter/counterSlice'
function App() {

  const [email, setEmaill] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isEmail,setIsEmail] = useState(false)
  const [password, setPassword] = useState('');
  const existingEmails = useSelector(state => state.email.value);
  
  const dispatch = useDispatch();
  const handleClickBAck = ()=>{
    setSubmitted(false)
    setEmaill('')
    setPassword('')
  }

  // Function to handle changes in the email input field
  const handleEmailChange = (event) => {
    setEmaill(event.target.value);
    if (existingEmails.length===0){
      return null;
    }else{
    existingEmails?.map(x=>{
      if(x === event.target.value){
        setIsEmail(true)
      }else{
        setIsEmail(false)
      }
    })
    console.log(event)
    } 
  };

  // Function to handle changes in the password input field
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
        dispatch(setEmail(email));
        setSubmitted(true)
        
  };
  return (
    <div>
      {submitted ? (
        // Render the login page if isSubmitted is true
        <>
        <button type="submit" onClick={handleClickBAck}>Logout</button>
        <h1>Login Component</h1>
        <p>Welcome to Dashboard</p>
        </>
      ) :(
        <div  className='main-div'>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit" >{isEmail ? 'Submit':'Create'}</button>
    </form>
    </div>
      )}
    
    </div>
  )
  ;
}

export default App;
