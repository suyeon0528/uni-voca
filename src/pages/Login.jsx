import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. useNavigate 추가

const Login = () => {
  const navigate = useNavigate(); // 2. 이동 함수 생성

  const handleLogin = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    
    // 실제 서비스라면 여기서 아이디/비번 검사를 하겠지만,
    // 지금은 과제용이므로 바로 성공 메시지를 띄우고 이동시킵니다!
    alert("로그인에 성공했습니다! 환영합니다.");
    navigate("/"); // 3. 메인 화면으로 이동 (마이페이지로 보내려면 "/mypage")
  };

  return (
    <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-black text-center text-gray-800 mb-2">Login</h2>
      <p className="text-center text-gray-400 mb-10 text-sm">Uni-Voca에 오신 것을 환영합니다.</p>
      
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-2 ml-1 uppercase">Email Address</label>
          <input 
            type="email" 
            placeholder="example@univoca.com" 
            className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none transition-all" 
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-2 ml-1 uppercase">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-400 outline-none transition-all" 
            required
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white p-4 rounded-2xl font-black hover:bg-blue-700 transition shadow-lg shadow-blue-100 mt-4"
        >
          로그인하기
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-50 text-center text-sm text-gray-500 flex justify-between px-2">
        <Link to="/forgot-password" rounded-xl className="hover:text-blue-600 transition">비밀번호 찾기</Link>
        <Link to="/signup" className="hover:text-blue-600 font-bold text-blue-500 transition">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;