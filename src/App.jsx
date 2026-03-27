import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyPage from './pages/MyPage';
import WordList from './pages/WordList';
import Quiz from './pages/Quiz';
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';
import ForgotPassword from './pages/ForgotPassword';
import Attendance from './pages/Attendance';
import Dashboard from './pages/Dashboard';
import ExamSelect from './pages/ExamSelect';
import AiQuiz from './pages/AiQuiz'; // AI 퀴즈 추가!

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-black text-blue-600 tracking-tighter">Uni-Voca</Link>
            <div className="hidden md:flex gap-6 items-center font-bold text-gray-600 text-sm uppercase tracking-widest">
              <Link to="/exam-select" className="hover:text-blue-600 transition">시험선택</Link>
              <Link to="/wordlist" className="hover:text-blue-600 transition">단어장</Link>
              <Link to="/quiz" className="hover:text-blue-600 transition">일반테스트</Link>
              {/* AI 메뉴 강조 UI  */}
              <Link to="/ai-quiz" className="flex items-center gap-1.5 text-blue-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping"></span>
                AI스마트퀴즈
              </Link>
              <Link to="/dashboard" className="hover:text-blue-600 transition">대시보드</Link>
              <Link to="/attendance" className="hover:text-blue-600 transition">출석체크</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition">로그인</Link>
              <Link to="/admin-login" className="text-[10px] text-gray-300">Admin</Link>
            </div>
          </div>
        </nav>

        <main className="container mx-auto py-12 px-6">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/wordlist" element={<WordList />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exam-select" element={<ExamSelect />} />
            <Route path="/ai-quiz" element={<AiQuiz />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;