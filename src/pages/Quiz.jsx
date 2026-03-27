import React, { useState } from 'react';
import vocaData from '../data/vocaData.json';

const Quiz = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(null); // 'correct' or 'wrong'
  const [score, setScore] = useState(0);

  const currentWord = vocaData[currentIdx];

  const checkAnswer = () => {
    // 대소문자 구분 없이 비교 (Case-insensitive)
    if (userInput.trim().toLowerCase() === currentWord.word.toLowerCase()) {
      setResult("correct");
      setScore(score + 1);
    } else {
      setResult("wrong");
    }
  };

  const nextQuestion = () => {
    setResult(null);
    setUserInput("");
    setCurrentIdx(currentIdx + 1);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">토익 단어 테스트</h2>
      <div className="bg-blue-50 p-6 rounded-lg shadow">
        <p className="text-lg mb-2">뜻: <span className="font-bold">{currentWord.meaning}</span></p>
        <input 
          type="text" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="영단어를 입력하세요"
        />
        <button onClick={checkAnswer} className="mt-4 bg-blue-500 text-white p-2 w-full rounded">
          정답 확인
        </button>

        {/* 결과 피드백 */}
        {result === "correct" && <p className="text-green-600 mt-2">✔️ 정답입니다!</p>}
        {result === "wrong" && <p className="text-red-600 mt-2">❌ 틀렸습니다. 정답: {currentWord.word}</p>}
        
        {result && (
          <button onClick={nextQuestion} className="mt-2 bg-gray-500 text-white p-2 w-full rounded">
            다음 문제
          </button>
        )}
      </div>
      <p className="mt-4">현재 점수: {score} / {vocaData.length}</p>
    </div>
  );
};

export default Quiz;