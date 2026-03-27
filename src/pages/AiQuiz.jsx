import React, { useState, useEffect } from 'react';
import vocaData from '../data/vocaData.json';

const AiQuiz = () => {
  const [currentWord, setCurrentWord] = useState(null);
  const [aiSentence, setAiSentence] = useState({ beginning: "", blank: "", end: "" });
  const [userAnswer, setUserAnswer] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  // API KEY는 그대로 유지합니다.
  const API_KEY = "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"; 

  const generateAiQuestion = async () => {
    setStatus("loading");
    setFeedback("");
    setUserAnswer("");
    
    const randomIdx = Math.floor(Math.random() * vocaData.length);
    const wordObj = vocaData[randomIdx];
    setCurrentWord(wordObj);

    const prompt = `Create an English sentence where '${wordObj.word}' fits. Replace ONLY '${wordObj.word}' with '____'. Response must be ONLY a JSON: { "beginning": "...", "blank": "____", "end": "..." }`;

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173", 
          "X-Title": "UniVoca App"
        },
        body: JSON.stringify({
          // 💡 모델을 더 안정적인 google/gemma로 변경해봅니다.
          "model": "openrouter/auto",
          "messages": [{ "role": "user", "content": prompt }]
        })
      });

      // 에러 핸들링 강화
      if (!response.ok) {
        const errorDetail = await response.text();
        console.error("서버 응답 상태:", response.status);
        console.error("상세 내용:", errorDetail);
        throw new Error(`HTTP Error ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error("AI 응답 데이터가 없습니다.");
      }

      const aiResponse = data.choices[0].message.content;
      
      // JSON 파싱 (AI가 가끔 ```json ... ``` 을 붙이는 경우 대비)
      const cleanJson = aiResponse.replace(/```json|```/g, "").trim();
      const parsedSentence = JSON.parse(cleanJson);
      
      setAiSentence(parsedSentence);
      setStatus("success");

    } catch (error) {
      console.error("AI 호출 상세 실패:", error);
      setStatus("error");
      setFeedback("AI 서버 연결에 실패했습니다. (API 키나 모델 상태를 확인해주세요)");
    }
  };

  const checkAnswer = () => {
    if (userAnswer.trim().toLowerCase() === currentWord.word.toLowerCase()) {
      setFeedback("정답입니다! 🎉 +20포인트!");
    } else {
      setFeedback(`아쉽네요. 정답은 '${currentWord.word}'입니다.`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10 p-6">
      <div className="text-center">
        <h2 className="text-4xl font-black text-gray-800 mb-3 tracking-tighter">AI 스마트 퀴즈 🤖</h2>
        <p className="text-gray-500">AI가 실시간으로 생성한 문맥 속에서 단어를 맞춰보세요!</p>
      </div>

      {status === "idle" && (
        <div className="text-center py-20 bg-white rounded-3xl shadow-xl border-4 border-dashed border-gray-100">
          <button onClick={generateAiQuestion} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition">
            문제 생성 시작
          </button>
        </div>
      )}

      {status === "loading" && (
        <div className="text-center py-20 bg-white rounded-3xl shadow-lg border border-blue-50">
          <div className="animate-spin inline-block w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full mb-4"></div>
          <p className="text-blue-600 font-bold">AI가 문장을 구성하고 있습니다...</p>
        </div>
      )}

      {status === "success" && (
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          <div className="bg-blue-50 p-8 rounded-2xl mb-8 leading-relaxed text-xl text-gray-800 font-medium border border-blue-100">
            {aiSentence.beginning}
            <span className="mx-2 px-4 py-1 bg-yellow-300 text-yellow-900 rounded-lg font-black border-2 border-yellow-400 shadow-sm">{aiSentence.blank}</span>
            {aiSentence.end}
          </div>

          <div className="flex gap-4">
            <input 
              type="text" 
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
              placeholder="단어를 입력하세요"
              className="flex-1 p-5 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition font-bold text-lg"
            />
            <button onClick={checkAnswer} className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black hover:bg-blue-700 transition shadow-lg">
              확인
            </button>
          </div>

          {feedback && (
            <div className={`mt-6 p-5 rounded-2xl font-black text-center text-lg shadow-inner ${feedback.includes('정답') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {feedback}
            </div>
          )}

          <button onClick={generateAiQuestion} className="w-full mt-10 py-4 text-gray-400 font-bold hover:text-blue-500 transition border-t">
            다른 문제 생성하기 →
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="text-center py-20 bg-white rounded-3xl shadow-lg border-2 border-red-50">
          <p className="text-red-500 font-bold text-lg mb-4">{feedback}</p>
          <button onClick={generateAiQuestion} className="bg-gray-100 px-6 py-2 rounded-xl text-gray-600 hover:bg-gray-200 transition">다시 시도</button>
        </div>
      )}
    </div>
  );
};

export default AiQuiz;