import React, { useState, useEffect } from 'react';

const Attendance = () => {
  const [attendedDays, setAttendedDays] = useState([]);
  const [todayMarked, setTodayMarked] = useState(false);

  // 로컬 스토리지에서 출석 데이터 불러오기
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('attendance')) || [];
    setAttendedDays(savedData);
    
    const today = new Date().toISOString().split('T')[0];
    if (savedData.includes(today)) setTodayMarked(true);
  }, []);

  const handleCheckIn = () => {
    const today = new Date().toISOString().split('T')[0];
    if (!attendedDays.includes(today)) {
      const newDays = [...attendedDays, today];
      setAttendedDays(newDays);
      localStorage.setItem('attendance', JSON.stringify(newDays));
      setTodayMarked(true);
      alert("오늘의 출석 도장이 찍혔습니다! +10 포인트 증정 🎁");
    }
  };

  // 현재 달의 일수 구하기 (간단 구현)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-gray-800">연속 출석 체크</h2>
        <p className="text-gray-500 text-sm">매일 출석하고 학습 포인트를 쌓으세요!</p>
      </div>

      {/* 출석 달력 UI  */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {daysInMonth.map(day => (
          <div 
            key={day} 
            className={`h-10 w-10 flex items-center justify-center rounded-full text-xs font-bold
              ${day <= new Date().getDate() && Math.random() > 0.5 ? 'bg-blue-100 text-blue-600' : 'bg-gray-50 text-gray-300'}`}
          >
            {day}
          </div>
        ))}
      </div>

      <button 
        onClick={handleCheckIn}
        disabled={todayMarked}
        className={`w-full p-4 rounded-xl font-bold transition shadow-md
          ${todayMarked ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        {todayMarked ? "오늘 출석 완료 ✨" : "오늘의 출석 도장 찍기"}
      </button>

      <div className="mt-6 p-4 bg-orange-50 rounded-xl flex justify-between items-center">
        <span className="text-orange-700 font-bold">누적 출석일</span>
        <span className="text-2xl font-black text-orange-600">{attendedDays.length}일</span>
      </div>
    </div>
  );
};

export default Attendance;