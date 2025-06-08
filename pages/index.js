import { useState } from 'react';

export default function Home() {
  const [view, setView] = useState('home');
  const [receipt, setReceipt] = useState('');
  const [status, setStatus] = useState(null);

  const handleQuery = e => {
    e.preventDefault();
    setStatus({ step: 'Pending Review', updated: new Date().toLocaleDateString() });
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: 20 }}>
      <img src="/company-logo.png" alt="YPL GLOBAL INC" style={{ width: 120, marginBottom: 20 }} />
      {view === 'home' ? (
        <>
          <h1>YPL GLOBAL INC 平台</h1>
          <button onClick={() => setView('query')} style={{ padding: '10px 20px', marginTop: 10 }}>
            查询案件状态
          </button>
        </>
      ) : (
        <form onSubmit={handleQuery} style={{ marginTop: 20 }}>
          <input
            type="text"
            placeholder="输入 Receipt Number"
            value={receipt}
            onChange={e => setReceipt(e.target.value)}
            required
            style={{ padding: 8, width: '200px' }}
          />
          <div style={{ marginTop: 10 }}>
            <button type="submit" style={{ padding: '8px 16px' }}>查询</button>
          </div>
          {status && (
            <div style={{ marginTop: 20 }}>
              <p><strong>阶段：</strong>{status.step}</p>
              <p><strong>更新时间：</strong>{status.updated}</p>
            </div>
          )}
          <div style={{ marginTop: 10 }}>
            <button type="button" onClick={() => setView('home')} style={{ color: '#666' }}>
              返回首页
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
