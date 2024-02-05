import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatusBar from "./components/NoteStatusBar";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("earliest");
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDeleteNote = (id) => {
    // id=1,2,3 => remove 2 => 1,3
    // Approach 1
    // const filteredNotes = notes.filter((note) => note.id !== id);
    // setNotes(filteredNotes);
    // Approach 2
    setNotes((notes) => notes.filter((note) => note.id != id));
  };
  const handleCompleteNote = (id) => {
    // Approach 1
    // const completeNote = notes.map((note) =>
    //   note.id === id ? { ...note, completed: !note.completed } : note;
    // );
    // setNotes(completeNote);
    // Approach 2
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };
  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        handleSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote handleAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatusBar notes={notes} />
          <NoteList
            notes={notes}
            deleteNote={handleDeleteNote}
            completeNote={handleCompleteNote}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
