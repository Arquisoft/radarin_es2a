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
    ReactDOM.render(<div id="barra"><Barra showMe={true}/></div>, document.getElementById('barra'));
  };

  const logout = () => {
    setUser((user) => ({
      auth: false
    }));
    ReactDOM.render(<div id="barra"><Barra showMe={false}/></div>, document.getElementById('barra'));
  };

  return <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>;
}

  