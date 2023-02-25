import axios from 'axios';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({
  isLoggedIn: false,
  handleLogin: () => {},
  handleLogout: () => {},
  errors: '',
});

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storagedisLoggedIn = localStorage.getItem('isLoggedIn', isLoggedIn);
    if (storagedisLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async formData => {
    try {
      const response = await axios.post('/api/v1/login', {
        ...formData,
      });
      if (response) {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
        navigate('/', { replace: true });
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErrors('로그인에 실패했습니다\n이메일 혹은 비밀번호를 확인해주세요');
      }
    }
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
      errors,
    }),
    [isLoggedIn, errors],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
