import React from 'react';
import './theme.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionAsk from './pages/QuestionAsk';
import Questions from './pages/Questions';
import QuestionEdit from './pages/QuestionEdit';
import UsersPersonalPage from './pages/UsersPersonalPage';
import Tags from './pages/Tags';
import Users from './pages/Users';
import BaseLayout from './components/layouts/BaseLayout';
import MainLayout from './components/layouts/MainLayout';
import Guide from './pages/Guide';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout hasSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/ask" element={<QuestionAsk />} />
          <Route path="/edit" element={<QuestionEdit />} />
          <Route path="/guide" element={<Guide />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/tags" element={<Tags />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/1" element={<UsersPersonalPage />} />
        </Route>
        <Route element={<BaseLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
