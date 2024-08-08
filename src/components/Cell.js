import React, { useState, useEffect } from 'react';
import { useGridStore } from '../store/useGridStore';

const Cell = ({ id }) => {
  const gridData = useGridStore((state) => state.gridData);
  const searchQuery = useGridStore((state) => state.searchQuery);
  const setCellValue = useGridStore((state) => state.setCellValue);
  const [value, setValue] = useState(gridData[id] || '');

  useEffect(() => {
    setValue(gridData[id] || '');
  }, [gridData, id]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setCellValue(id, e.target.value);
  };

  const isMatch = value.includes(searchQuery);

  return (
    <input
      className={`border p-2 text-center ${isMatch ? 'bg-yellow-200' : ''}`}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Cell;


