// src/components/Counter.tsx

"use client"; // 👈 標記這是一個「客戶端元件」

import { useState } from "react";

// 我們將元件改名為 Counter (大寫 C 開頭)
export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    // 我們只回傳這個元件相關的 JSX
    <div style={{ padding: '20px', border: '1px solid gray' }}>
      <h2>這是一個「客戶端元件」</h2>
      <p>你點擊了 {count} 次</p>

      <button onClick={handleClick} style={{ padding: '10px', fontSize: '18px' }}>
        點我
      </button>
    </div>
  );
}