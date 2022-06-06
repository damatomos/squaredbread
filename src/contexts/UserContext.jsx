import React from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {

  const [user, setUser] = React.useState(null);
  const [logged, setLogged] = React.useState(false);

  function getUser() {
    const local = localStorage.getItem('user');
    if (local)  { 
      setUser(JSON.parse(local));
      setLogged(true);
    }
    return user;
  }

  async function register(firstName, lastName, phoneNumber, email, password, confirmPassword) {
    if ( firstName && lastName && email && password && confirmPassword ) {
      if ( password === confirmPassword ) {
        const result = await axios.post('http://localhost:4040/users/register', {
          firstName,
          lastName,
          phoneNumber,
          email,
          password
        });
        if (result.data) {
          setUser(result.data);
          setLogged(true);
          localStorage.setItem('user', JSON.stringify(result.data));
          return true;
        }
      }
    }
    return false;
  }

  async function login(email, password) {
    if ( email && password ) {
      const result = await axios.post('http://localhost:4040/users/login', {
        email,
        password
      });
      console.log(result);

      if (result) {
        if (result.data) {
          setUser(result.data);
          setLogged(true);
          localStorage.setItem('user', JSON.stringify(result.data));
          return true;
        }
      }
    }
    return false;
  }

  function logout() {
    if (logged) {
      localStorage.removeItem('user');
      setLogged(false);
      setUser(null);
      return true;
    }
    return false;
  }

  React.useEffect(() => {
    if (getUser()) {
      setLogged(true);
    }
  }, []);

  return <UserContext.Provider value={ {login, logout, register, logged, user, getUser} }>
    {children}
  </UserContext.Provider>
}