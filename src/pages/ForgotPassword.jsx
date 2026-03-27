import React from 'react';

const ForgotPassword = () => (
  <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
    <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 font-black">비밀번호 찾기</h2>
    <p className="text-center text-gray-500 mb-8 text-sm">가입하신 이메일로 임시 비밀번호를 발송해 드립니다.</p>
    <input type="email" placeholder="email@example.com" className="w-full p-4 bg-gray-50 border rounded-xl mb-4 outline-none focus:ring-2 focus:ring-blue-400" />
    <button className="w-full bg-gray-800 text-white p-4 rounded-xl font-bold hover:bg-black transition">이메일 발송</button>
  </div>
);
export default ForgotPassword;