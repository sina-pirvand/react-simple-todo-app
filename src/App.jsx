import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className="container">
      <div className="note-header">Note Header</div>
      <div className="note-app">
        <AddNewNote />
        <div className="note-container">
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
