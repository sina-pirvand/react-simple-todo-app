import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDeleteNote = () => {};
  return (
    <div className="container">
      <div className="note-header">Note Header</div>
      <div className="note-app">
        <AddNewNote handleAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList notes={notes} deleteNote={handleDeleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
