import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. 이동 도구 불러오기

const Signup = () => {
  const navigate = useNavigate(); // 2. 이동 함수 만들기

  const handleSignup = () => {
    // 실제로는 여기서 서버에 저장하는 로직이 들어가지만, 
    // 지금은 성공했다고 치고 안내창을 띄운 뒤 메인으로 보냅니다.
    alert("회원가입이 완료되었습니다! 메인 화면으로 이동합니다.");
    navigate("/"); // 3. 메인('/')으로 이동! (마이페이지로 보내려면 "/mypage")
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">회원가입</h2>
      <div className="space-y-4">
        <input type="text" placeholder="이름" className="w-full p-4 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="email" placeholder="이메일" className="w-full p-4 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="password" placeholder="비밀번호 설정" className="w-full p-4 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400" />
        
        {/* 버튼에 onClick 이벤트 연결 */}
        <button 
          onClick={handleSignup} 
          className="w-full bg-green-500 text-white p-4 rounded-xl font-bold hover:bg-green-600 transition shadow-md"
        >
          가입 완료
        </button>
      </div>
    </div>
  );
};

export default Signup;