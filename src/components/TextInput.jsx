import React from 'react';

// Área de texto controlada
export default function TextInput({ value, onChange }) {
  return (
    <textarea
      placeholder="Ingresa tu texto aquí..."
      className="w-full p-3 border rounded bg-white dark:bg-gray-800 dark:text-white transition"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={5}
    />
  );
}
