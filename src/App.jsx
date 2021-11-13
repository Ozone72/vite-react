import { useState } from 'react';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="bg-gray-700 min-h-screen flex flex-col items-center justify-center text-white text-3xl">
        <img src={logo} className="h-40 pointer-events-none" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-green-300"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-green-300"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
