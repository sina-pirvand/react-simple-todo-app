import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatusBar from "./components/NoteStatusBar";

function App() {
  const [notes, setNotes] = useState([]);
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
      <div className="note-header">Note Header</div>
      <div className="note-app">
        <AddNewNote handleAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatusBar notes={notes} />
          <NoteList
            notes={notes}
            deleteNote={handleDeleteNote}
            completeNote={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
