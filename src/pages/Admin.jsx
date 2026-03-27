import React, { useState } from 'react';
import initialData from '../data/vocaData.json';

const Admin = () => {
  const [list, setList] = useState(initialData);
  const [newWord, setNewWord] = useState({ word: "", meaning: "" });

  const handleAdd = () => {
    // 입력 검증 로직
    if (!newWord.word || !newWord.meaning) return alert("모든 칸을 채워주세요!");
    const newItem = { id: Date.now(), ...newWord, learned: false };
    setList([...list, newItem]);
    setNewWord({ word: "", meaning: "" });
  };

  const handleDelete = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">단어 관리 시스템</h2>
      <div className="flex gap-2 mb-6">
        <input 
          placeholder="영단어" 
          value={newWord.word}
          onChange={(e) => setNewWord({...newWord, word: e.target.value})}
          className="border p-2 rounded w-1/3"
        />
        <input 
          placeholder="뜻" 
          value={newWord.meaning}
          onChange={(e) => setNewWord({...newWord, meaning: e.target.value})}
          className="border p-2 rounded w-1/3"
        />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded">추가</button>
      </div>
      
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">영단어</th>
            <th className="border p-2">뜻</th>
            <th className="border p-2">관리</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id} className="text-center">
              <td className="border p-2">{item.word}</td>
              <td className="border p-2">{item.meaning}</td>
              <td className="border p-2">
                <button onClick={() => handleDelete(item.id)} className="text-red-500">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;