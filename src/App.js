import React, { useState } from 'react';
import "./App.css"

function App() {

  const [user, setUser] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({
    user: '',
    birthdate: '',
    email: '',
    password: '',
    gender: '',
    address: '',
    number: ''
  });

  const handleSubmit=async(e)=> {
    e.preventDefault();

    // Reset all previous error states
    setErrors({
      user: '',
      birthdate: '',
      email: '',
      password: '',
      gender: '',
      address: '',
      number: ''
    

    });

    // Validation
    let isValid = true;

    if (user.trim().length < 3) {
      setErrors(prevErrors => ({ ...prevErrors, user: 'Enter a Valid Name' }));
      isValid = false;
    }

    if (birthdate.trim()==="") {
      setErrors(Errors => ({ ...Errors, birthdate: 'Enter a Valid Birthdate' }));
      isValid = false;
    }

    if (!validateEmail(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Enter a Valid Email' }));
      isValid = false;
    }

    if (password.length < 6) {
      setErrors(prevErrors => ({ ...prevErrors, password: 'Password must be at least 6 characters long' }));
      isValid = false;
    }

    if (address.trim() === '') {
      setErrors(prevErrors => ({ ...prevErrors, address: 'Enter a Valid Address' }));
      isValid = false;
    }

    if (isNaN(number) || number.trim() === '') {
      setErrors(prevErrors => ({ ...prevErrors, number: 'Enter a Valid Mobile Number' }));
      isValid = false;
    }

    if (gender !== 'Male' && gender !== 'Female') {
      setErrors(prevErrors => ({ ...prevErrors, gender: 'Select a Valid Gender' }));
      isValid = false;
    }

    if (isValid) {
      // Log the form data to the console
      console.log({
        user,
        birthdate,
        email,
        password,
        gender,
        address,
        number
      });

      // Reset form fields
      setUser('');
      setBirthdate('');
      setEmail('');
      setPassword('');
      setGender('');
      setAddress('');
      setNumber('');
      // setSubmitted(true);
    }

    const response = await fetch ("http://localhost:4000/api/auth/register",{
      method :"POST",
      headers:{"Conntent-Type":"application/json",},
      body :  JSON.stringify(),
    })
  }

  function nameHandler(e) {
    let item = e.target.value;
    setUser(item);
    setErrors(prevErrors => ({ ...prevErrors, user: item.trim().length < 3 ? 'Enter a Valid Name' : '' }));
  }

  function dateHandler(e) {
    let item = e.target.value;
    setBirthdate(item);
    setErrors(prevErrors => ({ ...prevErrors, birthdate: '' }));
  }
  
  function emailHandler(e) {
    let item = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(item);
    setErrors(prevErrors => ({ ...prevErrors, email: emailRegex.test(item) ? '' : 'Enter a Valid Email' }));
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
    setErrors(prevErrors => ({ ...prevErrors, password: '' }));
  }

  function genderHandler(e) {
    setGender(e.target.value);
    setErrors(prevErrors => ({ ...prevErrors, gender: '' }));
  }

  function addressHandler(e) {
    setAddress(e.target.value);
    setErrors(prevErrors => ({ ...prevErrors, address: '' }));
  }

  function numberHandler(e) {
    setNumber(e.target.value);
    setErrors(prevErrors => ({ ...prevErrors, number: '' }));
  }

  function validateEmail(email) {
    // A simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className='main-div'>
      <h1>Validation Form</h1>

      <form onSubmit={handleSubmit}>
        
        <label>User Name <b className="abc">*</b>:</label><br />
        <input type='text' placeholder="Enter Your Name" onChange={nameHandler} value={user} required />
        {errors.user && <span>{errors.user}</span>}<br />

        <label>Birthdate <b className="abc">*</b>:</label><br />
        <input type="date" id="birthdate" name="birthdate" max="2024-11-12" onChange={dateHandler} value={birthdate} required />
        {errors.birthdate && <span>{errors.birthdate}</span>}<br />

        <label>Email <b className="abc">*</b>:</label><br />
        <input type="email" placeholder="abc@gmail.com" onChange={emailHandler} value={email} required />
        {errors.email && <span>{errors.email}</span>}<br />

        <label>Password <b className="abc">*</b>:</label><br />
        <input type="password" placeholder="Enter the Password" onChange={passwordHandler} value={password} required />
        {errors.password && <span>{errors.password}</span>}<br />

        <label>Address <b className="abc">*</b>:</label><br />
        <textarea placeholder="Enter the Address" onChange={addressHandler} value={address} required />
        {errors.address && <span>{errors.address}</span>}<br />

        <label>Mobile No <b className="abc">*</b>:</label><br />
        <input type="number" placeholder="Enter the Mobile No" onChange={numberHandler} value={number} required />
        {errors.number && <span>{errors.number}</span>}<br />

        <label>Gender <b className="abc">*</b>:</label>
        <label>Male</label>
        <input type="radio" value="Male" onChange={genderHandler} checked={gender === 'Male'} />
        <label>Female</label>
        <input type="radio" value="Female" onChange={genderHandler} checked={gender === 'Female'} />
        {errors.gender && <span>{errors.gender}</span>}<br />

        <button type='submit'>Submit</button>
      </form>

      {/* {submitted && <div>Form submitted successfully!</div>} */}
    </div>
  );
}

export default App;
