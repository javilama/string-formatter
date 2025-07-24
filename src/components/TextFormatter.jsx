import { useState, useEffect } from 'react';

export default function TextFormatter() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [useUnderscore, setUseUnderscore] = useState(false);
  const [history, setHistory] = useState([]);

  const transform = (input) => {
    return input
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita tildes
      .replace(/[^\w\s-]/g, "") // quita caracteres especiales
      .replace(/\s+/g, useUnderscore ? "_" : "-")
      .toLowerCase();
  };

  useEffect(() => {
    if (!text) return;
    const r = transform(text);
    setResult(r);

    const entry = { original: text, result: r };
    const existing = JSON.parse(localStorage.getItem('slugHistory') || '[]');
    if (existing[0]?.result !== r) {
      const updated = [entry, ...existing].slice(0, 10);
      localStorage.setItem('slugHistory', JSON.stringify(updated));
      setHistory(updated);
    }
  }, [text, useUnderscore]);

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-8 bg-formatter-gradient text-white rounded-xl mx-auto min-h-[400px] gap-4 ">
      <textarea
        className="w-full p-2 rounded bg-neutral-800 text-white"
        placeholder="Ingresa texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label className="block mt-5">
        <input
          type="checkbox"
          checked={useUnderscore}
          onChange={() => setUseUnderscore(!useUnderscore)}
        />{" "}
        Usar guiones bajos
      </label>

      <div className="mt-2 bg-[#2D2D2D] p-2 rounded h-10">
        <p>{result}</p>
       
      </div>
      <button
          className="mt-4 text-2xL bg-btnPrimary hover:bg-btnHover px-2 py-2 rounded-btn w-full"
          onClick={() => {
            navigator.clipboard.writeText(result);
            setText('');
          }}
        >
          <b>Copiar</b> 
        </button>

      <div className="mt-4">
       <strong>Historial:</strong>
        <ul className="list-disc pl-5">
          {history.map((item, index) => (
            <li key={index}>
              <span className="text-neutral-300">{item.original}</span> →{" "}
              <span className="text-yellow-400">{item.result}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
