import React from 'react';

const MyPage = () => (
  <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">마이페이지</h2>
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-xl">
        <p className="text-blue-600 font-bold mb-1">나의 학습 등급</p>
        <h3 className="text-2xl font-black text-blue-900 italic">Toeic Master 🔥</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded-xl text-center">
          <p className="text-gray-500 text-sm">외운 단어</p>
          <p className="text-2xl font-bold">128개</p>
        </div>
        <div className="border p-4 rounded-xl text-center">
          <p className="text-gray-500 text-sm">테스트 횟수</p>
          <p className="text-2xl font-bold">12회</p>
        </div>
      </div>
      <button className="w-full text-gray-400 text-sm hover:underline">회원 정보 수정</button>
    </div>
  </div>
);
export default MyPage;