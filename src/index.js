import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '16px', textAlign: 'center', background: '#ffffff', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
        <h1 style={{ margin: 0 }}>Hello — small UI update</h1>
      </header>

      <main style={{ flex: 1, padding: '24px' }}>
        <App />
      </main>

      <footer style={{ padding: '12px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
        Made with ❤️ — small footer
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
