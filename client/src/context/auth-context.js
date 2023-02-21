import { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({
  isLoggedIn: false,
  handleLogin: () => {},
  handleLogout: () => {},
});

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storagedisLoggedIn = localStorage.getItem('isLoggedIn', isLoggedIn);
    if (storagedisLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
    navigate('/', { replace: true });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      isLoggedIn,
      handleLogin,
      handleLogout,
    }),
    [isLoggedIn],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
