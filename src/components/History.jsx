import React from 'react';

// Historial de conversiones anteriores
export default function History({ items, onSelect }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Historial reciente</h2>
      <ul className="space-y-1">
        {items.slice(0, 5).map((item, idx) => (
          <li key={idx}>
            <button
              onClick={() => onSelect(item.original)}
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              {item.result}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
