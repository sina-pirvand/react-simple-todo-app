import { createContext, useContext, useReducer } from "react";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADDED": {
      return [...state, action.payload];
    }
    case "DELETED": {
      return state.filter((note) => note.id !== action.payload);
    }
    case "COMPLETED": {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("Unknown Action" + action.type);
  }
};

//1. Create context
export const NotesContext = createContext(null);
export const NotesDispatchContext = createContext(null);

//2. Provide Context
export const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
};

//3. Use Context
export const useNotes = () => useContext(NotesContext);
export const useNotesDispatch = () => useContext(NotesDispatchContext);
