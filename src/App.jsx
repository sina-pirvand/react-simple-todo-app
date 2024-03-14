import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatusBar from "./components/NoteStatusBar";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("earliest");

  // const handleAddNote = (newNote) => {
  // setNotes((prevNotes) => [...prevNotes, newNote]);
  // dispatch({ type: "ADDED", payload: newNote });
  // };
  // const handleDeleteNote = (id) => {
  // id=1,2,3 => remove 2 => 1,3
  // Approach 1
  // const filteredNotes = notes.filter((note) => note.id !== id);
  // setNotes(filteredNotes);
  // Approach 2
  // setNotes((notes) => notes.filter((note) => note.id != id));
  // dispatch({ type: "DELETED", payload: id });
  // };
  // const handleCompleteNote = (id) => {
  // Approach 1
  // const completeNote = notes.map((note) =>
  //   note.id === id ? { ...note, completed: !note.completed } : note;
  // );
  // setNotes(completeNote);
  // Approach 2
  // setNotes((notes) =>
  //   notes.map((note) =>
  //     note.id === id ? { ...note, completed: !note.completed } : note
  //   )
  // );
  // dispatch({ type: "COMPLETED", payload: id });
  // };

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader
          sortBy={sortBy}
          handleSort={(e) => setSortBy(e.target.value)}
        />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatusBar />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
