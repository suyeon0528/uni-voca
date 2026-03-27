import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => (
  <div className="text-center py-20">
    <h1 className="text-5xl font-black text-gray-800 mb-6">
      대학생을 위한 스마트 <span className="text-blue-600">토익 단어장</span>
    </h1>
    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
      Uni-Voca와 함께라면 복잡한 토익 단어도 체계적으로 관리하고 <br/> 주관식 테스트로 완벽하게 내 것으로 만들 수 있습니다.
    </p>
    <div className="flex justify-center gap-4">
      <Link to="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition">
        지금 시작하기 (무료)
      </Link>
      <Link to="/wordlist" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition">
        단어 둘러보기
      </Link>
    </div>
  </div>
);

export default Main;