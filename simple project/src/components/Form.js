import React,{useState} from 'react'
import './Form.css';

export default function () {

    const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [posts,setPosts] = useState([]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    //console.log(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const eventHandler = (event) => {
      event.preventDefault();

      const postData = {
        name: enteredName,
        email: enteredEmail,
        date: new Date(enteredDate)
      };
      console.log(postData);
      setEnteredDate('');
      setEnteredName('');
      setEnteredEmail('');
      
  }

  return (
    <div className='form'>
        <h1>Form</h1>
      <form onSubmit={eventHandler}>
        <div className='text-box'>
          <label>Name </label>
          <input type='text' required value = {enteredName} id = 'btn' onChange={nameChangeHandler}/>
        </div>
        <div className='text-box'>
          <label>Email </label>
          <input type='text' required value = {enteredEmail} id = 'btn' onChange={emailChangeHandler}/>
        </div>
        <div className='text-box'>
          <label>Date </label>
          <input type='date' required value = {enteredDate} id = 'btn' onChange={dateChangeHandler}/>
        </div>
        <div className='text-submit'>
          <button className='btn-submit'>Submit</button>
        </div>
       </form>
    </div>
  )
}
