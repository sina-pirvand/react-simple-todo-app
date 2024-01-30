const NoteStatusBar = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const pendingNotes = allNotes - completedNotes;

  if (!allNotes) return <h2>No Todo To Show ¯\_(ツ)_/¯</h2>;
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Pending <span>{pendingNotes}</span>
      </li>
    </ul>
  );
};
export default NoteStatusBar;