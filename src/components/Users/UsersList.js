import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  const renderUser = props.users.map((user) => (
    <li key={user.id}>
      {user.name} ({user.age} years old)
    </li>
  ));

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.length > 0 ? (
          renderUser
        ) : (
          <h4 className={styles.text}>No details found. Maybe add?</h4>
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
