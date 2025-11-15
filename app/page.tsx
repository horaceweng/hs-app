// src/app/page.tsx

// ⛔️ 注意！這裡「沒有」"use client"; 
// 
// 這代表它是一個「伺服器元件」
// 它在伺服器（Node.js環境）上執行！

import Counter from "@/components/Counter"; // 👈 從 components 匯入我們的計數器

export default function HomePage() {

  // 這行 log 會在哪裡顯示？ 
  // 答案：VS Code 終端機！ (因為這是伺服器元件)
  console.log("HomePage 伺服器元件正在執行...");

  // 這是我們的 "Server Action" (伺服器動作)
  async function handleServerAction() {
    "use server"; // 👈 標記這是一個「伺服器動作」

    // 這是您未來要寫入 D1 資料庫的地方
    console.log("伺服器動作被觸發了！ (只會在 VS Code 終端機顯示)");
  }

  return (
    <main style={{ padding: '50px', fontSize: '20px' }}>
      <h1>這是一個「伺服器元件」(page.tsx)</h1>
      <p>它在伺服器上渲染，只送 HTML 到瀏覽器。</p>

      <hr style={{ margin: '20px 0' }} />

      {/* 我們在「伺服器元件」中，
        載入了我們的「客戶端元件」
        這就是 App Router 的標準模式！
      */}
      <Counter />

      <hr style={{ margin: '20px 0' }} />

      <h2>這是一個「伺服器動作」表單</h2>
      <form action={handleServerAction}>
        <button type="submit" style={{ padding: '10px', fontSize: '18px' }}>
          觸發伺服器動作
        </button>
      </form>

    </main>
  );
}