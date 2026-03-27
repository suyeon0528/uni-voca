import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

console.log("리액트 엔진 시작!"); // 터미널이 아니라 브라우저 콘솔에 떠야 합니다.

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("HTML에서 'root' 아이디를 찾을 수 없습니다!");
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("렌더링 명령 완료!");
}