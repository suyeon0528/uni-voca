import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  // 실제로는 DB에서 가져오겠지만, 지금은 가상 데이터를 세팅합니다.
  const [stats, setStats] = useState({
    totalWords: 500,
    learnedWords: 125,
    quizTaken: 8,
    correctAnswers: 64,
    totalQuestions: 80,
    rankPercent: 12 // 상위 12%
  });

  // 진행률 및 정답률 계산
  const progressRate = Math.round((stats.learnedWords / stats.totalWords) * 100);
  const accuracyRate = Math.round((stats.correctAnswers / stats.totalQuestions) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-black text-gray-800 mb-8">학습 리포트 📊</h2>

      {/* 상단 요약 카드  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-bold">나의 위치</p>
          <p className="text-3xl font-black text-blue-600 mt-2">상위 {stats.rankPercent}%</p>
          <p className="text-xs text-gray-400 mt-1">전체 사용자 1,240명 기준</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-bold">완료한 단어</p>
          <p className="text-3xl font-black text-green-500 mt-2">{stats.learnedWords} / {stats.totalWords}</p>
          <p className="text-xs text-gray-400 mt-1">목표까지 {stats.totalWords - stats.learnedWords}단어 남음</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-bold">평균 정답률</p>
          <p className="text-3xl font-black text-orange-500 mt-2">{accuracyRate}%</p>
          <p className="text-xs text-gray-400 mt-1">최근 8회 테스트 결과</p>
        </div>
      </div>

      {/* 시각화 그래프 영역  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* 전체 학습 진행률 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-500 rounded-full"></span> 전체 학습 진행률
          </h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">Progress</span></div>
              <div className="text-right"><span className="text-sm font-bold inline-block text-blue-600">{progressRate}%</span></div>
            </div>
            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-blue-100">
              <div style={{ width: `${progressRate}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-1000"></div>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4 font-medium">조금만 더 힘내세요! 마스터 등급까지 멀지 않았습니다.</p>
        </div>

        {/* 정답률 분포 (심플 바 차트) */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-orange-500 rounded-full"></span> 최근 테스트 정답률
          </h3>
          <div className="flex items-end justify-between h-32 gap-2">
            {[40, 65, 50, 85, 70, 95, accuracyRate].map((val, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div 
                  style={{ height: `${val}%` }} 
                  className={`w-full rounded-t-lg transition-all duration-700 ${idx === 6 ? 'bg-orange-500' : 'bg-orange-200'}`}
                ></div>
                <span className="text-[10px] text-gray-400 mt-2">{idx + 1}회</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;