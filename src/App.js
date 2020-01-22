import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// UI Component
import { Container } from '@material-ui/core';

// Custom Components
import TopBar from './components/TopBar'
import Users from './components/Users'

// Services
import { getUsers } from './services/users';

// Actions
import { 
  getUsersSuccess,
  getUsersFailed 
} from "./actions/users";

const App = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [loader, setloader] = useState(false);  

  // User Table Data
  const userTableData = users.data.length ? (
        users.data.map((item) => {
          return {
            profileImage : item.picture.thumbnail,
            name: item.name.first + ' ' + item.name.last,
            city: item.location.city,
            state: item.location.state
          }
        })
      ) : [];

  useEffect(() => {  
    // ~~~ Get Users from API ~~~
    setloader(true);
    getUsers(100)
    .then(res => {
      setloader(false);
      dispatch(getUsersSuccess(res.results && res.results.length ? res.results : []));
    })
    .catch(error => {
      setloader(false);
      dispatch(getUsersFailed('Oops, Something wen\'t wrong.'));
    });
  }, [dispatch]);

  return (
    <Fragment>
      <Container>          
        <TopBar />          
        <Users 
          users={userTableData}
          usersInfo={users.data}
          loader={loader}
        />
      </Container>
    </Fragment>      
  );  
}

export default App;
