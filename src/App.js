import React from 'react';

export default function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #e0f7fa, #f1f8e9)',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: '#00796b', fontSize: '2rem' }}>
        ✅ 키오스크 적응력 테스트 화면입니다!
      </h1>
      <p style={{ color: '#555', fontSize: '1rem', marginTop: '10px' }}>
        이 화면이 보이면 Vercel 배포에 성공한 것입니다 🎉
      </p>
    </div>
  );
}
