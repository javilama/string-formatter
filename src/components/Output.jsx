import React from 'react';

// Muestra el resultado procesado + botón copiar + vista previa
export default function Output({ result, onCopy }) {
  return (
    <div className="mt-4">
      <label className="block font-bold mb-1">Resultado:</label>
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-3 rounded border break-words text-gray-900 dark:text-white">
          {result || <span className="text-gray-400">Nada para mostrar</span>}
        </div>
        {result && (
          <button
            onClick={onCopy}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Copiar
          </button>
        )}
      </div>

      {result && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Vista previa: <code>https://miweb.com/{result}</code>
        </div>
      )}
    </div>
  );
}
