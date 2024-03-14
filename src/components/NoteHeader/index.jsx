import { useNotes } from "../../context/NotesContext";

const NoteHeader = ({ sortBy, handleSort }) => {
  const notes = useNotes();
  return (
    <div className="note-header">
      <h1>My Notes {notes.length}</h1>
      <select value={sortBy} onChange={handleSort}>
        <option value="earliest">sort by earliest</option>
        <option value="latest">sort by latest</option>
        <option value="completed">sort by completed</option>
      </select>
    </div>
  );
};
export default NoteHeader;
