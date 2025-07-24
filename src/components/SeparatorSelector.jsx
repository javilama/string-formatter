import React from 'react';

// Selector de tipo de separador
export default function SeparatorSelector({ separator, onChange }) {
  return (
    <div className="mt-4">
      <label className="mr-2 font-medium">Separador:</label>
      <select
        value={separator}
        onChange={(e) => onChange(e.target.value)}
        className="border px-3 py-2 rounded bg-white dark:bg-gray-800 dark:text-white"
      >
        <option value="-">Guion medio (-)</option>
        <option value="_">Guion bajo (_)</option>
      </select>
    </div>
  );
}
