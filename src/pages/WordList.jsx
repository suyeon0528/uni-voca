import React, { useState, useEffect } from 'react';
import vocaData from '../data/vocaData.json';

const WordList = () => {
  const [words, setWords] = useState(vocaData);
  const learnedCount = words.filter(w => w.learned).length;
  const progress = Math.round((learnedCount / words.length) * 100);

  const toggleLearn = (id) => {
    setWords(words.map(w => w.id === id ? { ...w, learned: !w.learned } : w));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">나의 단어장</h2>
      {/* 대시보드: 학습률 표시 */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="mb-2 font-semibold">오늘의 학습 진척도: {progress}%</p>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      
      <ul className="space-y-2">
        {words.map(word => (
          <li key={word.id} className="flex justify-between items-center p-3 border rounded shadow-sm">
            <span><strong>{word.word}</strong>: {word.meaning}</span>
            <input 
              type="checkbox" 
              checked={word.learned} 
              onChange={() => toggleLearn(word.id)}
              className="w-5 h-5"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;