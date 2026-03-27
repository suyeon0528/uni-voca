import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExamSelect = () => {
  const [step, setStep] = useState(1); // 1: 시험 선택, 2: 점수대 선택
  const navigate = useNavigate();

  const handleExamSelect = (examId) => {
    localStorage.setItem('selectedExam', examId);
    if (examId === 'toeic') {
      setStep(2); // 토익이면 점수대 선택으로 이동
    } else {
      alert(`${examId.toUpperCase()} 준비 과정이 선택되었습니다.`);
      navigate('/wordlist');
    }
  };

  const handleLevelSelect = (level) => {
    localStorage.setItem('selectedLevel', level);
    alert(`토익 ${level} 목표 반이 설정되었습니다!`);
    navigate('/wordlist');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {step === 1 ? (
        <>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-800 mb-4">준비 중인 시험 🎯</h2>
            <p className="text-gray-500">목표하는 시험을 먼저 선택해 주세요.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['toeic', 'toefl', 'sat'].map((exam) => (
              <button 
                key={exam}
                onClick={() => handleExamSelect(exam)}
                className="p-10 bg-white rounded-3xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all font-black text-2xl uppercase text-gray-700"
              >
                {exam}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-blue-600 mb-4">TOEIC 목표 점수 🚀</h2>
            <p className="text-gray-500">수준에 맞는 단어를 추천해 드립니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { label: "600-700점", desc: "기초 필수 단어 위주", val: "600" },
              { label: "700-800점", desc: "실전 빈출 단어 위주", val: "700" },
              { label: "800-900점", desc: "고득점 완성 단어 위주", val: "800" },
              { label: "900점 이상", desc: "만점 방지용 고난도 단어", val: "900" }
            ].map((level) => (
              <button 
                key={level.val}
                onClick={() => handleLevelSelect(level.val)}
                className="p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <div className="text-xs font-bold text-blue-500 mb-1">Target</div>
                <div className="text-2xl font-black text-gray-800">{level.label}</div>
                <div className="text-sm text-gray-400 mt-2">{level.desc}</div>
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setStep(1)} className="text-gray-400 text-sm hover:underline">← 시험 다시 선택하기</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExamSelect;