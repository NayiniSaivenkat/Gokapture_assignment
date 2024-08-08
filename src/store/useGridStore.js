import create from 'zustand';

export const useGridStore = create((set) => ({
  gridData: {},
  history: [],
  future: [],
  searchQuery: '',

  setCellValue: (id, value) => set((state) => {
    const newGridData = { ...state.gridData, [id]: value };
    const newHistory = [...state.history, state.gridData];
    return {
      gridData: newGridData,
      history: newHistory,
      future: [],
    };
  }),

  setSearchQuery: (query) => set(() => ({
    searchQuery: query,
  })),

  undo: () => set((state) => {
    if (state.history.length === 0) return state;
    const previousState = state.history[state.history.length - 1];
    const newHistory = state.history.slice(0, -1);
    return {
      gridData: previousState,
      history: newHistory,
      future: [state.gridData, ...state.future],
    };
  }),

  redo: () => set((state) => {
    if (state.future.length === 0) return state;
    const nextState = state.future[0];
    const newFuture = state.future.slice(1);
    return {
      gridData: nextState,
      history: [...state.history, state.gridData],
      future: newFuture,
    };
  }),
}));


