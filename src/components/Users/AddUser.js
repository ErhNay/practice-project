import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');

  // ErrorModal State
  const [error, setError] = useState();

  //get the username
  const getUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  //get user's age
  const getAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  //save user's details
  const addUserHandler = (event) => {
    event.preventDefault();

    //Form validation
    if (username.trim().length === 0 || userAge.trim() === 0) {
      //Set Error message
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age. (non-empty value)',
      });
      return;
    }

    //convert the age input to a number
    if (+userAge < 1) {
      //Set Error message
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age. (> 0)',
      });

      console.log(error);
      return;
    }

    props.onAddUser(username, userAge);
    setUsername('');
    setUserAge('');
  };

  //Reset or Clear Error Modal
  const errorModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            onChange={getUsernameHandler}
            value={username}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            id='age'
            onChange={getAgeHandler}
            value={userAge}
          />
          <Button type='submit'>Add Users</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
