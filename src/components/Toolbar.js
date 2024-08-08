import React from 'react';
import { useGridStore } from '../store/useGridStore';

const Toolbar = () => {
  const undo = useGridStore((state) => state.undo);
  const redo = useGridStore((state) => state.redo);
  const searchQuery = useGridStore((state) => state.searchQuery);
  const setSearchQuery = useGridStore((state) => state.setSearchQuery);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-between p-4 bg-gray-100">
      <button
        className="px-4 py-2 bg-blue-500 text-white"
        onClick={undo}
        disabled={useGridStore((state) => state.history).length === 0}
      >
        Undo
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white"
        onClick={redo}
        disabled={useGridStore((state) => state.future).length === 0}
      >
        Redo
      </button>
      <input
        className="border p-2"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Toolbar;

