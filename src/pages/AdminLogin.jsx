import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (pw === "admin1234") { // 예시 비밀번호
      navigate("/admin");
    } else {
      alert("관리자 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">관리자 인증</h2>
      <input 
        type="password" 
        placeholder="관리자 암호를 입력하세요"
        className="w-full p-4 border rounded-xl mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        onChange={(e) => setPw(e.target.value)}
      />
      <button onClick={handleLogin} className="w-full bg-gray-800 text-white p-4 rounded-xl font-bold hover:bg-black transition">
        관리자 페이지 접속
      </button>
    </div>
  );
};

export default AdminLogin;