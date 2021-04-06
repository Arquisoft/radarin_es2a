import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Barra from '../components/NavBar';

export const UserContext = React.createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({auth: false});

  const login = () => {
    setUser((user) => ({
      auth: true
    }));
    ReactDOM.render(<Barra showMe={true}/>, document.getElementById('barra'));
  };

  const logout = () => {
    setUser((user) => ({
      auth: false
    }));
    ReactDOM.render(<Barra showMe={false}/>, document.getElementById('barra'));
  };

  return <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>;
}

  